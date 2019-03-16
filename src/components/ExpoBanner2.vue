<template>
  <section
    class="hzlx"
  >
    <p class="main-title">
      会展类型
    </p>
    <p class="sub-title">
      在会展服务方面，ETS商旅与会展多年以来一直从事赴俄中国展览团组的接待业务及展位搭建等相关配套服务。
    </p>
    <v-layout style="margin-top: 40px">
     <v-flex>
       <v-container fluid grid-list-xs style="max-width: 1000px">
         <v-layout row wrap>
           <v-flex
            v-for="type in type_list"
            :key="type.pic"
            d-flex
            xs12 md4
            style="padding: 15px"
           >
            <a :href="'/#/expo-detail/'+type.type">
              <v-img
                :src="type.pic"
              >
              </v-img>
            </a>
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
      type_list: [
        {
          type: 'jc',
          pic: '/imgs/expo_hzlx_1.jpg',
        },
        {
          type: 'sp',
          pic: '/imgs/expo_hzlx_2.jpg',
        },
        {
          type: 'wj',
          pic: '/imgs/expo_hzlx_3.jpg',
        },
        {
          type: 'nt',
          pic: '/imgs/expo_hzlx_4.jpg',
        },
        {
          type: 'sy',
          pic: '/imgs/expo_hzlx_5.jpg',
        },
        {
          type: 'kt',
          pic: '/imgs/expo_hzlx_6.jpg',
        }
      ]
    }
  }
}
</script>

<style>
.hzlx {
  padding: 50px;
  position: relative;
  min-width: 720px;
  width: 100%;
  background-color: #F7F7F7;
}

.hzlx .sub-title {
  color: #999;
  font-size: 14px;
}

.hzlx .main-title {
  font-size: 30px;
  margin-top: 20px;
  font-weight: bold;
}
</style>
