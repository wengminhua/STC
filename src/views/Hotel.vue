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
      <banner1></banner1>
      <bottom-bar></bottom-bar>
    </v-layout>
  </v-container>
</template>

<script>
  import TopBar from '../components/TopBar'
  import Banner1 from '../components/HotelBanner1'
  import BottomBar from '../components/BottomBar'

  export default {
    data () {
      return {
        active: null
      }
    },
    components: {
      'top-bar': TopBar,
      'banner1': Banner1,
      'bottom-bar': BottomBar
    },
  }
</script>

<style>

</style>
