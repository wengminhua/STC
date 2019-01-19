<template>
  <section
    class="gjhy"
  >
    <p class="sub-title">
      多元、有效的服务
    </p>
    <p class="main-title">
      国际会议和展览服务
    </p>
    <p class="sub-title">
      公司致力于开发中俄会展市场，有专业的管理人员和业务人员，为中国各界赴俄罗斯举办商品展览会、展销会、贸易洽谈会和参加各种国际展览会提供专业、高效的服务，并以会展为桥梁，帮助客户开拓俄罗斯市场。
    </p>
    <v-layout style="margin-top: 40px">
     <v-flex>
       <v-container fluid grid-list-sm style="max-width: 1000px">
         <v-layout row wrap>
           <v-flex
             v-for="pic in pic_list"
             :key="pic"
             d-flex
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
        '/imgs/home_gjhy_1.jpg',
        '/imgs/home_gjhy_2.jpg',
        '/imgs/home_gjhy_3.jpg',
      ]
    }
  }
}
</script>

<style>
.gjhy {
  height: 500px;
  padding: 50px;
  position: relative;
  min-width: 720px;
  width: 100%;
}

.gjhy .sub-title {
  color: #999;
  font-size: 14px;
}

.gjhy .main-title {
  font-size: 34px;
  margin-top: 20px;
  font-weight: bold;
}

.gjhy .container.grid-list-sm .layout .flex {
  padding: 20px;
}
</style>
