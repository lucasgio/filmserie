<template>
  <v-container>
    <v-card
        class="rounded-lg"
        color="accent"
        height="450"
        v-if="actorInfo"
    >
      <v-row class="pa-7">
        <v-col lg="2" sm="12">
          <v-avatar
            class="mx-5"
            size="350"
            color="primary"
          >
            <v-img
                class="rounded-circle"
                max-width="350"
                max-height="350"
                :src="`${urlImg}/${actorInfo.profile_path}`"
            />
          </v-avatar>
        </v-col>

        <v-col align-self="center" lg="6" sm="12">
          <v-card
              class="mx-auto"
              dark
              color="accent"
              max-width="344"
              outlined
          >
            <v-list-item three-line>
              <v-list-item-content>
                <div class="text-overline mb-4">
                  <span>Categoria:</span>
                  {{actorInfo.known_for_department}}
                </div>
                <v-list-item-title class="text-h5 mb-1">
                  {{ actorInfo.name }}
                </v-list-item-title>
                <v-list-item-subtitle><span>Popularidad: </span>{{ actorInfo.popularity }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
    <v-card
        class="mx-auto mt-10"
        max-height="350"
        elevation="0"
        color="secondary"
        v-if="actorInfo"
    >
      <v-slide-group
          dark
          center-active
      >
        <v-slide-item
            v-for="actor in actorInfo.known_for"
            :key="actor.id"
        >
          <v-card
              class="ma-1"
              height="400"
              width="250"
              elevation="0"
              color="secondary"
              @click="searchMovie(actor.id)"
          >
            <v-img
                max-height="350"
                max-width="300"
                class="rounded-lg"
                :src="`${ urlImg }/${ actor.poster_path }`"
                alt="poster_actor"
            />
            <v-card-subtitle
                class="text-center accent--text font-weight-bold"
            >
              {{ actor.original_title }}
            </v-card-subtitle>
          </v-card>

        </v-slide-item>
      </v-slide-group>
    </v-card>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "AboutActor",
  data: () => ({
    name:null,
    actorInfo:undefined,
    loading:false,
    api_key: "5962b5a668af804fc284b1e0a5ec4b9c",
    urlImg:'https://image.tmdb.org/t/p/w500',
    url: "https://api.themoviedb.org/3",
  }),
  created() {
    this.name = this.$route.params.name
  },

  methods: {
    searchMovie(id) {
      this.$router.push( {name:'about', params:{ id }})
    }
  },
  
  watch: {
    name: async function (val) {
      try {
        this.loading = true
        await axios.get(`${this.url}/search/person?api_key=${this.api_key}&language=es-ES&query=${val}&include_adult=false`)
            .then(resp => this.actorInfo = resp.data.results[0])
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