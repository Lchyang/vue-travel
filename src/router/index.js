import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home/Home'
import City from '@/views/city/City'
import Detail from '@/views/details/Detail'
import Gallary from 'common/gallary/Gallary'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/city',
    name: 'City',
    component: City

  },
  {
    path: '/detail',
    name: 'Detail',
    component: Detail

  },
  {
    path: '/gallary',
    name: 'Gallary',
    component: Gallary
  }
]

const router = new VueRouter({
  routes
})

export default router
