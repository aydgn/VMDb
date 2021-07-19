<template>
  <input
    type="search"
    placeholder="Search 🔎"
    class="search"
    name="q"
    autocomplete="off"
    v-model.lazy="search"
  />
  <a href="">{{ searchResults }}</a>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    let search = ref("");
    let searchResults = ref("");
    const apikey = import.meta.env.VITE_KEY;

    // fetch search results from movie api
    const getSearchResults = () => {
      return fetch(
        `https://api.themoviedb.org/3/search/multi?api_key=${apikey}&query=${search}`
      )
        .then(response => response.json())
        .then(response => response.results.map(result => result.title));
    };

    return {
      search,
      searchResults,
    };
  },
};
</script>

<style lang="scss" scoped>
.search {
  padding: 1rem;
  outline: 0;
  border: 0;
  border-radius: 0;
  &:focus {
    background: $green;
    color: #fff;
    font-weight: bold;
    outline: 1px solid #fff;
  }
  &:focus::placeholder {
    color: #fff;
  }
}
</style>
