<template>
  <section
    class="hero"
    :style="`background-image: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.2) 100%) ,url(https://image.tmdb.org/t/p/w1280${apiData.backdrop_path});`"
  >
    <div class="hero__info container">
      <div class="hero__poster">
        <a
          :href="`https://image.tmdb.org/t/p/original${apiData.poster_path}`"
          :alt="apiData.title"
          :title="apiData.title"
          target="_blank"
        >
          <img
            :src="`https://image.tmdb.org/t/p/w200${apiData.poster_path}`"
            :alt="apiData.title"
            :title="apiData.title"
            class="hero__image"
          />
        </a>
        <div>
          <span class="hero__rating" alt="Rating" title="Rating">
            {{ apiData.vote_average }} / 10
          </span>
          <span class="hero__runtime" alt="Rating" title="Time">
            <b>⏱</b>
            {{ apiData.runtime }} min
          </span>
        </div>

        <div class="hero__genres">
          <a
            class="hero__genre"
            v-for="genre in apiData.genres"
            :key="genre.id"
            href="#"
          >
            {{ genre.name }}
          </a>
        </div>
      </div>
      <div class="hero__details">
        <h1 class="hero__title">{{ apiData.title }}</h1>
        <h4 class="hero__tagline">"{{ apiData.tagline }}"</h4>
        <p class="hero__overview">{{ apiData.overview }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

export default {
  setup() {
    const apiData = ref([]);
    const apikey = import.meta.env.VITE_KEY;
    const route = useRoute();

    const fetchApiData = async () => {
      await fetch(
        `https://api.themoviedb.org/3/movie/${route.params.id}?api_key=${apikey}`
      )
        .then(res => res.json())
        .then(data => {
          apiData.value = data;
          console.log(data);
        })
        .catch(err => {
          console.log(err);
        });
    };

    onMounted(fetchApiData);
    return {
      apiData,
    };
  },
};
</script>

<style lang="scss" scoped>
.hero {
  position: relative;
  background-size: cover;
  background-position: center 0%;
  background-repeat: no-repeat;
  min-height: 650px;
  padding: 2rem 1rem;
  display: flex;
  align-items: center;

  &__poster {
    display: flex;
    flex-direction: column;
    align-items: center;

    @include mq(tablet) {
      width: 200px;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    @include mq(tablet) {
      flex-direction: row;
      justify-content: center;
      gap: 2rem;
      align-items: flex-start;
    }
  }

  &__image {
    box-shadow: 0 0 30px 1px #000;
    height: auto;
    width: 200px;
    transition: all 50ms ease;
    margin: 1rem;

    &:hover {
      transform: scale(1.1);
    }
  }
  &__title {
    font-size: 2rem;
    margin: 0;
    text-shadow: #fff 0 0 5px;

    @include mq(tablet) {
      font-size: 3rem;
    }
  }
  &__tagline {
    font-weight: 100;
    font-style: italic;
    margin: 0;
  }
  &__genres {
    margin: 1rem 0;
    display: flex;
    gap: 0.5rem;
    flex-direction: row;
    flex-wrap: wrap;
  }

  &__genre {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: $lightbg;
    padding: 0.5rem;
    color: #fff;
    text-decoration: none;

    &:hover {
      background: $green;
    }

    @include mq(tablet) {
      flex: 1;
    }
  }

  &__overview {
    max-width: 60ch;
    font-size: 16px;
    line-height: 26px;
    word-wrap: break-word;
    overflow-wrap: break-word;
    hyphens: auto;

    @include mq(tablet) {
      font-size: 18px;
      line-height: 30px;
    }
  }
}
</style>
