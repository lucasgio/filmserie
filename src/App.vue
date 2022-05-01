<template>
  <v-app
      id="inspire"
  >
    <v-navigation-drawer
        class="elevation-3"
        v-model="drawer"
        app
        color="primary"
        width="350"
    >
      <v-card
          class="mx-auto mt-6 rounded-lg"
          max-width="300"
          elevation="5"
          color="accent"
          dark
      >
        <v-list-item three-line>
          <v-list-item-content>
            <div class="text-overline mb-4">
              V 1.0
            </div>
            <v-list-item-title class="text-h5 mb-1">
              FILMserie
            </v-list-item-title>
            <v-list-item-subtitle>Busca tu multimedia favorita en un solo lugar</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card>


      <v-list shaped>
        <v-list-item-group
            class="mt-6"
            v-model="model"
            color="accent"
            dark
        >

          <v-list-item
              v-for="(item, i) in listItem"
              :key="i"
              :to="item.link"
          >
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>

      </v-list>
    </v-navigation-drawer>
    <v-main class="secondary mt-n3 rounded-lg">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import {ref, watch} from "@vue/composition-api"
import useFetchSearch from "@/composable/useFetchSearch";

export default {
  name: 'App',
  setup() {
    const drawer = ref(true)
    const model = ref(null)
    const search = ref(null)
    const urlImg = 'https://image.tmdb.org/t/p/original'

    const listItem = ref([
      {text: "Inicio", link: "/"},
      {text: "Peliculas más populares", link: "/top-rated"},
      {text: "Peliculas por estrenarse", link: "/upcoming"},
      {text: "Series populares", link: "/tv-top-rated"},
      {text: "Series estreno", link: "/tv-upcoming"},
    ])


    const {data, errorMessage, getSearchDB, loadMore} = useFetchSearch()

    watch(
        () => search.value,
        (q) => {
          q.length > 3
              ? getSearchDB(q)
              : data.value = []
        }
    )

    return {
      drawer,
      listItem,
      model,
      search,
      data,
      urlImg,
      getSearchDB,
      loadMore,

    }
  }


}
</script>
