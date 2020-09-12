<template>
  <div>
    <router-link tag="div" class="circle" to="/">
      <span class="iconfont back-icon">&#xe611;</span>
    </router-link>
    <div class="header" v-show="showHeader" :style="opacityStyle">
      <router-link tag="div" to="/" class="header-backup">
        <span class="iconfont back-icon">&#xe611;</span>
      </router-link>
      <div class="header-content">城市景点详情</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showHeader: false,
      opacityStyle: {
        opacity: 1
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      const offsetTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if (offsetTop > 60) {
        this.showHeader = true
        let opacity_ = offsetTop / 140
        opacity_ = opacity_ >= 1 ? 1 : opacity_
        this.opacityStyle = { opacity: opacity_ }
      } else {
        this.showHeader = false
      }
    }
  }
}
</script>

<style scoped lang="stylus">
@import '~styles/varibles'

.circle
  position: absolute
  top: 0.2rem
  left: 0.2rem
  height: 0.8rem
  width: 0.8rem
  border-radius: 0.4rem
  background: #000
  opacity: 0.5
  .back-icon
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    font-size: 0.5rem
    color: #fff
.header
  display: flex
  position: fixed
  top: 0
  left: 0
  right: 0
  height: $headerHeight
  background: $bgColor
  color: #fff
  .header-backup
    z-index: 1
    width: 0.9rem
    line-height: 0.86rem
    text-align: center
    .back-icon
      font-size: 0.35rem
  .header-content
    flex: 1
    line-height: 0.86rem
    color: #fff
    padding-left: 0.12rem
    text-align: center
    transform: translate(-0.5rem)
</style>
