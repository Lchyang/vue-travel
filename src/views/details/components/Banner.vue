<template>
  <div>
    <div class="banner" @click="handleShowGallary">
      <img class="img" :src="detailData.bannerImg" />
      <div class="img-info">
        <div class="title">{{detailData.sightName}}</div>
        <div class="iconfont-wraper" v-if="detailData.length">
          <span class="iconfont">&#xe635;</span>
          {{detailData.gallaryImgs.length}}
        </div>
      </div>
    </div>
    <gallary v-show="showGallary" @change="handleChange" :gallaryImgs="detailData.gallaryImgs"></gallary>
  </div>
</template>

<script>
import Gallary from 'common/gallary/Gallary'
export default {
  data () {
    return {
      showGallary: false
    }
  },
  props: {
    detailData: Object
  },
  components: {
    Gallary
  },
  methods: {
    handleShowGallary () {
      this.showGallary = true
    },
    handleChange () {
      this.showGallary = false
    }
  }
}
</script>

<style scoped lang="stylus">
.banner
  position: relative
  overflow: hidden
  height: 0
  padding-bottom: 55%
  .img
    width: 100%
  .img-info
    display: flex
    position: absolute
    bottom: 0
    left: 0
    right: 0
    padding: 0.2rem
    color: #fff
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
    .iconfont-wrapem
      font-size: 0.28rem
      line-height: 0.32rem
    .title
      line-height: 0.32rem
      flex: 1
</style>
