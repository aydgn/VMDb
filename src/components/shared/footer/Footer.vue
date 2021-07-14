<template>
  <footer class="footer container">
    <hr class="footer__divider" />
    <div class="footer__bar">
      <div class="footer__logo">
        <Logo />
      </div>
      <div class="footer__copyright">
        &copy; VMDb {{ new Date().getFullYear() }}
      </div>
      <div class="footer__social">
        <a href="#">
          <img src="../../../assets/images/social-icons/facebook.svg" />
        </a>
        <a href="#">
          <img src="../../../assets/images/social-icons/instagram.svg" />
        </a>
        <a href="#">
          <img src="../../../assets/images/social-icons/twitter.svg" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
import Logo from "../Logo.vue";
export default {
  components: { Logo },
};
</script>

<style lang="scss" scoped>
.footer {
  &__bar {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    text-align: center;

    @include mq(tablet) {
      flex-direction: row;
    }
  }

  &__social {
    display: flex;
    gap: 0.5rem;
    img {
      height: 30px;
      filter: invert(100%);
    }
  }

  &__divider {
    border: 1px solid $gray;
  }
}
</style>
