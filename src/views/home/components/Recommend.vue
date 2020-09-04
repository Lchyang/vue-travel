<template>
  <div>
    <div class="recommend-header">热门推荐</div>
    <div class="recommend-content" v-for="item of recommendList" :key="item.id">
      <img class="img" :src="item.imgUrl" />
      <div class="content-swapper">
        <div class="recommend-title">{{item.title}}</div>
        <div class="recommend-desc">{{item.desc}}</div>
        <button class="item-button">查看详情</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      recommendList: [
        {
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg',
          title: '大连圣亚海洋世界',
          desc: '大连圣亚海洋世界，浪漫嗯海洋主题乐园'
        },
        {
          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg',
          title: '大连圣亚海洋世界',
          desc: '大连圣亚海洋世界，浪漫嗯海洋主题乐园'
        }
      ]
    }
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
