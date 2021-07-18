<template>
  <MovieTiles
    title="This Week's Trending Movies"
    apiQuery="trending/movie/week"
  />
  <MovieTiles title="Today's Trending Movies" apiQuery="trending/movie/day" />
  <PopularActors />
  <MovieTiles title="Top Rated Movies" apiQuery="movie/top_rated" />
  <UpcommingMovies />
</template>

<script>
import MovieTiles from "@/components/shared/MovieTiles.vue";
import PopularActors from "@/components/shared/PopularActors.vue";
import UpcommingMovies from "@/components/shared/UpcommingMovies.vue";

export default {
  components: {
    MovieTiles,
    PopularActors,
    UpcommingMovies,
  },

  setup() {},
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
</style>
