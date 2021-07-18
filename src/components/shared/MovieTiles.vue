<template>
  <section class="movieTile">
    <h2 class="container">{{ title }}</h2>
    <div class="movieTile__tile container">
      <router-link
        v-for="(data, index) in apiData"
        :key="data.id"
        :to="`/detail/${data.id}`"
        class="movieTile__link"
        draggable="false"
      >
        <img
          :src="`https://image.tmdb.org/t/p/w200${data.poster_path}`"
          :alt="data.name || data.title"
          :title="data.name || data.title"
          class="movieTile__poster"
          loading="lazy"
          draggable="false"
        />
        <span class="movieTile__name">
          {{ index + 1 }}. {{ data.name || data.title }}
        </span>
        <span class="movieTile__type" :title="data.media_type">
          {{ data.media_type == "tv" ? "📺" : "🎥" }}
        </span>
        <span class="movieTile__rating" :title="data.vote_average">
          {{ data.vote_average }} / 10
        </span>
      </router-link>
    </div>
  </section>
</template>

<script>
import { onMounted, ref } from "vue";

export default {
  props: { title: String, apiQuery: String },
  setup(props) {
    const apiData = ref([]);
    const apikey = import.meta.env.VITE_KEY;

    const fetchApiData = async () => {
      await fetch(
        `https://api.themoviedb.org/3/${props.apiQuery}?api_key=${apikey}`
      )
        .then(res => res.json())
        .then(data => {
          apiData.value = data.results;
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
.movieTile {
  background: $lightbg;
  &__tile {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    padding: 2rem 1rem;
    overflow-x: auto;
    overflow-y: hidden;

    &::-webkit-scrollbar {
      height: 8px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: $gray;
    }
  }

  &__link {
    color: #fff;
    text-decoration: none;
    transition: all 50ms ease;
    position: relative;

    &:hover {
      transform: scale(1.05);
    }
  }

  &__poster {
    width: 200px;
    box-shadow: 0 5px 20px #000;

    &:hover {
      outline: 4px solid $green;
    }
  }
  &__name {
    position: absolute;
    top: 0px;
    left: 0px;
    background-color: rgba(#000, 0.2);
    padding: 5px;
    width: 100%;
    text-align: center;
    text-shadow: 1px 1px 0 #404040;
  }
  &__type {
    position: absolute;
    bottom: 8px;
    left: 8px;
    padding: 5px;
    background-color: rgba(#000, 0.2);
    font-size: 12px;
  }
  &__rating {
    position: absolute;
    bottom: 8px;
    right: 8px;
    padding: 5px;
    background-color: rgba(#000, 0.2);
    font-size: 12px;
  }
}
</style>
