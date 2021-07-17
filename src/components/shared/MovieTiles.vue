<template>
  <h2>{{ title }}</h2>
  <div class="movieTile">
    <a
      v-for="(data, index) in apiData"
      :key="data.id"
      :href="data.id"
      class="movieTile__link"
    >
      <img
        :src="`https://image.tmdb.org/t/p/w200${data.poster_path}`"
        :alt="data.name || data.title"
        :title="data.name || data.title"
        class="movieTile__poster"
        loading="lazy"
      />
      <span class="movieTile__name">
        {{ index + 1 }}. {{ data.name || data.title || data.title }}
      </span>
    </a>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";

export default {
  props: { title: String, apiQuery: String },
  setup(props) {
    const apiData = ref([]);
    const apikey = import.meta.env.VITE_KEY;

    const fetchApiData = async () => {
      await fetch(
        `https://api.themoviedb.org/3/${props.apiQuery}?api_key=${apikey}`
      )
        .then(res => res.json())
        .then(data => {
          apiData.value = data.results;
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
.movieTile {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  padding: 1rem 0;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scrollbar-color: #404040 #5e5e5e;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #404040;
  }

  &__link {
    color: #fff;
    text-decoration: none;
    transition: all 50ms ease;
    position: relative;

    &:hover {
      transform: scale(1.05);
    }
  }

  &__poster {
    width: 200px;
    &:hover {
      border: 2px solid $green;
    }
  }
  &__name {
    position: absolute;
    top: 0px;
    left: 0px;
    background-color: rgba(#000, 0.2);
    padding: 5px;
    width: 100%;
    text-align: center;
    text-shadow: 1px 1px 0 #404040;
  }
}
</style>