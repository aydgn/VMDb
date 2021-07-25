<template>
  <HeaderComp />
  <main class="main">
    <router-view></router-view>
  </main>
  <Footer />
</template>

<script>
import HeaderComp from '@/components/shared/header/HeaderComp.vue'
import Footer from '@/components/shared/footer/Footer.vue'

export default {
  components: {
    HeaderComp,
    Footer
  },

  setup () {}
}
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
  color: #fff;
  font-size: 16px;
  font-family: "Montserrat", sans-serif;
  background: $bg;
}

.container {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 0 1rem;
}

main {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

@media (min-width: 1400px) {
  .container {
    max-width: 1320px;
  }
}
</style>
