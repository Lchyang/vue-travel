<template>
  <div class="alph-list">
    <div
      class="alph"
      @click="handleClickAlph"
      @touchstart.prevent="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      v-for="(item,key) of cities"
      :key="key"
      :ref="key"
    >{{key}}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      touchStart: false,
      letters: []
    }
  },
  mounted () {
    setTimeout(() => { this.getLetters() }, 20)
  },
  props: {
    cities: Object
  },
  methods: {
    handleClickAlph (event) {
      this.$emit('change', event.target.innerText)
    },
    handleTouchStart () {
      this.touchStart = true
    },
    handleTouchMove (e) {
      if (this.touchStart) {
        const startY = this.$refs.A[0].offsetTop
        const touchY = e.touches[0].clientY - 79
        const index = Math.floor((touchY - startY) / 20)
        const letter = this.letters[index]
        if (index >= 0 && index <= this.letters.length) {
          this.$emit('change', letter)
        }
      }
    },
    handleTouchEnd () {
      this.touchStart = false
    },
    getLetters () {
      for (const i in this.cities) {
        this.letters.push(i)
      }
      return this.letters
    }
  }
}
</script>

<style scoped lang="stylus">
@import '~styles/varibles'

.alph-list
  display: flex
  flex-direction: column
  justify-content: center
  position: absolute
  top: 1.58rem
  right: 0
  bottom: 0
  .alph
    line-height: 0.4rem
    width: 0.4rem
    text-align: center
    color: $bgColor
</style>
