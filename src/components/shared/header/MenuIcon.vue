<script setup>

const props = defineProps({
  activeStatus: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits({
  menuStatus: {
    type: Boolean,
    default: false,
  },
});

</script>

<template>
  <div
    class="hamburger"
    :class="{ activeMenu: activeStatus }"
    @click="$emit('menuStatus')"
  >
    <div class="line1"></div>
    <div class="line2"></div>
    <div class="line3"></div>
  </div>
</template>
<style lang="scss" scoped>
.hamburger {
  display: block;
  width: 32px;
  height: 32px;
  cursor: pointer;

  @include mq(tablet) {
    display: none;
  }

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

.activeMenu {
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
