<template>
  <section
    class="customize"
    style="background-image: url(/imgs/trip_customize_bg.jpg)"
  >
    <p class="sub-title">
      想去哪就去哪
    </p>
    <p class="main-title">
      自定义行程
    </p>
    <v-btn dark color="blue">开启行程</v-btn>
  </section>
</template>

<script>
export default {
  data() {
    return {
    }
  }
}
</script>

<style>
.customize {
  height: 270px;
  padding: 50px;
  background-color: #111;
  background-position-x: 50%;
  background-position-y: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  min-width: 720px;
  width: 100%;
}

.customize .sub-title {
  color: #FFF;
  font-size: 14px;
}

.customize .main-title {
  color: #FFF;
  font-size: 30px;
  margin-top: 20px;
  font-weight: bold;
}
</style>
