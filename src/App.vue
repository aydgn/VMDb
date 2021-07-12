<template>
  <HeaderComp />
  <h1>Hello!</h1>
</template>

<script>
import HeaderComp from "./components/HeaderComp.vue";

export default {
  components: { HeaderComp },
  setup() {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
