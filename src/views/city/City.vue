<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list></city-list>
    <city-alph></city-alph>
  </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlph from './components/Alph'
export default {
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlph
  }
}
</script>

<style scoped lang="stylus"></style>
