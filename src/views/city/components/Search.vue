<template>
  <div>
    <div class="search">
      <input class="input" placeholder="请输入要搜索的城市" v-model="keyWord" />
    </div>
    <div class="search-content" v-show="keyWord.length" ref="search">
      <ul ref="ul">
        <li class="city-item" v-show="!cityList.length">没有找到匹配的城市</li>
        <li
          class="city-item"
          v-for="item in cityList"
          :key="item.id"
          @click="handleClickCity(item.name)"
        >{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
export default {
  data () {
    return {
      cityList: [],
      keyWord: ''
    }
  },
  updated () {
    this.scroll.refresh()
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.search)
  },
  methods: {
    handleClickCity (name) {
      this.$store.commit('changeCity', name)
      this.$router.push('/')
    }
  },
  props: {
    cities: Object
  },
  watch: {
    keyWord () {
      if (this.cities !== []) {
        this.cityList = []
      }
      for (const i in this.cities) {
        for (const k in this.cities[i]) {
          const name = this.cities[i][k].name
          const spell = this.cities[i][k].spell
          if (name.indexOf(this.keyWord) > -1 || spell.indexOf(this.keyWord) > -1) {
            this.cityList.push(this.cities[i][k])
          }
        }
      }
    }
  }
}
</script>

<style scoped lang="stylus">
@import '~styles/varibles'

.search
  height: 0.72rem
  background: $bgColor
  padding: 0 0.1rem
  .input
    box-sizing: border-box
    height: 0.62rem
    line-height: 0.62rem
    text-align: center
    width: 100%
    border-radius: 0.06rem
    padding: 0 0.1rem
.search-content
  overflow: hidden
  position: absolute
  top: 1.58rem
  left: 0
  right: 0
  bottom: 0
  z-index: 10
  background: #fff
  .city-item
    list-style: none
    padding: 0 0.2rem
    line-height: 0.56rem
    border-bottom-style: solid
    border-color: #eee
    border-width: 0.02rem
    background: #fff
</style>
