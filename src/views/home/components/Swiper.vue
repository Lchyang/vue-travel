<template>
  <div class="swapper">
    <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div class="swiper-slide" :key="banner" v-for="banner in banners">
          <img class="swiper-img" :src="banner" />
        </div>
      </div>
      <div class="swiper-pagination" slot="pagination"></div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      banners: ['http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg', 'http://img1.qunarzz.com/piao/fusion/1802/42/7c92b9a381e46402.jpg_640x200_1cdce2a4.jpg'],
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        loop: true
      }
    }
  }
}
</script>
<style lang="stylus" scoped>

.swapper >>> .swiper-pagination-bullet-active
  background: #fff

.swapper
  overflow: hidden
  height: 0
  padding-bottom: 31.2%
  background: #ccc
  .swiper-img
    width: 100%
</style>
