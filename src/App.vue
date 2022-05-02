<template>
  <v-app
      id="inspire"
  >
    <DrawerBar/>
    <v-main class="secondary mt-n4 rounded-lg">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import {ref, watch} from "@vue/composition-api"
import useFetchSearch from "@/composable/useFetchSearch";
import DrawerBar from "@/components/ui/DrawerBar";

export default {
  name: 'App',
  components: {DrawerBar},
  setup() {
    const drawer = ref(true)
    const model = ref(null)
    const search = ref(null)
    const urlImg = 'https://image.tmdb.org/t/p/original'




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
