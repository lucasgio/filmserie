<template>
  <v-container v-if="tvShowsOnAir">
    <v-banner
        class="mt-6"
        rounded
        shaped
    >
      <v-card-title
          class="text-uppercase accent--text text-h5"
      >
        Series en estreno
      </v-card-title>
    </v-banner>

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
          v-for="(tvShow,i) in tvShowsOnAir"
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
                  :src="`${imgUrl}/${tvShow.backdrop_path}`"
                  alt="poster_img"
              />
            </v-sheet>
          </v-hover>
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="text-md font-weight-bold mb-1">
                {{ tvShow.original_name.toUpperCase()}}
              </v-list-item-title>
              <div class="text-overline mb-1">
                {{ new Date(tvShow.first_air_date).getFullYear() }}
              </div>
              <v-list-item-subtitle class="mb-1">
                Valoración:
                {{ tvShow.vote_average }}
              </v-list-item-subtitle>
              <v-list-item-subtitle>{{ tvShow.overview }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-card-actions>
            <router-link :to="{ name:'detailSeries', params:{ id: tvShow.id }}">
              <v-btn fab color="primary" x-small>
                <v-icon dark color="white"> fa-regular fa-eye</v-icon>
              </v-btn>
            </router-link>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {ref} from "@vue/composition-api/dist/vue-composition-api";
import useFetchTvShow from "@/composable/useFetchTvShows";

export default {
  name: "TvShowsUpcoming",
  setup() {

    const imgUrl = ref('https://image.tmdb.org/t/p/w500')


    const { tvShowsOnAir,errorMessage,getTvShowsUpcoming } = useFetchTvShow()


    getTvShowsUpcoming()

    return {
      imgUrl,
      tvShowsOnAir,

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