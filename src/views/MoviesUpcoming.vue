<template>
  <v-container>
    <BannerCardComponent
      title="Próximos estrenos"
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
          v-for="(movie,i) in moviesUpcoming"
          :key="i"
      >
        <CardComponent
          :movie="movie"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {ref} from "@vue/composition-api";
import useFetchMovieNow from "@/composable/useFetchMovieNow";

import BannerCardComponent from "@/components/ui/BannerCardComponent";
import CardComponent from "@/components/ui/CardMovieComponent";

export default {
  name: "MovieUpcoming",
  components: {CardComponent, BannerCardComponent},
  setup() {

    const imgUrl = ref('https://image.tmdb.org/t/p/w500')
    const posterUrl = ref('https://image.tmdb.org/t/p/original')


    const { moviesUpcoming,errorMessage,getMoviesUpcoming } = useFetchMovieNow()


    getMoviesUpcoming()

    return {
      imgUrl,
      posterUrl,
      moviesUpcoming,

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