<template>
  <v-card
      v-if="imagePoster"
      class="rounded-b-lg"
      height="550"
      color="accent"
      outlined
      elevation="20"
      :img="`${posterUrl}/${imagePoster.backdrop_path}`"
  />
</template>

<script>
import {computed, ref} from "@vue/composition-api";

export default {
  name: "HeroCardComponent",
  props: {
    poster: {
      type:Array,
      default() {
        return {
          message:"No hay poster"
        }
      },
      required:true
    },
  },
  setup(props) {
    const posterUrl = ref('https://image.tmdb.org/t/p/original')

    const imagePoster = computed( () => {
      return props.poster.at(0)
    })


    return {
      posterUrl,
      imagePoster
    }
  }
}
</script>

<style scoped>

</style>