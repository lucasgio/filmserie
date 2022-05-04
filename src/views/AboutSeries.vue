<template>
  <div>
    <LoadingComponent
        :show="loading"
        @close-spinner="loading = !loading"
    />
    <v-container
        class="mb-10 fill-height"
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
              color="accent"
              height="750"
              flat
              outlined
              tile
              :img="`${urlImg}/${seriesAbout.poster_path}`"
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
            <Information
                :data="{
                  titulo:seriesAbout.original_name,
                  year:seriesAbout.first_air_date,
                }"
                :genres="seriesAbout.genres"
                :production="seriesAbout.production_companies"
                :overview="seriesAbout.overview"
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
  name: "AboutSeries",
  components: {Information, Cast, LoadingComponent },
  data: () => ({
    id: null,
    seriesAbout: [],
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
        await axios.get(`${this.url}/tv/${this.id}?api_key=${this.api_key}&language=es-ES`)
            .then(resp => this.seriesAbout = resp.data)
            .catch(error => this.errorMessage = error.response.data.message)
        setTimeout( () => this.loading = false,3000)

        await axios.get(`${this.url}/tv/${this.id}/credits?api_key=${this.api_key}&language=es-ES`)
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