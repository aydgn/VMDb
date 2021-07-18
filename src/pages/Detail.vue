<template>
  <section
    class="hero"
    :style="`background-image: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%) ,url(https://image.tmdb.org/t/p/w1280${apiData.backdrop_path});`"
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
          />
        </a>
        <div class="hero__row">
          <span class="hero__rating" alt="Rating" title="Rating">
            <b>⭐:</b>
            {{ apiData.vote_average }} / 10
          </span>
          <span class="hero__runtime" alt="Rating" title="Time">
            <b>⏱:</b>
            {{ apiData.runtime }} min
          </span>
        </div>
        <div class="hero__row">
          <span
            class="hero__genre"
            v-for="genre in apiData.genres"
            :key="genre.id"
          >
            {{ genre.name }}
          </span>
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
  background-position: 50%;
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
      align-items: flex-end;
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

  &__row {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    flex-wrap: wrap;
    margin: 0.5rem;
    justify-content: center;

    @include mq(tablet) {
      justify-content: flex-end;
    }
  }

  &__title {
    font-size: 2rem;
    margin: 0;
    padding: 0;
    text-shadow: #fff 1px 0 5px;

    @include mq(tablet) {
      font-size: 3rem;
    }
  }
  &__tagline {
    font-weight: 100;
    font-style: italic;
    margin: 0;
  }
  &__genre {
    background: $lightbg;
    padding: 0.5rem;
    text-align: center;
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
