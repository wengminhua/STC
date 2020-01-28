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
          <!-- banner2 :expo="format_expo(expo_type, idx, expo)"></banner2 -->
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
            type: 'ktnt',
            expo_list: [
              {
                name: '莫斯科暖通卫浴展 AQUATHERM MOSCOW',
                time: '',
                size: '',
                location: '',
                history: '',
                pic_number: 6
              },
              {
                name: '莫斯科空调展 Climate World',
                time: '',
                size: '',
                location: '',
                history: '',
                pic_number: 3
              }
            ]
          },
          {
            type: 'dldw',
            expo_list: [
              {
                name: '莫斯科电网展 Power Grid',
                time: '',
                size: '',
                location: '',
                history: '',
                pic_number: 1
              }
            ]
          },
          {
            type: 'dzdq',
            expo_list: [
              {
                name: '莫斯科电子元器展 EXPOELECTRONICA',
                time: '',
                size: '',
                location: '',
                history: '',
                pic_number: 3
              }
            ]
          },
          {
            type: 'gcjx',
            expo_list: [
              {
                name: '莫斯科机床展 METALLOOBRABOTKA',
                time: '',
                size: '',
                location: '',
                history: '',
                pic_number: 6
              },
              {
                name: '莫斯科包装展 ROSUPACK',
                time: '',
                size: '',
                location: '',
                history: '',
                pic_number: 5
              },
              {
                name: '莫斯科工程机械展 CTT',
                time: '',
                size: '',
                location: '',
                history: '',
                pic_number: 5
              }
            ]
          },
          {
            type: 'jzjc',
            expo_list: [              
              {
                name: '莫斯科建材展 MOSBUILD',
                time: '',
                size: '',
                location: '',
                history: '',
                pic_number: 6
              },
              {
                name: '莫斯科五金展 MITEX',
                time: '',
                size: '',
                location: '',
                history: '',
                pic_number: 5
              },
              {
                name: '莫斯科安防展 MIPS',
                time: '',
                size: '',
                location: '',
                history: '',
                pic_number: 2
              },
              {
                name: '莫斯科泵阀展 PCV',
                time: '',
                size: '',
                location: '',
                history: '',
                pic_number: 1
              },
              {
                name: '莫斯科灯具展 INTERLIGHT',
                time: '',
                size: '',
                location: '',
                history: '',
                pic_number: 1
              },
              {
                name: '莫斯科涂料展 INTERRLAKOKRASKA',
                time: '',
                size: '',
                location: '',
                history: '',
                pic_number: 1
              }
            ]
          },
          {
            type: 'jtys',
            expo_list: [
              {
                name: '莫斯科火车展 EXPO 1520',
                time: '',
                size: '',
                location: '',
                history: '',
                pic_number: 6
              }
            ]
          },
          {
            type: 'qcqp',
            expo_list: [
              {
                name: '莫斯科汽配展 MIMS',
                time: '',
                size: '',
                location: '',
                history: '',
                pic_number: 6
              }
            ]
          },
          {
            type: 'syky',
            expo_list: [
              {
                name: '莫斯科石油天然气展 MIOGE',
                time: '',
                size: '',
                location: '',
                history: '',
                pic_number: 3
              },
              {
                name: '莫斯科矿业展 MININGWORLD RUSSIA',
                time: '',
                size: '',
                location: '',
                history: '',
                pic_number: 2
              },
              {
                name: '莫斯科石油展 NEFTEGAZ',
                time: '',
                size: '',
                location: '',
                history: '',
                pic_number: 4
              }
            ]
          },
          {
            type: 'spxf',
            expo_list: [
              {
                name: '莫斯科中国消费品展 China Commondity Fair',
                time: '',
                size: '',
                location: '',
                history: '',
                pic_number: 6
              },
              {
                name: '莫斯科家用品展 HOUSEHOLD EXPO',
                time: '',
                size: '',
                location: '',
                history: '',
                pic_number: 6
              },
              {
                name: '莫斯科箱包展 MOSPEL',
                time: '',
                size: '',
                location: '',
                history: '',
                pic_number: 6
              },
              {
                name: '莫斯科美容展 INTERCHARM',
                time: '',
                size: '',
                location: '',
                history: '',
                pic_number: 6
              },
              {
                name: '莫斯科肉业展 MEAT INDUSTRY',
                time: '',
                size: '',
                location: '',
                history: '',
                pic_number: 1
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
