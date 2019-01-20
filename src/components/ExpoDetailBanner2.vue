<template>
  <div
    class="expo-sub"
  >
    <v-container grid-list-xs>
      <v-layout row wrap>
        <v-flex xs3 style="padding: 20px">
          <v-img
            height="44"
            width="44"
            src="/imgs/expo_time.png"
            class="expo-icon"
          ></v-img>
          <p class="expo-icon-text">{{ expo.time }}</p>
        </v-flex>
        <v-flex xs3 style="padding: 20px">
          <v-img
            height="44"
            width="44"
            src="/imgs/expo_size.png"
            class="expo-icon"
          ></v-img>
          <p class="expo-icon-text">{{ expo.size }}</p>
        </v-flex>
        <v-flex xs3 style="padding: 20px">
          <v-img
            height="44"
            width="36"
            src="/imgs/expo_location.png"
            class="expo-icon"
          ></v-img>
          <p class="expo-icon-text">{{ expo.location }}</p>
        </v-flex>
        <v-flex xs3 style="padding: 20px">
          <v-img
            height="44"
            width="44"
            src="/imgs/expo_history.png"
            class="expo-icon"
          ></v-img>
          <p class="expo-icon-text">{{ expo.history }}</p>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props: [
    'expo'
  ]
}
</script>

<style>
  .expo-sub {
    background-color: #F8F8FF;
    height: 125px;
    position: relative;
    min-width: 720px;
    width: 100%;
  }

  .expo-sub .expo-icon {
    margin:auto;
    display:block;
    margin-bottom: 20px;
  }

  .expo-sub .expo-icon-text {
    font-size: 14px;
  }
</style>
