<template>
  <div>
    <div class="city-header">
      <div class="iconfont-swaper">
        <router-link to="/">
          <span class="iconfont back-icon">&#xe611;</span>
        </router-link>
      </div>城市选择
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="stylus">
@import '~styles/varibles'

.city-header
  height: $headerHeight
  background: $bgColor
  line-height: $headerHeight
  text-align: center
  font-size: 0.32rem
  color: #fff
  .iconfont-swaper
    position: absolute
    left: 0.2rem
    top: 0
    .back-icon
      font-size: 0.32rem
      color: #fff
</style>
