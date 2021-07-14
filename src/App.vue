<template>
  <HeaderComp />
  <h1>Hi</h1>
</template>

<script>
import HeaderComp from "./components/HeaderComp.vue";

export default {
  components: { HeaderComp },
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
</style>
