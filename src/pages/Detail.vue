<template>
  <section
    class="hero"
    :style="`background-image: radial-gradient(circle, rgba(0,0,0,0.5) 0%, #000 100%) ,url(https://image.tmdb.org/t/p/w1280${apiData.backdrop_path});`"
  >
    <div class="hero__info container">
      <!-- POSTER  -->

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
          <span class="hero__runtime" alt="Rating" title="Duration">
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

      <!-- HERO DETAILS -->

      <div class="hero__details">
        <h1 class="hero__title">{{ apiData.title }}</h1>
        <h4 v-if="apiData.tagline" class="hero__tagline">
          "{{ apiData.tagline }}"
        </h4>
        <p class="hero__overview">{{ apiData.overview }}</p>

        <!-- SOCIAL ICONS -->

        <div class="hero__socials">
          <a
            v-if="apiData.homepage"
            :href="`${apiData.homepage}`"
            class="hero__social"
            target="_blank"
            :title="apiData.homepage"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="hero__social-icon"
            >
              <path
                fill="#fff"
                d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z"
              />
            </svg>
          </a>

          <!-- IMDB -->

          <a
            v-if="apiData.external_ids.imdb_id"
            :href="`https://imdb.com/title/${apiData.external_ids.imdb_id}`"
            target="_blank"
            class="hero__social"
            alt="IMDB"
            title="IMDB"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="hero__social-icon"
              viewBox="0 0 24 24"
            >
              <defs />
              <path
                fill="#fff"
                d="M22.4 0H1.6C.7 0 .1.7 0 1.6v20.8c0 .9.7 1.5 1.6 1.6h20.8c1 0 1.6-.8 1.6-1.7V1.7c0-.9-.7-1.6-1.6-1.7zm0 .5a1.2 1.2 0 011.1 1.2v20.6c0 .6-.5 1.1-1.1 1.2H1.6c-.6 0-1-.5-1.1-1.1V1.6C.5 1 1 .6 1.6.5h20.8zM4.8 8.3v7.3h-2V8.3h2zm6.5 0v7.3H9.7v-5l-.7 5H7.8l-.7-4.8v4.8H5.4V8.3H8l.2 1.5.3 1.9.5-3.4h2.4zm3 1.3l.2.2v3.5l-.1.9c0 .1-.2.2-.5.2V9.5h.4zm0 6h1l.6-.3.3-.5.1-1.4V11 9.5l-.4-.7c-.1-.2-.4-.3-.7-.4a8 8 0 00-1.8-.1H12v7.3h2.3zm5.1-1.8v.7l-.3.2c-.1 0-.2 0-.3-.2V12v-.6l.3-.1.3.1V14zM17 8.3v7.3h1.7v-.4l.6.4.7.1c.3 0 .5 0 .8-.2l.4-.6v-3-.9l-.1-.4a1 1 0 00-.5-.4H20a2 2 0 00-.7 0l-.5.5V8.3H17z"
              />
            </svg>
          </a>

          <!-- FACEBOOK -->

          <a
            v-if="apiData.external_ids.facebook_id"
            :href="`https://facebook.com/${apiData.external_ids.facebook_id}`"
            target="_blank"
            class="hero__social"
            alt="Facebook"
            title="Facebook"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="hero__social-icon"
              viewBox="0 0 24 24"
            >
              <defs />
              <path
                fill="#fff"
                d="M24 12a12 12 0 10-14 12v-8H7v-4h3V9c0-3 2-4 5-4h2v3h-1c-2 0-2 1-2 2v2h3v4h-3v8c6-1 10-6 10-12z"
              />
            </svg>
          </a>

          <!-- TWITTER -->

          <a
            v-if="apiData.external_ids.twitter_id"
            :href="`https://twitter.com/${apiData.external_ids.twitter_id}`"
            target="_blank"
            class="hero__social"
            alt="Twitter"
            title="Twitter"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="hero__social-icon"
              viewBox="0 0 24 24"
            >
              <defs />
              <path
                fill="#fff"
                d="M24 4.6a10 10 0 01-2.9.7 5 5 0 002.2-2.7c-1 .6-2 1-3.1 1.2a5 5 0 00-8.4 4.5A14 14 0 011.6 3.2 4.8 4.8 0 001 5.6a5 5 0 002.2 4.1 4.9 4.9 0 01-2.3-.6A5 5 0 005 14a5 5 0 01-2.2 0 5 5 0 004.6 3.5 9.9 9.9 0 01-6.1 2.1H0a14 14 0 007.6 2.2c9 0 14-7.5 14-14V7A10 10 0 0024 4.6z"
              />
            </svg>
          </a>

          <!-- INSTAGRAM -->

          <a
            v-if="apiData.external_ids.instagram_id"
            :href="`https://instagram.com/${apiData.external_ids.instagram_id}`"
            target="_blank"
            class="hero__social"
            alt="Instagram"
            title="Instagram"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="hero__social-icon"
              viewBox="0 0 24 24"
            >
              <defs />
              <path
                fill="#fff"
                d="M12 0H7C5.9.2 5 .4 4.2.7c-.7.3-1.4.7-2 1.4S.8 3.4.5 4.1c-.3.8-.5 1.7-.5 3a83.6 83.6 0 00.5 12.8c.3.7.7 1.4 1.4 2 .7.8 1.3 1.2 2.1 1.5.8.3 1.7.5 3 .5a83.6 83.6 0 0012.8-.5c.7-.3 1.4-.7 2-1.4.8-.7 1.2-1.3 1.5-2.1.3-.8.5-1.7.5-3a83.6 83.6 0 00-.5-12.8c-.3-.7-.7-1.4-1.4-2-.7-.8-1.3-1.2-2.1-1.5-.8-.3-1.7-.5-3-.5L12 0zm0 2.2h4.8c1.2 0 1.9.3 2.3.4.5.3 1 .5 1.4 1 .4.4.6.8.9 1.3.1.4.3 1 .4 2.2a84 84 0 01-.5 12c-.2.5-.4 1-.9 1.4-.4.4-.8.6-1.3.9-.5.1-1.1.3-2.3.4a84.5 84.5 0 01-12-.5c-.5-.2-.9-.4-1.3-.9-.4-.4-.7-.8-.9-1.3-.2-.5-.4-1.1-.4-2.3V12 7c0-1.1.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.3 2.2-.4H12zm0 3.6a6.2 6.2 0 100 12.4 6.2 6.2 0 000-12.4zM12 16a4 4 0 110-8 4 4 0 010 8zm7.8-10.4a1.4 1.4 0 11-2.8 0 1.4 1.4 0 012.8 0z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- CAST -->

  <section class="cast container">
    <h2>Cast</h2>
    <div class="cast__wrapper">
      <div
        v-for="actor in apiData.credits.cast.slice(0, 12)"
        :key="actor.id"
        class="cast__item"
      >
        <a
          :href="`https://image.tmdb.org/t/p/original${actor.profile_path}`"
          :title="actor.name"
          :alt="actor.name"
          target="_blank"
        >
          <img
            v-if="actor.profile_path"
            :src="`https://image.tmdb.org/t/p/w92${actor.profile_path}`"
            :alt="actor.name"
            :title="actor.name"
            class="cast__image"
            loading="lazy"
          />
        </a>
        <div class="cast__info">
          <a
            :href="`https://www.themoviedb.org/person/${actor.id}`"
            :title="actor.name"
            :alt="actor.name"
            target="_blank"
            class="cast__link"
          >
            <span class="cast__name">{{ actor.name }}</span>
          </a>
          <span class="cast__role">as {{ actor.character }}</span>
        </div>
      </div>
    </div>
  </section>

  <!-- SIMILAR MOVIES -->

  <section class="similar container">
    <h2>Similar Movies</h2>
    <div class="similar__wrapper">
      <div
        class="similar__item"
        v-for="movie in apiData.similar_movies.results.slice(0, 16)"
        :key="movie.id"
      >
        <a :href="`${movie.id}`">
          <img
            :src="`https://image.tmdb.org/t/p/w92${movie.poster_path}`"
            :alt="movie.title"
            :title="movie.title"
            class="similar__image"
            loading="lazy"
          />
          <div class="similar__name">
            {{ movie.title }} ({{ movie.release_date.slice(0, 4) }})
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import { onMounted, ref } from "vue";

