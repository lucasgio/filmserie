<template>
  <div>
    <v-row>
      <v-col
          cols="12"
          lg="6"
          sm="12"
          v-for="n in 1"
          :key="n"
      >
        <v-list-item-group
            class="rounded-lg"
            color="accent"
            dark
            v-for="(data,i) in data"
            :key="i">
          <v-list-item dense three-line>
            <v-list-item-content>
              <v-list-item-title
                  class="text-capitalize"
                  v-html="i"
              />
              <v-list-item-subtitle
                  v-text="data"
              />
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-col>
      <v-col cols="12" lg="6" sm="12">
        <v-list-item
            color="accent"
            dark
        >
          <v-list-item-content>
            <v-list-item-title
                v-html="'Generos'"
            />
            <v-chip-group
                mandatory
                active-class="accent--text"
            >
              <v-chip
                  v-for="tag in genres"
                  :key="tag.id"
              >
                {{ tag.name }}
              </v-chip>
            </v-chip-group>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
            color="accent"
            dark
        >
          <v-list-item-content>
            <v-list-item-title
                v-html="'Productoras'"
            />
            <v-chip-group
                mandatory
                active-class="accent--text"
            >
              <v-chip
                  v-for="tag in production"
                  :key="tag.id"
              >
                {{ tag.name }}
              </v-chip>
            </v-chip-group>
          </v-list-item-content>
        </v-list-item>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-list-item dark>
          <v-list-item-content>
            <v-list-item-title v-html="'Detalles'"></v-list-item-title>
            <p>{{ overview }}</p>
          </v-list-item-content>
        </v-list-item>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Information",
  props: {
    data: {
      type: Object,
      default() {
        return {}
      },
      required: true
    },
    genres: {
      type: Array|Object,
      default(rawProps) {
        return { message: 'No existen productoras' }
      },
      required: true
    },

    overview: {
      type: String,
      default:"No existe descripción",
      required: true
    },
    production: {
      type: Object|Array,
      default(rawProps) {
        return { message: 'No existen reparto' }
      },
      required: true
    },
  },
}
</script>
