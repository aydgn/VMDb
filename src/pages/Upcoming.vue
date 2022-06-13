<script setup>
import { ref, onMounted } from 'vue'
const apiData = ref([]);
const apikey = import.meta.env.VITE_KEY;

const fetchApiData = async () => {
  await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${apikey}`
  )
    .then((res) => res.json())
    .then((data) => { apiData.value = data.results })
    .then(() => console.log(apiData))
    .catch((err) => { console.log(err) });
};

onMounted(fetchApiData);

</script>

<template>
  <div class="movies">
    <router-link
      v-for="(data, index) in apiData"
      :key="data.id"
      :to="{ name: 'detail', params: { id: data.id }}"
      class="movies__link"
      draggable="false"
    >
      <img
        :src="`https://image.tmdb.org/t/p/w200${data.poster_path}`"
        :alt="data.title"
        :title="data.title"
        height="300"
        width="200"
        class="movies__poster"
        loading="lazy"
        draggable="false"
      />
      <span class="movies__name">{{ data.title }}</span>
      </router-link>


  </div>
</template>

<style lang="scss" scoped>
.movies {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1320px;
  gap: 1rem;
  margin: 0 auto;


  &__link {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    align-items: center;
    justify-content: flex-start;
    width: 200px;
    text-align: center;
    text-decoration: none;
    color: inherit;
    transition: all 0.2s ease-in-out;
  }
}
</style>

