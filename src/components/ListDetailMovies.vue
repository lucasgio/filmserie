<template>
  <v-responsive>
    <v-list color="secondary" dark flat v-if="data">
      <v-list-item-group
          color="accent"
      >
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title v-html="'Titulo'"></v-list-item-title>
            <v-list-item-subtitle v-text="data.title" />
          </v-list-item-content>
          <v-list-item-content>
            <v-list-item-title v-html="'Año'"></v-list-item-title>
            <v-list-item-subtitle v-text="new Date(data.release_date).getFullYear()" />
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title v-html="'Presupuesto'"></v-list-item-title>
            <v-list-item-subtitle v-text="`$ ${ data.budget }`" />
          </v-list-item-content>
          <v-list-item-content>
            <v-list-item-title v-html="'Recaudado'"></v-list-item-title>
            <v-list-item-subtitle v-text="`$ ${data.revenue}`" />
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title v-html="'Generos'"></v-list-item-title>
            <v-chip-group
                mandatory
                active-class="accent--text"
            >
              <v-chip
                  v-for="tag in data.genres"
                  :key="tag.id"
              >
                {{ tag.name }}
              </v-chip>
            </v-chip-group>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title v-html="'Productoras'"></v-list-item-title>
            <v-chip-group
                mandatory
                active-class="accent--text"
            >
              <v-chip
                  v-for="tag in data.production_companies"
                  :key="tag.id"
              >
                {{ tag.name }}
              </v-chip>
            </v-chip-group>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title v-html="'Detalles'"></v-list-item-title>
            <p>{{ data.overview }}</p>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-responsive>
</template>

<script>
export default {
  name: "ListDetailMovies",
  props: {
    data: {
      type:Object|Array,
      default() {
        return []
      },
      required:true
    }
  }

}
</script>

<style scoped>

</style>