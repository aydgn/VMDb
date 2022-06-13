<script setup>
import { onMounted, ref } from "vue";

const props = defineProps({
  title: {
    type: String,
    default: "Upcoming Movies",
  },
  apiQuery: {
    type: String,
  },
});

const apiData = ref([]);
const apikey = import.meta.env.VITE_KEY;

const fetchApiData = async () => {
  await fetch(
    `https://api.themoviedb.org/3/${props.apiQuery}?api_key=${apikey}`
  )
    .then((res) => res.json())
    .then((data) => {
      apiData.value = data.results;
    })
    .catch((err) => {
      console.log(err);
    });
};

onMounted(fetchApiData);
</script>

<template>
  <section class="movieTile">
    <h2 class="container">{{ props.title }}</h2>
    <div class="movieTile__tile container">
      <router-link
        v-for="(data, index) in apiData"
        :key="data.id"
        :to="{ name: 'detail', params: { id: data.id } }"
        class="movieTile__link"
        draggable="false"
      >
        <img
          :src="`https://image.tmdb.org/t/p/w200${data.poster_path}`"
          :alt="data.title"
          :title="data.title"
          height="300"
          width="200"
          class="movieTile__poster"
          loading="lazy"
          draggable="false"
        />
        <span class="movieTile__name">{{ data.title }}</span>
        <span
          class="movieTile__year"
          :title="data.release_date"
        >
          {{ data.release_date.substring(0, 4) }}
        </span>
        <span
          class="movieTile__rating"
          :title="data.vote_average"
        >
          {{ data.vote_average }} / 10
        </span>
      </router-link>
    </div>
  </section>
</template>

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
    position: relative;
    color: #fff;
    text-decoration: none;
    transition: all 50ms ease-in-out;

    &:hover {
      transform: scale(1.05);
    }
  }

  &__poster {
    width: 200px;
    height: 300px;
    box-shadow: 0 5px 20px #000;

    &:hover {
      border: 4px solid $green;
    }
  }

  &__name {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 5px;
    text-align: center;
    text-shadow: 1px 1px 2px #000000;
    background-color: rgba(#000, 0.2);
  }

  &__year,
  &__rating {
    position: absolute;
    padding: 5px;
    font-size: 12px;
    text-shadow: 1px 1px 2px #000000;
  }

  &__year {
    bottom: 0;
    left: 0;
  }

  &__rating {
    right: 0;
    bottom: 0;
  }
}
</style>
