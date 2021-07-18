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
      <input
        type="search"
        placeholder="Search 🔎"
        class="header__search"
        name="q"
        autocomplete="off"
      />
    </nav>
  </header>
</template>

<script>
import MenuIcon from "./MenuIcon.vue";
import Logo from "../Logo.vue";
import { ref } from "vue";

export default {
  components: { MenuIcon, Logo },
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
  justify-content: flex-start;
  flex-wrap: nowrap;
  align-content: stretch;
  align-items: stretch;
  text-align: center;
  padding: 1rem;

  @include mq(tablet) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  &__bar {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    align-items: center;

    @include mq(tablet) {
      margin-bottom: 0;
    }
  }

  &__link {
    color: #fff;
    text-decoration: none;
    padding: 1rem;
    &:hover {
      background: $green;
    }
  }

  &__nav {
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;

    @include mq(tablet) {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
  }

  &__search {
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

  .active {
    display: flex;
  }
}
</style>
