<template>
  <section
    class="hotel"
  >
    <p class="main-title">
      在我们的度假村放松
    </p>
    <v-layout style="margin-top: 40px">
     <v-flex>
       <v-container fluid grid-list-xs style="max-width: 1000px">
         <v-layout row wrap>
           <v-flex
            v-for="hotel in currentHotelList"
            :key="hotel.pic"
            d-flex
            xs12 md4
            style="padding: 15px"
           >
             <v-card flat>
              <v-img
                :src="hotel.pic"
              >
              </v-img>
              <v-card-title
                class="card-title"
              >
                <div>
                  <div class="card-name" style="margin-bottom: 5px">{{ hotel.name }}</div>
                  <div class="card-location" style="margin-bottom: 2px">{{ hotel.location }}</div>
                  <v-rating
                    :value=5
                    background-color="purple lighten-3"
                    color="#348286"
                    small
                    readonly
                    style="width: 80px"
                  ></v-rating>
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
    :length="pageLength"
    circle
   >
   </v-pagination>
  </section>
</template>

<script>
export default {
  data() {
    return {
      page: 1,
      pageSize: 9,
      hotel_list: [
        {
          pic: '/imgs/hotel_1.jpg',
          name: 'Hilton Moscow Leningradskaya',
          location: '莫斯科Tverskaya大街 3号',
          stars: 5
        },
        {
          pic: '/imgs/hotel_2.jpg',
          name: 'Hilton Moscow Leningradskaya',
          location: '莫斯科Tverskaya大街 3号',
          stars: 5
        },
        {
          pic: '/imgs/hotel_3.jpg',
          name: 'Hilton Moscow Leningradskaya',
          location: '莫斯科Tverskaya大街 3号',
          stars: 5
        },
        {
          pic: '/imgs/hotel_4.jpg',
          name: 'Hilton Moscow Leningradskaya',
          location: '莫斯科Tverskaya大街 3号',
          stars: 5
        },
        {
          pic: '/imgs/hotel_5.jpg',
          name: 'Hilton Moscow Leningradskaya',
          location: '莫斯科Tverskaya大街 3号',
          stars: 5
        },
        {
          pic: '/imgs/hotel_6.jpg',
          name: 'Hilton Moscow Leningradskaya',
          location: '莫斯科Tverskaya大街 3号',
          stars: 5
        },
        {
          pic: '/imgs/hotel_7.jpg',
          name: 'Hilton Moscow Leningradskaya',
          location: '莫斯科Tverskaya大街 3号',
          stars: 5
        },
        {
          pic: '/imgs/hotel_8.jpg',
          name: 'Hilton Moscow Leningradskaya',
          location: '莫斯科Tverskaya大街 3号',
          stars: 5
        },
        {
          pic: '/imgs/hotel_9.jpg',
          name: 'Hilton Moscow Leningradskaya',
          location: '莫斯科Tverskaya大街 3号',
          stars: 5
        },
        {
          pic: '/imgs/hotel_10.jpg',
          name: 'Hilton Moscow Leningradskaya',
          location: '莫斯科Tverskaya大街 3号',
          stars: 5
        },
        {
          pic: '/imgs/hotel_11.jpg',
          name: 'Hilton Moscow Leningradskaya',
          location: '莫斯科Tverskaya大街 3号',
          stars: 5
        },
        {
          pic: '/imgs/hotel_12.jpg',
          name: 'Hilton Moscow Leningradskaya',
          location: '莫斯科Tverskaya大街 3号',
          stars: 5
        }
      ]
    }
  },
  computed: {
    pageLength() {
      let length = this.hotel_list.length;
      if(length % this.pageSize > 0) {
        return parseInt(length / this.pageSize) + 1;
      } else {
        return length / this.pageSize;
      }
    },
    currentHotelList() {
      let hotelList = this.hotel_list;
      let start = (this.page - 1) * this.pageSize;
      let end = this.page * this.pageSize;
      if(hotelList.length < end) {
        end = hotelList.length;
      }
      let result = [];
      for(let idx=start; idx<end; idx++) {
        result.push(hotelList[idx]);
      }
      return result;
    }
  }
}
</script>

<style>
.hotel {
  padding: 50px;
  position: relative;
  min-width: 720px;
  width: 100%;
}

.hotel .sub-title {
  color: #999;
  font-size: 14px;
}

.hotel .main-title {
  font-size: 30px;
  margin-top: 20px;
  font-weight: bold;
}

.hotel .card-name {
  font-size: 16px;
  text-align: left;
}

.hotel .card-location {
  color: #999;
  text-align: left;
}

.hotel .card-title {
  padding-left: 0px;
  padding-right: 0px;
}

.hotel .v-rating .v-icon {
  padding: 0px;
}

.primary {
    background-color: #1867c0!important;
    border-color: #1867c0!important;
}
</style>
