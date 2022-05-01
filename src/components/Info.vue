<template>
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
             height="250"
             width="150"
             elevation="0"
             color="secondary"
             @click="searchActorInfo(actor.id)"
         >
           <v-img
               height="200"
               class="rounded-lg"
              :src="`${ actorImg }/${ actor.profile_path }`"
              alt="poster_actor"
           />
           <v-card-subtitle
               class="text-center"
           >
             {{ actor.name }}
           </v-card-subtitle>
         </v-card>

       </v-slide-item>
     </v-slide-group>
   </v-sheet>
</template>

<script>
export default {
  name: "Info",
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
    searchActorInfo(id) {
      /*TODO:// Terminar la informacion acerca del actor */
    }
  },
}
</script>

<style scoped>
.v-slide-group__content {
  justify-content: center;
}
</style>