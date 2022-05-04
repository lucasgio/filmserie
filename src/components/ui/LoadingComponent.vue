<template>
  <v-overlay
      :absolute="absolute"
      :value="overlay"
      :opacity="1"
  >
    <v-row justify="center" align="center">
      <v-col cols="12">
        <v-progress-circular
            class="mx-auto"
            v-model="show"
            :size="70"
            :width="7"
            color="accent"
            indeterminate
        />
      </v-col>
    </v-row>
  </v-overlay>

</template>

<script>
import {onMounted, ref} from "@vue/composition-api";

export default {
  name: "LoadingComponent",
  emits:['close-spinner'],
  props: {
    show: {
      type:Boolean,
      default:false,
      required:true
    },

  },
  setup(props,ctx) {
    const absolute = ref(false)
    const overlay  = ref(false)

    if (props.show) {
      absolute.value = !absolute.value
      overlay.value  = !overlay.value
    }

    onMounted( () => {
      timeClose()
    })


    const timeClose = () =>  {
      setTimeout( () => {
        absolute.value = false
        overlay.value  = false
        return ctx.emit('close-spinner')
      },3500)
    }

    return {
      absolute,
      overlay,
    }
  }
}
</script>

<style scoped>

</style>