<template>
  <div>
    <banner :detailData="detailData"></banner>
  </div>
</template>

<script>
import Banner from './components/Banner'
import axios from 'axios'
export default {
  data () {
    return {
      detailData: {}
    }
  },
  components: {
    Banner
  },
  mounted () {
    this.getDetailData()
  },
  methods: {
    getDetailData () {
      axios
        .get('/api/detail.json')
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

<style scoped lang="stylus"></style>
