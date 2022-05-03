<template>
  <v-card
      class="mx-auto mt-6 rounded-lg"
      max-width="300"
      height="500"
      color="secondary"
      dark
      flat
  >
    <v-hover v-slot="{ hover }">
      <v-sheet
          class="rounded-lg"
          height="300"
          color="accent"
          outlined
          :elevation="hover ? 24 : 0"
          :class="{ 'on-hover': hover }"
      >
        <v-img
            :lazy-src="require(`@/assets/no-img.png`)"
            class="fill-height rounded-lg"
            :src="`${imgUrl}/${tvShow.backdrop_path}`"
            alt="poster_img"
        />
      </v-sheet>
    </v-hover>
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="text-md font-weight-bold mb-1" v-text="tvShow.original_name.toUpperCase()"/>
        <div class="text-overline mb-1" v-text="new Date(tvShow.first_air_date).getFullYear()" />
        <v-list-item-subtitle class="mb-1">
          <span>Valoración:</span> {{ tvShow.vote_average }}
        </v-list-item-subtitle>
        <v-list-item-subtitle
            v-text="tvShow.overview"
        />
      </v-list-item-content>
    </v-list-item>
    <v-card-actions
      :class="tvShow.overview === '' && 'mt-8'"
    >
      <router-link :to="{ name:'detailSeries', params:{ id: tvShow.id }}">
        <v-btn
            fab
            color="accent"
            x-small
        >
          <v-icon
              dark
              color="white"
          >
            fa-info
          </v-icon>
        </v-btn>
      </router-link>
    </v-card-actions>
  </v-card>
</template>

<script>
import {ref} from "@vue/composition-api";

export default {
  name: "CardShowComponent",
  props: {
    tvShow: {
      type:Object,
      default(rawProps) {
        return {
          message:"No hay datos"
        }
      },
      required:true
    }
  },

  setup() {
    const imgUrl = ref('https://image.tmdb.org/t/p/w500')


    return {
      imgUrl
    }
  }
}
</script>

<style scoped>

</style>