<template>
  <HeaderComp />

  <main class="main container">
    <h2>Trending TV Shows</h2>

    <div class="movieTile">
      <a
        v-for="(show, index) in trendingTv"
        :key="show.id"
        :href="show.id"
        class="movieTile__link"
      >
        <img
          :src="`https://image.tmdb.org/t/p/w200${show.poster_path}`"
          :alt="show.name"
          :title="show.name"
          class="movieTile__poster"
        />
        <span class="movieTile__name">{{ index + 1 }}. {{ show.name }}</span>
      </a>
    </div>
  </main>
  <Footer />
</template>

<script>
import { onMounted, ref } from "vue";
import HeaderComp from "./components/shared/header/HeaderComp.vue";
import Footer from "./components/shared/footer/Footer.vue";

export default {
  components: { HeaderComp, Footer },

  setup() {
    let trendingTv = ref([""]);
    const apikey = import.meta.env.VITE_KEY;

    // fetch trending shows
    async function fetchTrendingShows() {
      await fetch(
        `https://api.themoviedb.org/3/trending/tv/week?api_key=${apikey}`
      )
        .then(res => res.json())
        .then(data => {
          trendingTv.value = data.results;
        })
        .then(() => {
          console.log(trendingTv);
        })
        .catch(err => {
          console.log(err);
        });
    }
    onMounted(fetchTrendingShows);
    return {
      trendingTv,
    };
  },
};
</script>

<style lang="scss">
*,
*:before,
*:after {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
  background: $bg;
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
}

.container {
  width: 100%;
  padding: 0 1rem;
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 1400px) {
  .container {
    max-width: 1320px;
  }
}

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
