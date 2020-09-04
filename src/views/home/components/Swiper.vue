<template>
  <div class="swapper">
    <div v-swiper:mySwiper="swiperOption" v-if="list.length">
      <div class="swiper-wrapper">
        <div class="swiper-slide" :key="banner.id" v-for="banner of list">
          <img class="swiper-img" :src="banner.imgUrl" />
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
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        loop: true
      }
    }
  },
  props: {
    list: Array
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
