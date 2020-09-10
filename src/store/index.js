import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let defaultCity = '北京'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) { }

export default new Vuex.Store({
  state: {
    city: defaultCity
  },
  mutations: {
    changeCity (state, name) {
      state.city = name
      try {
        localStorage.setItem('city', name)
      } catch (e) { }
    }
  },
  actions: {
  },
  modules: {
  }
})
