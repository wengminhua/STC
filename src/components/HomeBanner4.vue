<template>
  <section
    class="members"
    style="background-image: url(/imgs/home_members_bg.jpg)"
  >
    <p class="main-title">
      我们的成员
    </p>
    <p class="sub-title">
      俄罗斯STC集团拥有一支成熟、高效的管理团队，核心成员大多曾在俄罗斯长期工作、学习，员工也拥有极为丰富的从业经验。公司自创立以来，着力打造首屈一指的中俄商业服务品牌，力求为中俄两国企业及其他机构提供更为多元、有效的服务。
    </p>
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
.members {
  height: 240px;
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

.members .sub-title {
  color: #FFF;
  font-size: 14px;
}

.members .main-title {
  color: #FFF;
  font-size: 30px;
  margin-top: 20px;
  font-weight: bold;
}
</style>
