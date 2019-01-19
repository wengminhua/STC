<template>
  <v-container>
    <v-layout
      text-xs-center
      wrap
    >
      <top-bar
        channel="home"
      >
      </top-bar>
      <v-flex
        class="fwzz"
      >
        <p class="sub-t">
          着力打造首屈一指的中俄商业服务品牌
        </p>
        <p class="t">
          我们的服务准则
        </p>
        <v-container fluid grid-list-sm>
          <v-layout row wrap>
            <v-flex
              v-for="fwzz in fwzzList"
              :key="fwzz.title"
              xs6
            >
              <v-list-tile
                avatar
              >
                <v-list-tile-avatar>
                  <img :src="fwzz.icon">
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title>{{ fwzz.title }}</v-list-tile-title>
                  <v-list-tile-sub-title>{{ fwzz.subtitle }}</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import TopBar from '../components/TopBar'

  export default {
    data () {
      return {
        active: null,
        fwzzList: [
          {
            icon: '/imgs/home_fwzz_zy.png',
            title: '专业',
            subtitle: 'STC集团拥有一支成熟、高效的管理团队，核心成员大多曾在俄罗斯长期工作、学习，员工也拥有极为丰富的从业经验。'
          },
          {
            icon: '/imgs/home_fwzz_gx.png',
            title: '高效',
            subtitle: 'STC集团拥有一支成熟、高效的管理团队，核心成员大多曾在俄罗斯长期工作、学习，员工也拥有极为丰富的从业经验。'
          },
          {
            icon: '/imgs/home_fwzz_hl.png',
            title: '互利',
            subtitle: 'STC集团拥有一支成熟、高效的管理团队，核心成员大多曾在俄罗斯长期工作、学习，员工也拥有极为丰富的从业经验。'
          },
          {
            icon: '/imgs/home_fwzz_zx.png',
            title: '重信',
            subtitle: 'STC集团拥有一支成熟、高效的管理团队，核心成员大多曾在俄罗斯长期工作、学习，员工也拥有极为丰富的从业经验。'
          }
        ]
      }
    },
    components: {
      "top-bar": TopBar
    },
  }
</script>

<style>
.fwzz {
  height: 770px;
  padding: 116px
}

.fwzz .sub-t {
  color: #999;
  font-size: 14px;
}

.fwzz .t {
  font-size: 34px;
  margin-top: 20px;
  font-weight: bold;
}
</style>
