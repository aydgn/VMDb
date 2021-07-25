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
import { ref } from 'vue'

export default {
  setup () {
    const search = ref('')
    const searchResults = ref('')

    return {
      search,
      searchResults
    }
  }
}
</script>

<style lang="scss" scoped>
.search {
  padding: 1rem;
  border: 0;
  border-radius: 0;
  outline: 0;

  &:focus {
    color: #fff;
    font-weight: bold;
    background: $green;
    outline: 1px solid #fff;
  }

  &:focus::placeholder {
    color: #fff;
  }
}
</style>
