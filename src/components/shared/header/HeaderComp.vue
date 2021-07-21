<template>
  <header class="header container">
    <div class="header__bar">
      <Logo />
      <MenuIcon @menuStatus="toggleMenu" :activeStatus="isMenuOpen" />
    </div>

    <nav class="header__nav" :class="{ active: isMenuOpen }">
      <router-link to="#" class="header__link">TV Shows</router-link>
      <router-link to="#" class="header__link">Movies</router-link>
      <router-link to="#" class="header__link">Upcoming</router-link>
    </nav>
    <nav class="header__nav" :class="{ active: isMenuOpen }">
      <a href="#" class="header__link">Login</a>
      <a href="#" class="header__link">Register</a>
      <SearchBar />
    </nav>
  </header>
</template>

<script>
import MenuIcon from "./MenuIcon.vue";
import Logo from "../Logo.vue";
import SearchBar from "./SearchBar.vue";
import { ref } from "vue";

export default {
  components: { MenuIcon, Logo, SearchBar },
  setup() {
    let isMenuOpen = ref(false);

    function toggleMenu() {
      isMenuOpen.value = !isMenuOpen.value;
    }

    return {
      isMenuOpen,
      toggleMenu,
    };
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: stretch;
  align-items: stretch;
  justify-content: flex-start;
  padding: 1rem;
  text-align: center;

  @include mq(tablet) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  &__bar {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;

    @include mq(tablet) {
      margin-bottom: 0;
    }
  }

  &__link {
    padding: 1rem;
    color: #fff;
    text-decoration: none;
    &:hover {
      background: $green;
    }
  }

  &__nav {
    display: none;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;

    @include mq(tablet) {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
  }
}

.active {
  display: flex;
}
</style>
