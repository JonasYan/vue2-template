import Vue from 'vue'

import '@/styles/index.scss' // global css

import App from './App'
import router from './router'
import '@/router-guard' // permission control
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
