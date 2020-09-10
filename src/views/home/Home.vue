<template>
  <div>
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconsList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      recommendList: [],
      weekendList: [],
      iconsList: [],
      swiperList: [],
      lastCity: ''
    }
  },
  computed: {
    ...mapState(['city'])
  },
  mounted () {
    this.lastCity = this.city
    this.getHomeData()
  },
  activated () {
    if (this.city !== this.lastCity) {
      this.getHomeData()
      this.lastCity = this.city
    }
  },
  methods: {
    getHomeData () {
      axios
        .get('/api/index.json' + '?city=' + this.city)
        .then(response => {
          const data = response.data
          if (data.ret && data.data) {
            const ret = data.data
            this.recommendList = ret.recommendList
            this.weekendList = ret.weekendList
            this.swiperList = ret.swiperList
            this.iconsList = ret.iconList
          }
        })
        .catch(error => console.log(error))
    }
  }
}
</script>
