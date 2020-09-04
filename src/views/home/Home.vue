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
      swiperList: []
    }
  },
  mounted () {
    this.getHomeData()
  },
  methods: {
    getHomeData () {
      axios
        .get('/api/index.json')
        .then(response => {
          const data = response.data
          console.log(data)
          if (data.ret && data.data) {
            const ret = data.data
            this.recommendList = ret.recommendList
            this.weekendList = ret.weekendList
            this.swiperList = ret.swiperList
            this.iconsList = ret.iconList
            console.log(this.swiperList)
          }
        })
        .catch(error => console.log(error))
    }
  }
}
</script>
