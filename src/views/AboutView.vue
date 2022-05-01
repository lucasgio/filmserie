<template>
  <v-container
      class="mb-10 fill-height"
      fluid
  >
    <v-row justify="center" align="start">
      <v-col
          cols="12"
          lg="4"
          md="12"
          sm="12"
      >
        <v-card
            class="rounded-lg mx-auto"
            color="accent"
            height="750"
            flat
            outlined
            tile
            :img="`${urlImg}/${movieAbout.poster_path}`"
        >
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
            <ListDetail
                :data="movieAbout"
            />
            <p class="text-h6 text-center accent--text font-weight-bold">Reparto</p>
            <Info :cast="cast" />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>


import axios from "axios";

import ListDetail from "@/components/ListDetail";
import Info from "@/components/Info";

export default {
  name: "AboutView",
  components: { Info, ListDetail },
  data: () => ({
    id: null,
    movieAbout: [],
    cast:[],
    api_key: "5962b5a668af804fc284b1e0a5ec4b9c",
    url: "https://api.themoviedb.org/3",
    errorMessage:null,
    urlImg:'https://image.tmdb.org/t/p/original',
    loading:true
  }),
  created() {
    this.id = this.$route.params.id
  },
  watch: {
    id:async function (val) {
      try {
        await axios.get(`${this.url}/movie/${this.id}?api_key=${this.api_key}&language=es-ES`)
            .then(resp => this.movieAbout = resp.data)
            .catch(error => this.errorMessage = error.response.data.message)
        setTimeout( () => this.loading = false,3000)

        await axios.get(`${this.url}/movie/${this.id}/credits?api_key=${this.api_key}&language=es-ES`)
            .then(resp => this.cast = resp.data)
            .catch(error => this.errorMessage = error.response.data.message)
        setTimeout( () => this.loading = false,3000)

      } catch (e) {
        console.log(e)
      }
    }
  }

}
</script>

<style scoped>

</style>