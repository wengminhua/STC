<template>
  <v-container>
    <v-layout
      text-xs-center
      wrap
    >
      <top-bar
        channel="home"
      >
      </top-bar>
      <banner1></banner1>
      <banner2></banner2>
      <banner3></banner3>
      <banner4></banner4>
      <bottom-bar></bottom-bar>
    </v-layout>
  </v-container>
</template>

<script>
  import TopBar from '../components/TopBar'
  import Banner1 from '../components/HomeBanner1'
  import Banner2 from '../components/HomeBanner2'
  import Banner3 from '../components/HomeBanner3'
  import Banner4 from '../components/HomeBanner4'
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
      'banner2': Banner2,
      'banner3': Banner3,
      'banner4': Banner4,
      'bottom-bar': BottomBar
    },
  }
</script>

<style>

</style>
