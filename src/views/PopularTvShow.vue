<template>
  <v-container v-if="tvShowsPopular">
    <BannerCardComponent
      title="Series populares"
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
          v-for="(tvShow,i) in tvShowsPopular"
          :key="i"
      >
        <CardShowComponent
          :tv-show="tvShow"
        />
      </v-col>
      <v-btn
          fab
          color="accent"
          @click="loadMoreTvShow"
          v-show="tvShowsPopular"
      >
        <v-icon
            dark
            color="primary"
        >
          fa-regular fa-sync
        </v-icon>
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
import {ref} from "@vue/composition-api/dist/vue-composition-api";
import useFetchTvShow from "@/composable/useFetchTvShows";
import BannerCardComponent from "@/components/ui/BannerCardComponent";
import CardShowComponent from "@/components/ui/CardShowComponent";

export default {
  name: "PopularTvShow",
  components: {CardShowComponent, BannerCardComponent},
  setup() {

    const { tvShowsPopular,errorMessage,getPopularTvShows,loadMoreTvShow } = useFetchTvShow()


    getPopularTvShows()

    return {
      tvShowsPopular,

      loadMoreTvShow

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