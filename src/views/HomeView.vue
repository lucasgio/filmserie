<template>
  <div class="mb-5">
    <v-sheet
        height="500"
        color="primary"
        outlined
    >
      <v-img
          class="fill-height"
          :src="`${ posterUrl }/${ moviesNow.results[0].backdrop_path }`"
          alt="poster_img"
      />
    </v-sheet>

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
          v-for="(movie,i) in moviesNow.results"
          :key="i"
      >
        <v-card
            class="mx-auto mt-6 rounded-lg"
            max-width="250"
            height="500"
            elevation="5"
            color="accent"
            dark
        >
          <v-hover v-slot="{ hover }">
            <v-sheet
                class="rounded-lg"
                height="300"
                color="primary"
                :elevation="hover ? 14 : 0"
                :class="{ 'on-hover': hover }"
            >
              <v-img
                  class="fill-height rounded-lg"
                  :src="`${imgUrl}/${movie.backdrop_path}`"
                  alt="poster_img"
              />
            </v-sheet>
          </v-hover>
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="text-md font-weight-bold mb-1">
                {{ movie.title.toUpperCase() }}
              </v-list-item-title>
              <div class="text-overline mb-1">
                {{ new Date(movie.release_date).getFullYear() }}
              </div>
              <v-list-item-subtitle class="mb-1">
                Valoración:
                {{ movie.vote_average }}
              </v-list-item-subtitle>
              <v-list-item-subtitle>{{ movie.overview }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-card-actions>
            <router-link :to="{ name:'about', params:{ id: movie.id }}">
              <v-btn fab color="primary" x-small>
                <v-icon dark color="white"> fa-regular fa-eye</v-icon>
              </v-btn>
            </router-link>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import useFetchMovieNow from "@/composable/useFetchMovieNow";
import {ref} from "@vue/composition-api";

export default {
  name: 'HomeView',
  setup() {


    const imgUrl = ref('https://image.tmdb.org/t/p/w500')
    const posterUrl = ref('https://image.tmdb.org/t/p/original')
    const {moviesNow, errorMessage} = useFetchMovieNow()


    return {
      moviesNow,
      imgUrl,
      posterUrl,

    }
  }

}
</script>
<style scoped>
.v-card {
  transition: opacity .6s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.9;
}
</style>