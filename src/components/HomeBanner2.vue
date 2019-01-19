<template>
  <section
    class="slzh"
    style="background-image: url(/imgs/home_slzh_bg.png)"
  >
    <p class="sub-title">
      多元、有效的服务
    </p>
    <p class="main-title">
      商旅展会
    </p>
    <p class="sub-title">
      STC依托在俄联邦及周边国家广泛的业务领域、丰富的渠道资源，与俄各级政府机关、各类大中型企业、专业院校及科研机构均保持有较为密切的联系或业务往来，便于为国内各类单位、个人赴俄开展考察、洽谈、商务拓展等活动提供全方位的服务。
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
        '/imgs/home_slzh_1.jpg',
        '/imgs/home_slzh_2.jpg',
        '/imgs/home_slzh_3.jpg',
      ]
    }
  }
}
</script>

<style>
.slzh {
  height: 500px;
  padding: 50px;
  background-color: #111;
  background-position-x: 50%;
  background-position-y: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  min-width: 720px;
  width: 100%;
}

.slzh .sub-title {
  color: #FFF;
  font-size: 14px;
}

.slzh .main-title {
  color: #FFF;
  font-size: 30px;
  margin-top: 20px;
  font-weight: bold;
}

.slzh .container.grid-list-sm .layout .flex {
  padding: 20px;
}
</style>
