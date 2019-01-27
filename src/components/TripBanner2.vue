<template>
  <section
    class="jdjs"
  >
    <p class="sub-title">
      想去有名的地方
    </p>
    <p class="main-title">
      景点介绍
    </p>
    <v-tabs
      v-model="currentCountry"
      light
      slider-color="grey"
      centered>
      <v-tab
        v-for="country in country_list"
        :key="country.country"
        ripple
      >
        {{ country.country }}
      </v-tab>
    </v-tabs>
    <v-layout style="margin-top: 40px">
     <v-flex>
       <v-container fluid grid-list-xs style="max-width: 1000px">
         <v-layout row wrap>
           <v-flex
            v-for="viewpoint in currentViewpointList"
            :key="viewpoint.pic"
            d-flex
            xs12 md4
            style="padding: 15px"
           >
             <v-card flat>
              <v-img
                :src="viewpoint.pic"
              >
              </v-img>
              <v-card-title
                class="card-title"
              >
                <div>
                  <div class="card-name" style="margin-bottom: 5px">{{ viewpoint.name }}</div>
                  <div class="card-location">{{ viewpoint.location }}</div>
                </div>
              </v-card-title>
            </v-card>
          </v-flex>
         </v-layout>
       </v-container>
     </v-flex>
   </v-layout>
   <v-pagination
    v-model="page"
    :length="viewpointLength"
    circle
   >
   </v-pagination>
  </section>
</template>

<script>
export default {
  data() {
    return {
      currentCountry: 0,
      viewpoint_list: [],
      page: 1,
      pageSize: 6,
      country_list: [
        {
          country: '俄罗斯',
          viewpoint_list: [
            {
              pic: '/imgs/trip_viewpoint_1.jpg',
              name: '莫斯科红场',
              location: '莫斯科'
            },
            {
              pic: '/imgs/trip_viewpoint_2.jpg',
              name: '弗拉基米尔',
              location: '莫斯科'
            },
            {
              pic: '/imgs/trip_viewpoint_3.jpg',
              name: '苏兹达里镇',
              location: '莫斯科'
            },
            {
              pic: '/imgs/trip_viewpoint_4.jpg',
              name: '谢尔盖耶夫镇',
              location: '莫斯科'
            },
            {
              pic: '/imgs/trip_viewpoint_5.jpg',
              name: '阿芙乐尔号巡洋舰',
              location: '莫斯科'
            },
            {
              pic: '/imgs/trip_viewpoint_6.jpg',
              name: '新年展览 NEW YEAR COUNTRY',
              location: '莫斯科'
            },
            {
              pic: '/imgs/trip_viewpoint_4.jpg',
              name: '谢尔盖耶夫镇',
              location: '莫斯科'
            },
            {
              pic: '/imgs/trip_viewpoint_5.jpg',
              name: '阿芙乐尔号巡洋舰',
              location: '莫斯科'
            },
            {
              pic: '/imgs/trip_viewpoint_6.jpg',
              name: '新年展览 NEW YEAR COUNTRY',
              location: '莫斯科'
            }
          ]
        },
        {
          country: '玻利维亚',
          viewpoint_list: [
            {
              pic: '/imgs/trip_viewpoint_1.jpg',
              name: '莫斯科红场',
              location: '莫斯科'
            },
            {
              pic: '/imgs/trip_viewpoint_2.jpg',
              name: '弗拉基米尔',
              location: '莫斯科'
            },
            {
              pic: '/imgs/trip_viewpoint_3.jpg',
              name: '苏兹达里镇',
              location: '莫斯科'
            },
            {
              pic: '/imgs/trip_viewpoint_4.jpg',
              name: '谢尔盖耶夫镇',
              location: '莫斯科'
            },
            {
              pic: '/imgs/trip_viewpoint_5.jpg',
              name: '阿芙乐尔号巡洋舰',
              location: '莫斯科'
            },
            {
              pic: '/imgs/trip_viewpoint_6.jpg',
              name: '新年展览 NEW YEAR COUNTRY',
              location: '莫斯科'
            }
          ]
        }
      ]
    }
  },
  watch: {
    currentCountry(val, oldVal) {
      this.page = 1;
    }
  },
  computed: {
    viewpointLength() {
      let length = this.country_list[this.currentCountry].viewpoint_list.length;
      if(length % this.pageSize > 0) {
        return parseInt(length / this.pageSize) + 1;
      } else {
        return length / this.pageSize;
      }
    },
    currentViewpointList() {
      let viewpointList = this.country_list[this.currentCountry].viewpoint_list;
      let start = (this.page - 1) * this.pageSize;
      let end = this.page * this.pageSize;
      if(viewpointList.length < end) {
        end = viewpointList.length;
      }
      let result = [];
      for(let idx=start; idx<end; idx++) {
        result.push(viewpointList[idx]);
      }
      return result;
    }
  }
}
</script>

<style>
.jdjs {
  padding: 50px;
  position: relative;
  min-width: 720px;
  width: 100%;
}

.jdjs .sub-title {
  color: #999;
  font-size: 14px;
}

.jdjs .main-title {
  font-size: 30px;
  margin-top: 20px;
  font-weight: bold;
}

.jdjs .card-name {
  font-size: 18px;
  text-align: left;
  font-weight: bold;
}

.jdjs .card-location {
  color: #999;
  text-align: left;
}

.jdjs .card-title {
  padding-left: 0px;
  padding-right: 0px;
}

.primary {
    background-color: #1867c0!important;
    border-color: #1867c0!important;
}
</style>
