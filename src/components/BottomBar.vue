<template>
  <section
    class="bottom-banner"
  >
    <div class="bottombar">
      <v-flex xs4>
        <v-card
          dark
          flat
          color="#151515"
          style="margin-top: 150px"
        >
          <v-card-text>
            <div style="text-align: left">
              <span >上海办公室</span><br>
              <span class="grey--text" >地址：淮海东路99号恒积大厦10楼C座</span><br>
              <span class="grey--text">邮编：200021</span><br>
              <span class="grey--text">电话：021-61907319</span><br>
              <span class="grey--text">传真：021-61907318</span><br>
              <span class="grey--text">邮箱：russia@263.net</span><br>
            </div>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs4>
        <v-card
          dark
          flat
          color="#151515"
          style="margin-top: 150px"
        >
          <v-card-text>
            <div style="text-align: left">
              <span >莫斯科办公室</span><br>
              <span class="grey--text" >地址：Office 422, 19/2 Kuznetsky Most ulitsa, Moscow, 107031, Russia</span><br>
              <span class="grey--text">电话：+7-495-628 4807</span><br>
              <span class="grey--text">邮箱：shtc@list.ru</span><br>
              <br>
            </div>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs4>
        <v-card
          dark
          flat
          color="#151515"
          style="margin-top: 150px"
        >
          <v-card-text>
            <div style="text-align: left">
              <span >微信公众号</span><br>
              <span class="grey--text" >elsly-stc</span><br>
              <br>
              <br>
              <br>
              <br>
            </div>
          </v-card-text>
        </v-card>
      </v-flex>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style>
  .bottom-banner {
    background-color: #151515;
    height: 220px;
    position: relative;
    min-width: 720px;
    width: 100%;
  }

  .bottombar {
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
</style>
