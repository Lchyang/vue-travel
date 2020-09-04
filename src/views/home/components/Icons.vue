<template>
  <div class="icons-swapper">
    <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(page,index) of pageList" :key="index">
          <div class="icons" v-for="item of page" :key="item.id">
            <div class="img-swapper">
              <img class="icon-img" :src="item.imgUrl" />
            </div>
            <div class="img-text">{{item.desc}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      iconsList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png',
        desc: '景点门票景点门票景点门票景点门票景点门票'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1711/df/86cbcfc533330d02.png',
        desc: '滑雪季'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png',
        desc: '泡温泉'
      }, {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1611/35/2640cab202c41b02.png',
        desc: '动植园'
      }, {
        id: '0005',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1611/d0/e09575e66f4aa402.png',
        desc: '游乐园'
      }, {
        id: '0006',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1611/59/569d3c096e542502.png',
        desc: '必游榜单'
      }, {
        id: '0007',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1611/17/4bd370f3eb1acd02.png',
        desc: '演出'
      }, {
        id: '0008',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1611/7f/b1ea3c8c7fb6db02.png',
        desc: '城市观光'
      }, {
        id: '0009',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1611/a9/ffc620dbda9b9c02.png',
        desc: '一日游'
      }],
      swiperOption: {
        pagination: {
        }
      }
    }
  },
  computed: {
    // 将iconsList的一维数组拆成，固定长度的二维数组
    pageList () {
      const pages = []
      this.iconsList.forEach((item, index) => {
        const pageIndex = Math.floor(index / 8)
        if (!pages[pageIndex]) {
          pages[pageIndex] = []
        }
        pages[pageIndex].push(item)
      })
      console.log(pages)
      return pages
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles'
@import '~styles/mixin'

.icons-swapper >>> .swiper-container
  width: 100%
  height: 0
  padding-bottom: 50%
.icons
  position: relative
  float: left
  width: 25%
  height: 0
  padding-bottom: 25%
  .img-swapper
    position: absolute
    top: 0.1rem
    left: 0
    right: 0
    bottom: 0.44rem
    padding: 0.1rem
    .icon-img
      display: block
      margin: 0 auto
      height: 100%
  .img-text
    position: absolute
    left: 0
    right: 0
    bottom: 0
    color: $darkTextColor
    text-align: center
    line-height: 0.44rem
    ellipsis()
</style>
