<template>
  <div>
    <banner :detailData="detailData"></banner>
    <detail-header></detail-header>
    <div class="blank"></div>
  </div>
</template>

<script>
import Banner from './components/Banner'
import DetailHeader from './components/Header'
import axios from 'axios'
export default {
  data () {
    return {
      detailData: {}
    }
  },
  components: {
    Banner,
    DetailHeader
  },
  mounted () {
    this.getDetailData()
  },
  methods: {
    getDetailData () {
      axios
        .get('/api/detail.json', {
          params: {
            id: this.$route.params.id
          }

        })
        .then(response => {
          const data = response.data
          if (data.ret && data.data) {
            this.detailData = data.data
            console.log(this.detailData)
          }
        })
        .catch(error => console.log(error))
    }
  }
}
</script>

<style scoped lang="stylus">
.blank
  height: 50rem
</style>
