<template>
  <div
    class="expo-more"
  >
    <v-container grid-list-xs>
      <v-layout row wrap>
        <v-flex xs2 style="padding: 20px">
          <v-btn dark color="grey" @click="onBackClick">返回</v-btn>
        </v-flex>
        <v-flex xs8 style="padding: 20px">
          <p class="more-main-title">是否想了解更多展会搭建信息？</p>
          <p class="more-sub-title">更多相关信息请联系我们</p>
        </v-flex>
        <v-flex xs2 style="padding: 20px">
          <v-btn dark color="blue">联系我们</v-btn>
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
    'expoType'
  ],
  methods: {
    onBackClick() {
      this.$router.push({ path: '/expo/' });
    }
  }
}
</script>

<style>
  .expo-more {
    background-color: #7F7F7F;
    height: 90px;
    position: relative;
    min-width: 720px;
    width: 100%;
  }

  .expo-more .more-main-title {
    color: #FFF;
    font-size: 18px;
  }

  .expo-more .more-sub-title {
    color: #A9A9A9;
  }
</style>
