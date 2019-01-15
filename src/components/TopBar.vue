<template>
  <section
    class="top-banner"
    style="background-image: url({{ bgImage }});"
  >
    <div class="topbar">
      <span
        class="topbar-logo"
      >
        STC
      </span>
      <div
        class="topbar-menu"
      >
        <v-tabs
          v-model="active"
          dark
          slider-color="white">
          <v-tab
            v-for="channel in channels"
            :key="channel.code"
            ripple
          >
            {{ channel.name }}
          </v-tab>
        </v-tabs>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        active: 'home',
        channels: [
          {
            code: 'home',
            name: '首页',
            bgImage: '/imgs/home_top_banner_bg.jpg'
          },
          {
            code: 'expo',
            name: '展会',
            bgImage: '/imgs/expo_top_banner_bg.jpg'
          },
          {
            code: 'trip',
            name: '旅游',
            bgImage: '/imgs/trip_top_banner_bg.jpg'
          },
          {
            code: 'hotel',
            name: '合作伙伴',
            bgImage: '/imgs/hotel_top_banner_bg.jpg'
          }
        ]
      }
    },
    props: [
      'channel'
    ],
    computed: {
      bgImage() {
        let image = '';
        this.channels.forEach((channel) => {
          if(channel.code == this.active) {
            image = channel.bgImage;
          }
        })
        return image;
      }
    }
  }
</script>

<style scoped>
  .top-banner {
    background-color: #111;
    background-position-x: 50%;
    background-position-y: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 613px;
    position: relative;
    min-width: 720px;
    width: 100%;
  }

  .topbar {
    margin: 0 auto;
    max-width: 1200px;
    padding: 0 16px;
    width: 100%;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 64px;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    position: relative;
    z-index: 10;
    padding: 0 32px;
  }

  .topbar-logo {
    margin-bottom: 0;
    color: #FFF;
    font-size: 31px;
  }

  .topbar-menu {
    font-size: 16px;
    position: relative;
  }

  .theme--dark.v-tabs__bar {
    background-color: transparent;
  }
</style>
