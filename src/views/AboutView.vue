<template>
  <div>
    <LoadingComponent
        :show="loading"
        @close-spinner="loading = !loading"
    />
    <v-container
        class="fill-height"
        fluid
    >
      <v-btn
          class="ma-8"
          fab
          small
          color="accent"
          to="/"
      >
        <v-icon
            color="white"
        >
          fa-long-arrow-alt-left
        </v-icon>
      </v-btn>

      <v-row justify="center" align="start">
        <v-col
            cols="12"
            lg="4"
            md="12"
            sm="12"
        >
          <v-card
              class="rounded-lg mx-auto"
              height="780"
              flat
              outlined
              tile
              elevation="5"
          >
            <v-img
                class="fill-height"
                :src="`${urlImg}/${movieAbout.poster_path}`" alt="poster-img" />
          </v-card>
        </v-col>
        <v-col
            cols="12"
            lg="8"
            md="12"
            sm="12"
        >
          <v-card
              class="rounded-lg"
              color="secondary"
              height="600"
              flat
              tile
          >
            <Information
                :data="{
                  titulo:movieAbout.original_title,
                  year:new Date(movieAbout.release_date).getFullYear(),
                }"
                :genres="movieAbout.genres"
                :production="movieAbout.production_companies"
                :overview="movieAbout.overview"
            />
            <Cast
                :cast="cast"
            />
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>


import axios from "axios";

import Cast from "@/components/about/Cast";
import Information from "@/components/about/Information";
import LoadingComponent from "@/components/ui/LoadingComponent";

export default {
  name: "AboutView",
  components: {LoadingComponent, Information, Cast},
  data: () => ({
    id: null,
    movieAbout: [],
    cast: [],
    api_key: "5962b5a668af804fc284b1e0a5ec4b9c",
    url: "https://api.themoviedb.org/3",
    errorMessage: null,
    urlImg: 'https://image.tmdb.org/t/p/original',
    loading: true,
    items: [
      {
        text: 'Atrás',
        disabled: false,
        href: '/',
      },
    ],
  }),
  created() {
    this.id = this.$route.params.id
  },
  watch: {
    id: async function (val) {
      try {
        await axios.get(`${this.url}/movie/${val}?api_key=${this.api_key}&language=es-ES`)
            .then(resp => this.movieAbout = resp.data)
            .catch(error => this.errorMessage = error.response.data.message)

        await axios.get(`${this.url}/movie/${val}/credits?api_key=${this.api_key}&language=es-ES`)
            .then(resp => this.cast = resp.data)
            .catch(error => this.errorMessage = error.response.data.message)

      } catch (e) {
        console.log(e)
      }
    }
  }

}
</script>

<style scoped>

</style>