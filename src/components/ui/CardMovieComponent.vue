<template>
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
          <v-icon dark color="white"> fa-info</v-icon>
        </v-btn>
      </router-link>
    </v-card-actions>
  </v-card>
</template>

<script>
import {ref} from "@vue/composition-api";

export default {
  name: "CardMovieComponent",
  props: {
    movie: {
      type:Object,
      default(rawProps) {
        return {
          message:'No hay datos'
        }
      },
      required:true
    }
  },
  setup () {
    const imgUrl = ref('https://image.tmdb.org/t/p/w500')

    return {
      imgUrl
    }
  }
}
</script>

<style scoped>

</style>