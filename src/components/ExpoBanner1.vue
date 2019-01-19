<template>
  <section
    class="lnzh"
  >
    <p class="sub-title">
      多元、有效的服务
    </p>
    <p class="main-title">
      历年会展
    </p>
    <p class="sub-title">
      在会展服务方面，STC商旅与会展多年以来一直从事赴俄中国展览团组的接待业务及展位搭建等相关配套服务。
    </p>
    <v-layout style="margin-top: 40px">
     <v-flex>
       <v-container fluid grid-list-xs style="max-width: 1000px">
         <v-layout row wrap>
           <v-flex
            v-for="pic in pic_list"
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
  </section>
</template>

<script>
export default {
  data() {
    return {
      pic_list: [
        '/imgs/expo_lnzh_1.jpg',
        '/imgs/expo_lnzh_2.jpg',
        '/imgs/expo_lnzh_3.jpg',
        '/imgs/expo_lnzh_4.jpg',
        '/imgs/expo_lnzh_5.jpg',
        '/imgs/expo_lnzh_6.jpg',
      ]
    }
  }
}
</script>

<style>
.lnzh {
  padding: 50px;
  position: relative;
  min-width: 720px;
  width: 100%;
}

.lnzh .sub-title {
  color: #999;
  font-size: 14px;
}

.lnzh .main-title {
  font-size: 30px;
  margin-top: 20px;
  font-weight: bold;
}
</style>
