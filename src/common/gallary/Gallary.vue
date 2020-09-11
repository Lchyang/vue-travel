<template>
  <div class="gallary" @click="handleShowGallary">
    <div class="swapper">
      <div v-swiper:mySwiper="swiperOption">
        <div class="swiper-wrapper">
          <div class="swiper-slide" :key="banner" v-for="banner in gallaryImgs">
            <img class="img" :src="banner" />
          </div>
        </div>
        <div class="swiper-pagination" v-if="gallaryImgs"></div>
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
          el: '.swiper-pagination',
          clickable: true,
          type: 'fraction'
        },
        loop: true,
        observer: true,
        observeParents: true
      }
    }
  },
  props: {
    gallaryImgs: Array
  },
  methods: {
    handleShowGallary () {
      this.$emit('change')
    }
  }
}
</script>

<style scoped lang="stylus">
.gallary >>> .swiper-container
  overflow: inherit
.gallary
  z-index: 99
  display: flex
  flex-direction: column
  justify-content: center
  position: fixed
  top: 0
  bottom: 0
  left: 0
  right: 0
  background: #000
  .swapper
    width: 100%
    height: 0
    padding-bottom: 100%
    .swiper-wrapper
      .img
        width: 100%
    .swiper-pagination
      bottom: -1rem
      color: #fff
</style>
