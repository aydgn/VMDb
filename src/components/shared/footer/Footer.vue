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
          <img
            src="../../../assets/images/social-icons/facebook.svg"
            alt="Facebook Logo"
            loading="lazy"
          />
        </a>
        <a href="#">
          <img
            src="../../../assets/images/social-icons/instagram.svg"
            alt="Instagram Logo"
            loading="lazy"
          />
        </a>
        <a href="#">
          <img
            src="../../../assets/images/social-icons/twitter.svg"
            alt="Twitter Logo"
            loading="lazy"
          />
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
import Logo from "../Logo.vue"
export default {
  components: { Logo }
}
</script>

<style lang="scss" scoped>
.footer {
  &__bar {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;
    text-align: center;

    @include mq(mobile) {
      flex-direction: row;
    }
  }

  &__social {
    display: flex;
    gap: 0.5rem;

    img {
      width: 20px;
      height: 20px;
      filter: invert(100%);
    }
  }

  &__divider {
    border: 1px solid $gray;
  }
}
</style>
