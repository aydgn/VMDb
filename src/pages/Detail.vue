<template>
  <section
    class="hero"
    :style="`background-image: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%) ,url(https://image.tmdb.org/t/p/w1280${apiData.backdrop_path});`"
  >
    <div class="hero__info container">
      <div class="hero__poster">
        <a
          :href="`https://image.tmdb.org/t/p/original${apiData.poster_path}`"
          :alt="apiData.title"
          :title="apiData.title"
          target="_blank"
        >
          <img
            :src="`https://image.tmdb.org/t/p/w200${apiData.poster_path}`"
            :alt="apiData.title"
            :title="apiData.title"
          />
        </a>
      </div>
      <div class="hero__details">
        <h1 class="hero__title">{{ apiData.title }}</h1>
        <h4 class="hero__tagline">{{ apiData.tagline }}</h4>
        <div class="hero__row">
          <span class="hero__rating">
            <b>Rating:</b>
            {{ apiData.vote_average }} / 10
          </span>
          <span class="hero__runtime">
            <b>Time:</b>
            {{ apiData.runtime }} min
          </span>
        </div>
        <div class="hero__row">
          <span class="hero__genre"></span>
        </div>
        <p class="hero__overview"></p>
      </div>
    </div>
  </section>
</template>

<script>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

export default {
  setup() {
    const apiData = ref([]);
    const apikey = import.meta.env.VITE_KEY;
    const route = useRoute();

    const fetchApiData = async () => {
      await fetch(
        `https://api.themoviedb.org/3/movie/${route.params.id}?api_key=${apikey}`
      )
        .then(res => res.json())
        .then(data => {
          apiData.value = data;
          console.log(data);
        })
        .catch(err => {
          console.log(err);
        });
    };

    onMounted(fetchApiData);
    return {
      apiData,
    };
  },
};
</script>

<style lang="scss" scoped>
.hero {
  position: relative;
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;
  height: 90vh;
  padding: 2rem 1rem;

  &__info {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__row {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }
}
</style>
