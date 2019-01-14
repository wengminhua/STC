<template>
  <v-container>
    <v-layout
      text-xs-center
      wrap
    >
      <section
        class="top-banner"
        style="background-image: url(/imgs/home_top_banner_bg.jpg);"
      >
        <div class="topbar">
          <span
            class="topbar-logo"
          >
            STC
          </span>
          <div
            class="topbar-menu"
          >
            <v-tabs
              v-model="active"
              dark
              slider-color="white">
              <v-tab
                v-for="n in 3"
                :key="n"
                ripple
              >
                Item {{ n }}
              </v-tab>
            </v-tabs>
          </div>
        </div>
      </section>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        active: null
      }
    },
  }
</script>

<style>

</style>
