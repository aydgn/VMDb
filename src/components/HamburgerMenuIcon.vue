<template>
  <div
    class="hamburger"
    :class="{ active: openStatus }"
    @click="$emit('menuStatus')"
  >
    <div class="line1"></div>
    <div class="line2"></div>
    <div class="line3"></div>
  </div>
</template>

<script>
export default {
  emits: ["menuStatus"],
  props: ["openStatus"],
  setup() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.hamburger {
  display: block;
  width: 32px;
  height: 32px;
  cursor: pointer;

  div {
    position: relative;
    width: 32px;
    height: 6px;
    background: #fff;
    transition: all 0.2s;
  }

  .line1 {
    top: 0px;
  }
  .line2 {
    top: 7px;
  }
  .line3 {
    top: 14px;
  }
}

.active {
  .line1 {
    top: 14px;
    transform: rotate(45deg);
  }
  .line2 {
    transform: scale(0);
  }
  .line3 {
    top: 2px;
    transform: rotate(-45deg);
  }
}
</style>
