<script>
import { onMounted, ref } from 'vue'

export default {
  setup() {
    const apiData = ref([])
    const apikey = import.meta.env.VITE_KEY

    const fetchApiData = async () => {
      await fetch(
        `https://api.themoviedb.org/3/person/popular?api_key=${apikey}`
      )
        .then(res => res.json())
        .then(data => {
          apiData.value = data.results.slice(0, 14)
        })
        .catch(err => {
          console.log(err)
        })
    }
    onMounted(fetchApiData)
    return {
      apiData
    }
  }
}
</script>

<template>
  <section class="popularActors container">
    <h2>Popular Actors</h2>
    <div class="popularActors__list">
      <a
        href="#"
        v-for="person in apiData"
        :key="person.id"
        class="popularActors__actor"
      >
        <img
          class="popularActors__photo"
          v-if="person.profile_path"
          :src="`https://image.tmdb.org/t/p/w45${person.profile_path}`"
          :alt="person.name"
          :title="person.name"
          height="48"
          width="48"
          loading="lazy"
        />
        <span
          v-else
          class="popularActors__initials"
        > {{ person.name.split(' ')[0][0] }}{{ person.name.split(' ')[1][0] }} </span>

        <span class="popularActors__name">
          {{ person.name }}
        </span>
      </a>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.popularActors {
  padding: 2rem 0;

  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(185px, 1fr));
  }

  a {
    color: white;
    text-decoration: none;
  }

  &__actor {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0.25rem;
    padding: 0.5rem;
    background: $gray;
    border-radius: 0.25rem;
    min-height: 64px;
  }

  &__actor:hover {
    background: #353535;
  }

  &__photo {
    width: 3rem;
    height: 3rem;
    margin-right: 0.5rem;
    background: $green;
    height: 48px;
    width: 48px;
    object-fit: cover;
    border-radius: 99px;
    box-shadow: 0 2px 10px rgb(0 0 0 / 50%);
  }

  &__initials {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    width: 48px;
    background-color: $green;
    border-radius: 99px;
    margin-right: 0.5rem;
  }
}
</style>
