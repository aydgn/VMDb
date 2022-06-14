<template>
  <router-link :to="{ name: 'home' }" class="logo" aria-label="Home" title="VMDb">
    <svg xmlns="http://www.w3.org/2000/svg" width="140" height="41">
      <text x="4" y="38">VMDb</text>
    </svg>
  </router-link>
</template>

<style lang="scss" scoped>
.logo {
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font: 900 3rem Arial, Helvetica, sans-serif;

    text {
      fill: $green;
      stroke: #fff;
      stroke-width: 4px;
      paint-order: stroke;
    }
  }


}
</style>
