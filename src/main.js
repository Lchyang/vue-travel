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
import './assets/styles/iconfont.css'

fastClick.attach(document.body)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
