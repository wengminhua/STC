<template>
  <v-container>
    <v-layout
      text-xs-center
      wrap
    >
      <top-bar
        channel="expo"
      >
      </top-bar>
      <banner1></banner1>
      <banner2></banner2>
    </v-layout>
  </v-container>
</template>

<script>
  import TopBar from '../components/TopBar'
  import Banner1 from '../components/ExpoBanner1'
  import Banner2 from '../components/ExpoBanner2'

  export default {
    data () {
      return {
        active: null
      }
    },
    components: {
      'top-bar': TopBar,
      'banner1': Banner1,
      'banner2': Banner2
    },
  }
</script>

<style>

</style>
