<template>
  <div>
    <div class="recommend-header">热门推荐</div>
    <div class="recommend-content">
      <img
        class="img"
        src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg"
      />
      <div class="content-swapper">
        <div class="recommend-title">大连圣亚海洋世界</div>
        <div class="recommend-desc">浪漫大连首站，浪漫嗯海洋主题乐园</div>
        <button class="item-button">查看详情</button>
      </div>
    </div>
    <div class="recommend-content">
      <div class="img-swapper">
        <img
          class="img"
          src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg"
        />
      </div>
      <div class="content-swapper">
        <div class="recommend-title">大连圣亚海洋世界</div>
        <div class="recommend-desc">浪漫大连首站，浪漫嗯海洋主题乐园</div>
        <button class="item-button">查看详情</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="stylus">
.recommend-header
  line-height: 0.6rem
  padding-left: 0.3rem
  background: #eee
.recommend-content
  display: flex
  height: 1.9rem
  .img
    width: 1.7rem
    height: 1.7rem
    margin: 0.1rem
  .content-swapper
    flex: 1
    margin-top: 0.1rem
    margin-left: 0.2rem
    .recommend-title
      line-height: 0.54rem
      font-size: .32rem
    .recommend-desc
      line-height: 0.44rem
      color: #ccc
    .item-button
      line-height: .4rem
      margin-top: .1rem
      background: #ff9300
      color: #fff
      font-size: .2rem
      border-radius: .06rem
</style>
