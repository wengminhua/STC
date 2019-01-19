<template>
  <section
    class="top-banner"
    :style="backgroundStyle"
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
      let allChannels = [
        {
          code: 'home',
          name: '首页',
          bgImage: '/imgs/top_banner_bg_home.jpg'
        },
        {
          code: 'expo',
          name: '展会',
          bgImage: '/imgs/top_banner_bg_expo.jpg'
        },
        {
          code: 'trip',
          name: '旅游',
          bgImage: '/imgs/top_banner_bg_trip.jpg'
        },
        {
          code: 'hotel',
          name: '合作伙伴',
          bgImage: '/imgs/top_banner_bg_hotel.jpg'
        }
      ];
      let activeIdx = null;
      allChannels.forEach((channel, idx) => {
        if(channel.code == this.channel) {
          activeIdx = idx;
        }
      });
      return {
        active: activeIdx,
        channels: allChannels
      }
    },
    props: [
      'channel'
    ],
    watch: {
      active(val) {
        this.$router.push({ path: '/' + this.channels[val].code });
      }
    },
    computed: {
      backgroundStyle() {
        let image = '';
        this.channels.forEach((channel) => {
          if(channel.code == this.channel) {
            image = channel.bgImage;
          }
        })
        return "background-image: url(" + image + ");"
      }
    }
  }
</script>

<style>
  .top-banner {
    background-color: #111;
    background-position-x: 50%;
    background-position-y: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 550px;
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
