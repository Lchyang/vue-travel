<template>
  <div class="search">
    <input class="input" placeholder="请输入要搜索的城市"/>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="stylus">
@import '~styles/varibles'

.search
  height: 0.72rem
  background: $bgColor
  padding: 0 0.1rem
  .input
    box-sizing: border-box
    height: 0.62rem
    line-height: 0.62rem
    text-align: center
    width: 100%
    border-radius: 0.06rem
    padding: 0 .1rem
</style>
