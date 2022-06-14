<script setup>
import MovieTiles from "@/components/shared/MovieTiles.vue"
import PopularActors from "@/components/shared/PopularActors.vue"
import UpcomingMovies from "@/components/UpcomingMovies.vue"
</script>

<template>
  <MovieTiles title="This Week's Trending Movies" apiQuery="trending/movie/week"/>
  <MovieTiles title="Today's Trending Movies" apiQuery="trending/movie/day" />
  <PopularActors />
  <MovieTiles title="Top Rated Movies" apiQuery="movie/top_rated" />
  <UpcomingMovies />
</template>

<style lang="scss">
*,
*::before,
*::after {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
  color: #fff;
  font-size: 16px;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
  background: $bg;
}

.container {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 0 1rem;
}

@media (min-width: 1400px) {
  .container {
    max-width: 1320px;
  }
}
</style>
