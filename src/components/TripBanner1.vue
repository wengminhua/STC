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
              @click="onLineClick(line)"
            >
            </v-img>
          </v-flex>
         </v-layout>
       </v-container>
     </v-flex>
   </v-layout>
   <v-dialog
      v-model="showLineDetail"
      max-width="700"
      v-if="currentLine"
    >
      <v-card>
        <v-card-title class="headline">{{ currentLine.name }}</v-card-title>

        <v-card-text>
          <div v-for="(item, idx) in currentLine.detail" :key="idx">
            <p class="trip-line-time">{{ item.time }}</p>
            <p class="trip-line-location">{{ item.location }}</p>
            <p class="trip-line-brief">{{ item.brief }}</p>
          </div>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            flat="flat"
            @click="showLineDetail = false"
          >
            关闭
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </section>
</template>

<script>
export default {
  data() {
    return {
      showLineDetail: false,
      currentLine: null,
      line_list: [
        {
          name: '俄罗斯法国五国游',
          days: 14,
          nights: 13,
          brief: '从上海出发，先后抵达俄罗斯、爱沙尼亚、拉脱维亚、立陶宛、法国。',
          pic: '/imgs/trip_line_1.jpg',
          detail: [
            {
              time: 'Day 1',
              location: '上海/莫斯科',
              brief: '乘坐国际航班直飞莫斯科，抵达后接机。晚餐后入住酒店。'
            },
            {
              time: 'Day 2',
              location: '上海/莫斯科',
              brief: '乘坐国际航班直飞莫斯科，抵达后接机。晚餐后入住酒店。'
            },
            {
              time: 'Day 3',
              location: '上海/莫斯科',
              brief: '乘坐国际航班直飞莫斯科，抵达后接机。晚餐后入住酒店。'
            }
          ]
        },
        {
          name: '俄罗斯法国五国游',
          days: 14,
          nights: 13,
          brief: '从上海出发，先后抵达俄罗斯、爱沙尼亚、拉脱维亚、立陶宛、法国。',
          pic: '/imgs/trip_line_2.jpg',
          detail: [
            {
              time: 'Day 1',
              location: '上海/莫斯科2',
              brief: '乘坐国际航班直飞莫斯科，抵达后接机。晚餐后入住酒店。'
            },
            {
              time: 'Day 2',
              location: '上海/莫斯科2',
              brief: '乘坐国际航班直飞莫斯科，抵达后接机。晚餐后入住酒店。'
            },
            {
              time: 'Day 3',
              location: '上海/莫斯科2',
              brief: '乘坐国际航班直飞莫斯科，抵达后接机。晚餐后入住酒店。'
            }
          ]
        },
        {
          name: '俄罗斯法国五国游',
          days: 14,
          nights: 13,
          brief: '从上海出发，先后抵达俄罗斯、爱沙尼亚、拉脱维亚、立陶宛、法国。',
          pic: '/imgs/trip_line_3.jpg',
          detail: [
            {
              time: 'Day 1',
              location: '上海/莫斯科3',
              brief: '乘坐国际航班直飞莫斯科，抵达后接机。晚餐后入住酒店。'
            },
            {
              time: 'Day 2',
              location: '上海/莫斯科3',
              brief: '乘坐国际航班直飞莫斯科，抵达后接机。晚餐后入住酒店。'
            },
            {
              time: 'Day 3',
              location: '上海/莫斯科3',
              brief: '乘坐国际航班直飞莫斯科，抵达后接机。晚餐后入住酒店。'
            }
          ]
        }
      ]
    }
  },
  methods: {
    onLineClick(line) {
      this.currentLine = line;
      this.showLineDetail = true;
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

.trip-line-time {
  text-align: left;
  color: #AA3B32;
}

.trip-line-location {
  text-align: left;
  font-weight: bold;
}

.trip-line-brief {
  text-align: left;
  margin-bottom: 30px;
}
</style>
