<template>
  <header class="header">
    <nav class="header__nav">
      <a href="#" class="header__link">
        <img
          src="../assets/images/vmdb.svg"
          alt="VMDb Logo"
          class="header__logo"
          height="25px"
        />
      </a>
      <a href="#" class="header__link">TV Shows</a>
      <a href="#" class="header__link">Movies</a>
      <a href="#" class="header__link">Upcoming</a>
    </nav>
    <div class="header__menu">
      <a href="#" class="header__link">Login</a>
      |
      <a href="" class="header__link">Register</a>
      <input type="search" placeholder="Search..." class="header__search" />
    </div>
  </header>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss">
.header {
  background: $bg;
  padding: 20px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  font-weight: bold;

  &__nav {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  &__menu {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  &__search {
    padding: 0.5rem;
  }

  a {
    color: #fff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
