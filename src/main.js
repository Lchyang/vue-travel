import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import fastClick from 'fastclick'
// 多种终端页面重置效果统一
import './assets/styles/reset.css'
// 多倍屛物理边框不是1px的问题
import './assets/styles/border.css'
// 导入iconfont
import './assets/styles/iconfont.css'

// Swiper4.0 以上 小圆点解决方案
import VueAwesomeSwiper from 'vue-awesome-swiper'
// If you use Swiper 6.0.0 or higher
import 'swiper/swiper-bundle.css'
import { Swiper as SwiperClass, Pagination, Mousewheel, Autoplay } from 'swiper/swiper.esm'
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'
SwiperClass.use([Pagination, Mousewheel, Autoplay])
const { Swiper, SwiperSlide } = getAwesomeSwiper(SwiperClass)
Vue.use(VueAwesomeSwiper, Swiper, SwiperSlide)

fastClick.attach(document.body)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
