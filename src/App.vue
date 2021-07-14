<template>
  <HeaderComp />

  <main class="main container">
    <h1>👋</h1>
  </main>
  <Footer />
</template>

<script>
import HeaderComp from "./components/shared/header/HeaderComp.vue";
import Footer from "./components/shared/footer/Footer.vue";

export default {
  components: { HeaderComp, Footer },
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

@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}
@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}
@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}
@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}
@media (min-width: 1400px) {
  .container {
    max-width: 1320px;
  }
}
</style>
