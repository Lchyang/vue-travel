<template>
  <div class="header">
    <div class="header-backup">返回</div>
    <div class="header-content">输入城市/景点/游玩主题</div>
    <div class="header-city">城市</div>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="stylus" scoped>
.header
  display: flex
  height: 0.86rem
  background: #00bcd4
  color: #fff
  .header-backup
    width: 0.86rem
    line-height: .86rem
    text-align : center
  .header-content
    flex: 1
    margin-top: .12rem
    margin-bottom: .12rem
    line-height: .62rem
    background: #fff
    border-radius: .05rem
    color: #ccc
    padding-left: .12rem
  .header-city
    width: 0.86rem
    line-height: .86rem
    text-align : center
</style>
