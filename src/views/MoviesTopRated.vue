<template>
  <v-container>
    <BannerCardComponent
      title="Películas más populares"
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
          v-for="(movie,i) in moviePopular"
          :key="i"
      >
        <CardComponent
          :movie="movie"
        />
      </v-col>
      <v-btn
          fab
          color="accent"
          @click="loadMoreMoviePopular"
          v-show="moviePopular"
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
import {ref} from "@vue/composition-api";
import useFetchMovieNow from "@/composable/useFetchMovieNow";

import BannerCardComponent from "@/components/ui/BannerCardComponent";
import CardComponent from "@/components/ui/CardMovieComponent";

export default {
  name: "MoviesTopRated",
  components: {CardComponent, BannerCardComponent},
  setup() {

    const imgUrl = ref('https://image.tmdb.org/t/p/w500')
    const posterUrl = ref('https://image.tmdb.org/t/p/original')


    const { moviePopular,errorMessage,getMoviesPopular,loadMoreMoviePopular } = useFetchMovieNow()


    getMoviesPopular()

    return {
      imgUrl,
      posterUrl,
      moviePopular,

      loadMoreMoviePopular

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