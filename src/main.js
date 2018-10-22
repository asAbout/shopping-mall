// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyLoad from 'vue-lazyload'
import Vuex from 'vuex'
import infiniteScroll from 'vue-infinite-scroll'
import {currency} from './util/util'

Vue.use(Vuex)
Vue.use(infiniteScroll)
Vue.use(VueLazyLoad, {
  loading: '/static/loading-svg/loading-bars.svg'
})
Vue.config.productionTip = false
Vue.filter("currency",currency)

let store = new Vuex.Store({
  state: {
    nickname: '',
    cartCount: 0
  },
  mutations: {
    updateuserInfo (state, nickname) {
      return state.nickname = nickname
    },
    updateCartCount (state, num) {
      return state.cartCount += num
    },
    initCartCount (state, cartCount) {
      return state.cartCount = cartCount
    }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
