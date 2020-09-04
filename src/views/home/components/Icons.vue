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
      swiperOption: {
        pagination: {
        }
      }
    }
  },
  props: {
    list: Array
  },
  computed: {
    // 将iconsList的一维数组拆成，固定长度的二维数组
    pageList () {
      const pages = []
      this.list.forEach((item, index) => {
        const pageIndex = Math.floor(index / 8)
        if (!pages[pageIndex]) {
          pages[pageIndex] = []
        }
        pages[pageIndex].push(item)
      })
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
    top: 0
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
    bottom: 0.1rem
    color: $darkTextColor
    text-align: center
    line-height: 0.44rem
    ellipsis()
</style>
