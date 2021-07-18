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
          <span
            v-if="apiData.vote_average"
            class="hero__rating"
            alt="Rating"
            title="Rating"
          >
            {{ apiData.vote_average }} / 10
          </span>
          <span class="hero__runtime" alt="Rating" title="Time">
            <b>⏱</b>
            {{ apiData.runtime }} min
          </span>
        </div>

        <div class="hero__genres">
          <a
            href="#"
            class="hero__genre"
            :alt="genre.name"
            :title="genre.name"
            v-for="genre in apiData.genres"
            :key="genre.id"
          >
            {{ genre.name }}
          </a>
        </div>
      </div>
      <div class="hero__details">
        <h1 class="hero__title">{{ apiData.title }}</h1>
        <h4 v-if="apiData.tagline" class="hero__tagline">
          "{{ apiData.tagline }}"
        </h4>
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
        `https://api.themoviedb.org/3/movie/${route.params.id}?api_key=${apikey}&append_to_response=similar_movies,credits`
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
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 1rem;
  min-height: 650px;
  background-size: cover;
  background-position: center 20%;
  background-repeat: no-repeat;

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
      align-items: center;
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

  &__details {
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    align-items: flex-start;
    justify-content: flex-start;
  }
  &__title {
    margin: 0;
    font-size: 2rem;
    text-shadow: #fff 0 0 5px;

    @include mq(tablet) {
      font-size: 3rem;
    }
  }
  &__tagline {
    margin: 0;
    font-weight: 100;
    font-style: italic;
  }
  &__genres {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    margin: 1rem 0;
  }

  &__genre {
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    padding: 0.5rem;
    background: $lightbg;
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
