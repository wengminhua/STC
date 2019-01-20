<template>
  <div
    class="expo-main"
  >
    <p class="main-title">
      {{ expo.name }}
    </p>
    <v-layout class="main-pic-list">
     <v-flex>
       <v-container fluid grid-list-xs style="max-width: 1000px">
         <v-layout row wrap>
           <v-flex
            v-for="pic in expo.pic_list"
            :key="pic"
            d-flex
            xs12 md4
            style="padding: 15px"
           >
            <v-img
              :src="pic"
            >
            </v-img>
           </v-flex>
         </v-layout>
       </v-container>
     </v-flex>
   </v-layout>
 </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  props: [
    'expo'
  ]
}
</script>

<style>
.expo-main {
  padding: 50px;
  position: relative;
  min-width: 720px;
  width: 100%;
}

.expo-main .sub-title {
  color: #999;
  font-size: 14px;
}

.expo-main .main-title {
  font-size: 30px;
  margin-top: 20px;
  font-weight: bold;
}

.expo-main .main-pic-list {
  margin-top: 40px;
  min-width: 720px;
  max-width: 720px;
  margin-right: auto;
  margin-left: auto;
}
</style>
