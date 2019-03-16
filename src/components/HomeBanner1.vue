<template>
  <v-flex
    class="fwzz"
  >
    <p class="sub-title">
      着力打造首屈一指的中俄商业服务品牌
    </p>
    <p class="main-title">
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
            class="card"
          >
            <v-list-tile-avatar
              :size=70
              class="avatar"
            >
              <img :src="fwzz.icon">
            </v-list-tile-avatar>
            <v-list-tile-content
              class="content"
            >
              <v-list-tile-title
                class="content-title"
              >
                {{ fwzz.title }}
              </v-list-tile-title>
              <v-list-tile-sub-title
                class="content-text"
              >
                {{ fwzz.subtitle }}
              </v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-flex>
      </v-layout>
    </v-container>
  </v-flex>
</template>

<script>
export default {
  data () {
    return {
      fwzzList: [
        {
          icon: '/imgs/home_fwzz_zy.png',
          title: '专业',
          subtitle: 'ETS集团拥有一支成熟、高效的管理团队，核心成员大多曾在俄罗斯长期工作、学习，员工也拥有极为丰富的从业经验。'
        },
        {
          icon: '/imgs/home_fwzz_gx.png',
          title: '高效',
          subtitle: 'ETS集团拥有一支成熟、高效的管理团队，核心成员大多曾在俄罗斯长期工作、学习，员工也拥有极为丰富的从业经验。'
        },
        {
          icon: '/imgs/home_fwzz_hl.png',
          title: '互利',
          subtitle: 'ETS集团拥有一支成熟、高效的管理团队，核心成员大多曾在俄罗斯长期工作、学习，员工也拥有极为丰富的从业经验。'
        },
        {
          icon: '/imgs/home_fwzz_zx.png',
          title: '重信',
          subtitle: 'ETS集团拥有一支成熟、高效的管理团队，核心成员大多曾在俄罗斯长期工作、学习，员工也拥有极为丰富的从业经验。'
        }
      ]
    }
  }
}
</script>

<style>
.fwzz {
  height: 500px;
  padding: 50px
}

.fwzz .sub-title {
  color: #999;
  font-size: 14px;
}

.fwzz .main-title {
  font-size: 30px;
  margin-top: 20px;
  margin-bottom: 100px;
  font-weight: bold;
}

.fwzz .card {
  min-height: 140px;
}

.fwzz .avatar {
  margin-top: -40px;
}

.fwzz .content {
  margin-left: 40px;
  min-height: 120px;
}

.fwzz .content-title {
  font-size: 24px
}

.fwzz .content-text {
  color: #999;
  margin-top: 10px;
  height: 80px;
  white-space: normal;
}
</style>
