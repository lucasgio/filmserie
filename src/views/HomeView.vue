<template>
    <v-container
        class="mb-5"
        v-if="moviesNow"
        fluid
    >
      <v-card
          class="rounded-b-lg"
          height="500"
          color="accent"
          outlined
          elevation="20"
          :img="`${ posterUrl }/${ moviesNow[0].backdrop_path }`"
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
          <v-card
              class="mx-auto mt-6 rounded-lg"
              max-width="300"
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
                  :elevation="hover ? 24 : 0"
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
                  {{ movie.original_title.toUpperCase() }}
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
        <v-btn
            fab
            color="accent"
            @click="loadMore"
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
import { ref } from "@vue/composition-api";

import useFetchMovieNow from "@/composable/useFetchMovieNow";

export default {
  name: 'HomeView',
  setup() {


    const imgUrl = ref('https://image.tmdb.org/t/p/w500')
    const posterUrl = ref('https://image.tmdb.org/t/p/original')



    const {
      moviesNow,
      errorMessage,
      getMovies,
      loadMore
    } = useFetchMovieNow()

    getMovies()

    return {
      moviesNow,
      imgUrl,
      posterUrl,

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