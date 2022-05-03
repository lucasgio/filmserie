<template>
  <div>
    <p
    class="
        text-h5
        text-uppercase
        text-decoration-overline
        font-weight-bold
        mx-8
        mt-5
        accent--text"
    >
      Reparto
    </p>
    <v-sheet
        class="mx-auto"
        elevation="0"
        color="secondary"
        v-if="cast"
    >
      <v-slide-group
          v-model="actor"
          dark
      >
        <v-slide-item
            v-for="actor in cast.cast"
            :key="actor.id"
        >
          <v-card
              class="ma-1"
              height="360"
              width="150"
              elevation="0"
              color="secondary"
              @click="searchActorInfo(actor.name)"
          >
            <v-img
                max-height="250"
                max-width="250"
                class="rounded-lg"
                :lazy-src="require(`@/assets/no-img.png`)"
                :src="`${ actorImg }/${ actor.profile_path }`"
                alt="poster_actor"
            />
            <v-card-subtitle
                class="text-center mb-n4"
            >
              {{ actor.character }}
            </v-card-subtitle>
            <v-card-subtitle
                class="text-center accent--text font-weight-bold"
            >
              {{ actor.name }}
            </v-card-subtitle>
          </v-card>

        </v-slide-item>
      </v-slide-group>
    </v-sheet>
  </div>

</template>

<script>
export default {
  name: "Cast",
  props: {
    cast: {
      type:Object|Array,
      default() {
        return {}
      },
      required:true
    }
  },
  data: () => ({
    actor:null,
    actorImg:'https://image.tmdb.org/t/p/w500',
  }),
  methods: {
    searchActorInfo(name) {
      this.$router.push( { name:'actor', params:{ name }} )
    }
  },
}
</script>

<style scoped>
.v-slide-group__content {
  justify-content: center;
}
</style>