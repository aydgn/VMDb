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
        <span
          class="popularActors__initials"
          :style="`
            background-image: url(https://image.tmdb.org/t/p/w92${person.profile_path});
          `"
        ></span>

        <span class="popularActors__name">
          {{ person.name }}
        </span>
      </a>
    </div>
  </section>
</template>

<script>
import { onMounted, ref } from 'vue'

export default {
  setup () {
    const apiData = ref([])
    const apikey = import.meta.env.VITE_KEY

    const fetchApiData = async () => {
      await fetch(
        `https://api.themoviedb.org/3/person/popular?api_key=${apikey}`
      )
        .then(res => res.json())
        .then(data => {
          apiData.value = data.results.slice(0, 12)
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

<style lang="scss" scoped>
.popularActors {
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
  }

  &__actor:hover {
    background: #353535;
  }

  &__initials {
    width: 3rem;
    height: 3rem;
    margin-right: 0.5rem;
    padding: 0.5rem;
    background: $green;
    background-position: center 20%;
    background-size: 100%;
    border-radius: 99px;
    box-shadow: 0 2px 10px rgb(0 0 0 / 50%);
  }
}
</style>
