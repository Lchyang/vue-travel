<template>
  <div class="alph-list">
    <div class="alph" @click="handleClickAlph" v-for="(item,key) of cities" :key="key">{{key}}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    cities: Object
  },
  methods: {
    handleClickAlph (event) {
      this.$emit('change', event.target.innerText)
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
