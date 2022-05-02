<template>
  <v-container v-if="tvShowsOnAir">
    <BannerCardComponent
      title="Próximas series"
    />

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
        <CardShowComponent
          :tv-show="tvShow"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {ref} from "@vue/composition-api/dist/vue-composition-api";
import useFetchTvShow from "@/composable/useFetchTvShows";
import BannerCardComponent from "@/components/ui/BannerCardComponent";
import CardShowComponent from "@/components/ui/CardShowComponent";

export default {
  name: "TvShowsUpcoming",
  components: {CardShowComponent, BannerCardComponent},
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