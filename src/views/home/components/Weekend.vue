<template>
  <div>
    <div class="recommend-header">周末去哪</div>
    <div class="recommend-content" v-for="item of list" :key="item.id">
      <div class="img-swapper">
        <img class="img" :src="item.imgUrl" />
      </div>
      <div class="content-swapper">
        <div class="recommend-title">{{item.title}}</div>
        <div class="recommend-desc">{{item.desc}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: Array
  }
}
</script>

<style scoped lang="stylus">
.recommend-header
  line-height: 0.6rem
  padding-left: 0.3rem
  background: #eee
.recommend-content
  display: flex
  flex-direction: column
  overflow: hidden
  height: 4rem
  .img-swapper
    width: 100%
    height: 0
    padding-bottom: 38%
    .img
      width: 100%
  .content-swapper
    flex: 1
    margin-top: 0.1rem
    margin-left: 0.2rem
    .recommend-title
      line-height: 0.54rem
      font-size: 0.32rem
    .recommend-desc
      line-height: 0.44rem
      color: #ccc
    .item-button
      line-height: 0.4rem
      margin-top: 0.1rem
      background: #ff9300
      color: #fff
      font-size: 0.2rem
      border-radius: 0.06rem
</style>