export default {
  props: ["id"],
  setup(props) {
    const apiData = ref([]);
    const apikey = import.meta.env.VITE_KEY;

    async function fetchApiData() {
      await fetch(
        `https://api.themoviedb.org/3/movie/${props.id}?api_key=${apikey}&append_to_response=similar_movies,credits,external_ids`
      )
        .then((res) => res.json())
        .then((data) => {
          apiData.value = data;
        });
    }

    onMounted(fetchApiData());
    return {
      apiData,
    };
  },
};
</script>

<style lang="scss" scoped>
a {
  color: white;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
}

.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 650px;
  padding: 2rem 1rem;
  background-repeat: no-repeat;
  background-position: center 20%;
  background-size: cover;

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
    gap: 1rem;
    align-items: center;

    @include mq(tablet) {
      flex-direction: row;
      gap: 2rem;
      align-items: center;
      justify-content: center;
    }
  }

  &__image {
    width: 200px;
    height: auto;
    margin: 1rem;
    box-shadow: 0 0 30px 1px #000;
    transition: all 50ms ease;

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
    gap: 0.5rem;
    align-items: stretch;
    justify-content: center;
    margin: 1rem 0;
  }

  &__genre {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    color: #fff;
    text-align: center;
    text-decoration: none;
    background: $lightbg;

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

  &__socials {
    display: flex;
    gap: 0.5rem;
  }

  &__social-icon {
    height: 2rem;
  }
}

.cast {
  &__wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.5rem 0;
    justify-content: space-between;
  }

  &__image {
    width: 92px;
    height: 92px;
    object-fit: cover;
    object-position: center 20%;
    border-radius: 50%;
  }

  &__item {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 1rem;
    align-items: center;
    justify-content: flex-start;
    width: 300px;
    padding: 0.5rem;
    border-radius: 100px;
  }

  &__item:hover {
    background: $green;
  }

  &__info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  &__name {
    font-weight: bold;
  }

  &__role {
    color: $gray;
  }
}

.similar {
  &__wrapper {
    display: flex;
    flex-wrap: wrap;
    margin: -1rem;
  }

  &__image {
    width: 92px;
    height: 138px;
  }

  &__item {
    display: flex;
    flex: 1;
    flex-direction: column;
    flex-wrap: wrap;
    flex-basis: 130px;
    align-content: center;
    align-items: center;
    justify-content: flex-start;
    margin: 1rem;
    padding: 1rem;
    text-align: center;

    &:hover {
      background: $green;
    }
  }
}
</style>
