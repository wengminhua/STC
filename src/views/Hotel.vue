<template>
  <v-container>
    <v-layout
      text-xs-center
      wrap
    >
      <top-bar
        channel="hotel"
      >
      </top-bar>
    </v-layout>
  </v-container>
</template>

<script>
  import TopBar from '../components/TopBar'

  export default {
    data () {
      return {
        active: null
      }
    },
    components: {
      "top-bar": TopBar
    },
  }
</script>

<style>

</style>
