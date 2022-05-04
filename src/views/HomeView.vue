<template>
  <v-container
      v-if="moviesNow"
      fluid
      class="mb-5"
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
        <CardMovieComponent
            :movie="movie"
        />
      </v-col>
      <v-btn
          fab
          color="accent"
          @click="loadMoreMovieNow"
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

import CardMovieComponent from "@/components/ui/CardMovieComponent";
import HeroComponent from "@/components/ui/HeroCardComponent";
import HeroCardComponent from "@/components/ui/HeroCardComponent";

export default {
  name: 'HomeView',

  components: {
    HeroCardComponent,
    HeroComponent,
    CardMovieComponent
  },
  setup() {


    const {
      moviesNow,
      errorMessage,
      getMovies,
      loadMoreMovieNow
    } = useFetchMovieNow()

    getMovies()

    return {
      moviesNow,

      loadMoreMovieNow,
    }
  }

}
</script>
<style scoped>

</style>