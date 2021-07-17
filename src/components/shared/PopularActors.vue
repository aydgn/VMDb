<template>
  <section class="popularActors">
    <h2>Popular Actors</h2>
    <div class="popularActors__list">
      <a
        :href="person.id"
        v-for="person in apiData"
        :key="person.id"
        class="popularActors__actor"
      >
        <span class="popularActors__initials">
          {{
            person.name
              .split(" ")
              .map(i => i[0])
              .join("")
          }}
        </span>

        <span class="popularActors__name">
          {{ person.name }}
        </span>
      </a>
    </div>
  </section>
</template>

<script>
import { onMounted, ref } from "vue";

export default {
  setup() {
    const apiData = ref([]);
    const apikey = import.meta.env.VITE_KEY;

    const fetchApiData = async () => {
      await fetch(
        `https://api.themoviedb.org/3/person/popular?api_key=${apikey}`
      )
        .then(res => res.json())
        .then(data => {
          apiData.value = data.results.slice(0, 12);
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
.popularActors {
  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }

  a {
    color: white;
    text-decoration: none;
  }

  &__actor {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px;
    background: $gray;
    margin: 2px;
    border-radius: 5px;
  }

  &__actor:hover {
    background: #353535;
  }

  &__initials {
    background: $green;
    padding: 8px;
    border-radius: 99px;
    margin-right: 8px;
  }
}
</style>
