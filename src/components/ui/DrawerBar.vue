<template>
  <v-navigation-drawer
      class="elevation-3"
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
          <v-list-item-title class="text-h5 mb-1 text-uppercase">
            filmserie
          </v-list-item-title>
          <v-list-item-subtitle>Busca tu multimedia favorita en un solo lugar</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-avatar
            tile
            size="100"
            color="accent"
        >
          <v-img :src="require(`@/assets/popcorn.gif`)" />
        </v-list-item-avatar>
      </v-list-item>
    </v-card>


    <v-list shaped>
      <v-list-item-group
          class="mt-6"
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
</template>

<script>
import {ref} from "@vue/composition-api";

export default {
  name: "DrawerBar",
  setup() {
    const listItem = ref([
      {text: "Inicio", link: "/"},
      {text: "Peliculas más populares", link: "/top-rated"},
      {text: "Próximos extrenos", link: "/upcoming"},
      {text: "Series populares", link: "/tv-top-rated"},
      {text: "Series estreno", link: "/tv-upcoming"},
    ])


    return {
      listItem
    }
  }
}
</script>

<style scoped>

</style>