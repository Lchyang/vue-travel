<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :cities="cities" :hotCities="hotCities" :letter="letter"></city-list>
    <city-alph :cities="cities" @change="handleAlphClick"></city-alph>
  </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlph from './components/Alph'
export default {
  data () {
    return {
      hotCities: [],
      cities: {},
      letter: ''
    }
  },
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlph
  },
  mounted () {
    this.getCityData()
  },
  activated () {
  },
  methods: {
    getCityData () {
      axios
        .get('/api/city.json')
        .then(response => {
          const data = response.data
          if (data.ret && data.data) {
            const ret = data.data
            this.hotCities = ret.hotCities
            this.cities = ret.cities
          }
        })
        .catch(error => console.log(error))
    },
    handleAlphClick (letter) {
      this.letter = letter
    }
  }
}
</script>

<style scoped lang="stylus"></style>
