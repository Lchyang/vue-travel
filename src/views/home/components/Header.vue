<template>
  <div class="header">
    <div class="header-backup">
      <span class="iconfont back-icon">&#xe611;</span>
    </div>
    <div class="header-content">
      <span class="iconfont">&#xe602;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-city">
      <router-link to="/city">
        <div class="header-right">
         {{this.$store.state.city}}
          <span class="iconfont arrow-icon">&#xe6aa;</span>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles'

.header
  display: flex
  height: $headerHeight
  background: $bgColor
  color: #fff
  .header-backup
    width: 0.9rem
    line-height: 0.86rem
    text-align: center
    .back-icon
      font-size: 0.35rem
  .header-content
    flex: 1
    margin-top: 0.12rem
    margin-bottom: 0.12rem
    line-height: 0.62rem
    background: #fff
    border-radius: 0.05rem
    color: #ccc
    padding-left: 0.12rem
  .header-city
    min-width: 1.2rem
    line-height: 0.86rem
    float: right
    padding: 0 .1rem
    text-align: center
    .header-right
      min-width: 1.0rem
      color: #fff
    .arrow-icon
      margin-left: -0.1rem
</style>
