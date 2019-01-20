<template>
  <v-container>
    <v-layout
      text-xs-center
      wrap
    >
      <top-bar
        channel="expo"
      >
      </top-bar>
      <v-carousel hide-controls height="715">
        <v-carousel-item
          v-for="(expo, idx) in expo_list"
          :key="idx"
        >
          <banner1 :expo="format_expo(expo_type, idx, expo)"></banner1>
          <banner2 :expo="format_expo(expo_type, idx, expo)"></banner2>
        </v-carousel-item>
      </v-carousel>
      <banner3 :expo-type="expo_type"></banner3>
      <bottom-bar></bottom-bar>
    </v-layout>
  </v-container>
</template>

<script>
  import TopBar from '../components/TopBar'
  import Banner1 from '../components/ExpoDetailBanner1'
  import Banner2 from '../components/ExpoDetailBanner2'
  import Banner3 from '../components/ExpoDetailBanner3'
  import BottomBar from '../components/BottomBar'

  export default {
    data () {
      return {
        expo_type_list: [
          {
            type: 'jc',
            expo_list: [
              {
                name: '俄罗斯莫斯科暖通卫浴展AQUATHERM MOSCOW',
                time: '每年2月初，一年一届',
                size: '600-1100平方米',
                location: '莫斯科CROCUS展览中心',
                history: '2013年至今',
                pic_number: 6
              },
              {
                name: '俄罗斯莫斯科暖通卫浴展AQUATHERM MOSCOW',
                time: '每年2月初，一年一届',
                size: '600-1100平方米',
                location: '莫斯科CROCUS展览中心',
                history: '2013年至今',
                pic_number: 6
              }
            ]
          },
          {
            type: 'sp',
            expo_list: [
              {
                name: '俄罗斯莫斯科暖通卫浴展AQUATHERM MOSCOW',
                time: '每年2月初，一年一届',
                size: '600-1100平方米',
                location: '莫斯科CROCUS展览中心',
                history: '2013年至今',
                pic_number: 6
              },
              {
                name: '俄罗斯莫斯科暖通卫浴展AQUATHERM MOSCOW',
                time: '每年2月初，一年一届',
                size: '600-1100平方米',
                location: '莫斯科CROCUS展览中心',
                history: '2013年至今',
                pic_number: 6
              }
            ]
          },
          {
            type: 'wj',
            expo_list: [
              {
                name: '俄罗斯莫斯科暖通卫浴展AQUATHERM MOSCOW',
                time: '每年2月初，一年一届',
                size: '600-1100平方米',
                location: '莫斯科CROCUS展览中心',
                history: '2013年至今',
                pic_number: 6
              },
              {
                name: '俄罗斯莫斯科暖通卫浴展AQUATHERM MOSCOW',
                time: '每年2月初，一年一届',
                size: '600-1100平方米',
                location: '莫斯科CROCUS展览中心',
                history: '2013年至今',
                pic_number: 6
              }
            ]
          },
          {
            type: 'nt',
            expo_list: [
              {
                name: '俄罗斯莫斯科暖通卫浴展AQUATHERM MOSCOW',
                time: '每年2月初，一年一届',
                size: '600-1100平方米',
                location: '莫斯科CROCUS展览中心',
                history: '2013年至今',
                pic_number: 6
              },
              {
                name: '俄罗斯莫斯科暖通卫浴展AQUATHERM MOSCOW',
                time: '每年2月初，一年一届',
                size: '600-1100平方米',
                location: '莫斯科CROCUS展览中心',
                history: '2013年至今',
                pic_number: 6
              }
            ]
          },
          {
            type: 'sy',
            expo_list: [
              {
                name: '俄罗斯莫斯科暖通卫浴展AQUATHERM MOSCOW',
                time: '每年2月初，一年一届',
                size: '600-1100平方米',
                location: '莫斯科CROCUS展览中心',
                history: '2013年至今',
                pic_number: 6
              },
              {
                name: '俄罗斯莫斯科暖通卫浴展AQUATHERM MOSCOW',
                time: '每年2月初，一年一届',
                size: '600-1100平方米',
                location: '莫斯科CROCUS展览中心',
                history: '2013年至今',
                pic_number: 6
              }
            ]
          },
          {
            type: 'kt',
            expo_list: [
              {
                name: '俄罗斯莫斯科暖通卫浴展AQUATHERM MOSCOW',
                time: '每年2月初，一年一届',
                size: '600-1100平方米',
                location: '莫斯科CROCUS展览中心',
                history: '2013年至今',
                pic_number: 6
              },
              {
                name: '俄罗斯莫斯科暖通卫浴展AQUATHERM MOSCOW',
                time: '每年2月初，一年一届',
                size: '600-1100平方米',
                location: '莫斯科CROCUS展览中心',
                history: '2013年至今',
                pic_number: 6
              }
            ]
          }
        ]
      }
    },
    components: {
      'top-bar': TopBar,
      'banner1': Banner1,
      'banner2': Banner2,
      'banner3': Banner3,
      'bottom-bar': BottomBar
    },
    computed: {
      expo_type() {
        return this.$route.params.type;
      },
      expo_list() {
        let expo_list = [];
        this.expo_type_list.forEach((expo_type) => {
          if(expo_type.type == this.$route.params.type) {
            expo_list = expo_type.expo_list;
          }
        });
        return expo_list;
      }
    },
    methods: {
      format_expo(type, index, expo) {
        let pic_list = [];
        for(let i=1; i<=expo.pic_number; i++) {
          pic_list.push('/imgs/expo/' + this.expo_type + '/' + String(index+1) + '/' + String(i) + '.jpg');
        }
        expo['pic_list'] = pic_list;
        return expo;
      }
    }
  }
</script>

<style>

</style>
