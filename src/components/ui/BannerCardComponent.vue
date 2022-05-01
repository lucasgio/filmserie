<template>
  <v-banner
      class="mt-6 rounded-lg mx-8"
      rounded
      shaped
      elevation="10"
      color="accent"
  >
    <v-card-title
        class="
          text-uppercase
          white--text
          text-h5
          text-decoration-overline
          font-weight-bold
          "
    >
      {{ title }}
    </v-card-title>
  </v-banner>
</template>

<script>
export default {
  name: "BannerCardComponent",
  props: {
    title: {
      type: String,
      default:''
    },
    required:true
  }
}
</script>