<template>
  <div class="city-list wrapper" ref="wrapper">
    <div>
      <div class="area">
        <div class="header border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-swaper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="header border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-swaper" v-for="item of hotCities" :key="item.id">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item,key) of cities" :key="key">
        <div class="header border-topbottom" :ref="key">{{key}}</div>
        <div class="item-list">
          <div class="item" v-for="city of item" :key="city.id">{{city.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
export default {
  props: {
    hotCities: Array,
    cities: Object,
    letter: String
  },
  mounted () {
    setTimeout(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {})
    }, 20)
  },
  watch: {
    letter: function () {
      if (this.letter) {
        this.scroll = new BScroll(this.$refs.wrapper, {})
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>

<style scoped lang="stylus">
.city-list
  overflow: hidden
  position: absolute
  top: 1.58rem
  left: 0
  right: 0
  bottom: 0
  .header
    line-height: 0.54rem
    background: #eee
    padding-left: 0.2rem
    color: #666
    border-top-style: solid
    border-bottom-style: solid
    border-color: #eee
    border-width: 0.02rem
  .button-list
    overflow: hidden
    padding: 0.1rem 0.6rem 0.1rem 0.1rem
    .button-swaper
      float: left
      width: 33.3%
      text-align: center
      .button
        margin: 0.1rem
        border: 0.02rem solid #ccc
        padding: 0.1rem 0
        border-radius: 0.06rem
  .item-list
    .item
      padding: 0 0.2rem
      line-height: 0.56rem
      border-bottom-style: solid
      border-color: #eee
      border-width: 0.02rem
</style>
