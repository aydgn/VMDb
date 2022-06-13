<template>
  <input
    type="search"
    placeholder="Search 🔎"
    class="search"
    name="q"
    autocomplete="off"
  />
</template>

<script>
</script>

<style lang="scss" scoped>
.search {
  padding: 1rem;
  border: 0;
  border-radius: 0;
  outline: 0;

  &:focus {
    color: #fff;
    background: $green;
    outline: 1px solid #fff;
  }

  &:focus::placeholder {
    color: #fff;
  }
}
</style>
