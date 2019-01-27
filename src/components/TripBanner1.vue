<template>
  <section
    class="tsxl"
  >
    <p class="sub-title">
      想要一些酷的地方
    </p>
    <p class="main-title">
      热门目的地，特色线路
    </p>
    <v-layout style="margin-top: 40px">
     <v-flex>
       <v-container fluid grid-list-xs style="max-width: 1000px">
         <v-layout row wrap>
           <v-flex
            v-for="line in line_list"
            :key="line.pic"
            d-flex
            xs12 md4
            style="padding: 15px"
           >
             <v-img
              :src="line.pic"
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
      line_list: [
        {
          pic: '/imgs/trip_line_1.jpg',
        },
        {
          pic: '/imgs/trip_line_2.jpg',
        },
        {
          pic: '/imgs/trip_line_3.jpg',
        }
      ]
    }
  }
}
</script>

<style>
.tsxl {
  padding: 50px;
  position: relative;
  min-width: 720px;
  width: 100%;
  background-color: #F7F7F7;
}

.tsxl .sub-title {
  color: #999;
  font-size: 14px;
}

.tsxl .main-title {
  font-size: 30px;
  margin-top: 20px;
  font-weight: bold;
}
</style>
