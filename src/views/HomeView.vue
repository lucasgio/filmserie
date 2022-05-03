<template>
    <v-container
        class="mb-5"
        v-if="moviesNow"
        fluid
    >
      <HeroCardComponent
        :poster="moviesNow"
      />

      <v-row
          justify="center"
          align="center"
          class="mx-auto"
      >
        <v-col
            cols="12"
            lg="3"
            md="12"
            sm="12"
            v-for="(movie,i) in moviesNow"
            :key="i"
        >
          <CardComponent
            :movie="movie"
          />
        </v-col>
        <v-btn
            fab
            color="accent"
            @click="loadMore"
            v-show="moviesNow"
        >
          <v-icon
              dark
              color="primary"
          >
            fa-regular fa-sync
          </v-icon>
        </v-btn>
      </v-row>
    </v-container>
</template>

<script>


import useFetchMovieNow from "@/composable/useFetchMovieNow";

import CardComponent from "@/components/ui/CardMovieComponent";
import HeroComponent from "@/components/ui/HeroCardComponent";
import HeroCardComponent from "@/components/ui/HeroCardComponent";

export default {
  name: 'HomeView',
  components: {
    HeroCardComponent,
    HeroComponent,
    CardComponent
  },
  setup() {


    const {
      moviesNow,
      errorMessage,
      getMovies,
      loadMore
    } = useFetchMovieNow()

    getMovies()

    return {
      moviesNow,


      loadMore

    }
  }

}
</script>
<style scoped>
.v-card {
  transition: opacity .2s ease-in;
}

.v-card:not(.on-hover) {
  opacity: 0.9;
}
</style>