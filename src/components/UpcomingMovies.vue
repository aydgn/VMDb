<script>
import { onMounted, ref } from "vue";

export default {
  setup() {
    const apiData = ref([]);
    const apikey = import.meta.env.VITE_KEY;

    const fetchApiData = async () => {
      await fetch(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${apikey}&region=TR`
      )
        .then((res) => res.json())
        .then((data) => {
          apiData.value = data.results.filter((movie) => movie.release_date.substring(0, 4) >= new Date().getFullYear());
        })
        .then(() => {
          apiData.value.sort((a, b) => {
            return b.release_date > a.release_date ? 1 : -1;
          });
        })
        .catch((err) => { console.log(err) });
    };
    onMounted(fetchApiData);
    return {
      apiData,
    };
  },
};
</script>

<template>
  <section class="upcommingMovies container">
    <h2>Upcoming Movies</h2>
    <div class="upcommingMovies__tile">
      <router-link
        v-for="data in apiData"
        :key="data.id"
        :to="`/detail/${data.id}`"
        class="upcommingMovies__link"
        draggable="false"
      >
        <img
          :src="`https://image.tmdb.org/t/p/w200${data.poster_path}`"
          :alt="data.name || data.title"
          :title="data.name || data.title"
          class="upcommingMovies__poster"
          loading="lazy"
          draggable="false"
        />
        <span class="upcommingMovies__name">
          {{ data.title }}
        </span>
        <span class="upcommingMovies__date">
          <!-- data.release_date in DD/MM/YYY format -->
          {{ new Date(data.release_date).toLocaleDateString("tr-TR") }}
        </span>
      </router-link>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.upcommingMovies {
  &__tile {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    padding: 1rem 0.5rem;
    overflow-x: auto;
    overflow-y: hidden;

    &::-webkit-scrollbar {
      height: 8px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #404040;
    }
  }

  &__link {
    position: relative;
    color: #fff;
    text-decoration: none;
    transition: all 50ms ease;

    &:hover {
      transform: scale(1.05);
    }
  }

  &__poster {
    width: 190px;

    &:hover {
      border: 2px solid $green;
    }
  }

  &__name {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 5px;
    text-align: center;
    text-shadow: 1px 1px 0 #404040;
    background-color: rgba(#000, 0.2);
  }

  &__date {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 5px;
    text-align: center;
    text-shadow: 1px 1px 0 #404040;
    background-color: rgba(#000, 0.2);
  }
}
</style>
