<template>
  <header class="header container">
    <div class="header__bar">
      <Logo />
      <HamburgerMenuIcon @menuStatus="toggleMenu" :openStatus="isMenuOpen" />
    </div>

    <nav class="header__nav" v-if="isMenuOpen">
      <a href="#" class="header__link">TV Shows</a>
      <a href="#" class="header__link">Movies</a>
      <a href="#" class="header__link">Upcoming</a>
    </nav>

    <div class="header__nav" v-if="isMenuOpen">
      <a href="#" class="header__link">Login</a>
      <a href="#" class="header__link">Register</a>
      <input
        type="search"
        placeholder="Search 🔎"
        class="header__search"
        name="q"
        autocomplete="off"
      />
    </div>
  </header>
</template>

<script>
import HamburgerMenuIcon from "./MenuIcon.vue";
import Logo from "../Logo.vue";
import { ref } from "vue";

export default {
  components: { HamburgerMenuIcon, Logo },
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
  text-align: center;
  padding: 1rem;
  font-weight: bold;

  &__link {
    color: #fff;
    text-decoration: none;
    padding: 1rem;
    &:hover {
      background: $green;
    }
  }

  &__bar {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
  }

  &__nav {
    display: flex;
    flex-direction: column;
  }

  &__search {
    padding: 1rem;
    outline: 0;
    border: 0;
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
}
</style>
