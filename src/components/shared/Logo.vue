<template>
  <router-link :to="{ name: 'home' }" class="logo">
    <img
      src="../../assets/images/vmdb.svg"
      alt="VMDb Logo"
      title="VMDb - Vue Movie Database"
      class="logo__img"
    />
  </router-link>
</template>

<style lang="scss" scoped>
.logo {
  display: flex;
  align-items: center;
  justify-content: center;

  &__img {
    width: 88px;
    height: 26px;
  }
}
</style>
