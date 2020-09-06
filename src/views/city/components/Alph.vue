<template>
  <div class="alph-list">
    <div class="alph">A</div>
    <div class="alph">A</div>
    <div class="alph">A</div>
    <div class="alph">A</div>
    <div class="alph">A</div>
    <div class="alph">A</div>
    <div class="alph">A</div>
    <div class="alph">A</div>
  </div>
</template>

<script>
export default {}
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
