import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import 'babel-polyfill'
import './registerServiceWorker'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import 'style/reset.css'
import 'style/border.css'
import 'assets/iconfont/iconfont.css'
import 'swiper/dist/css/swiper.css'


Vue.config.productionTip = false
fastClick.attach(document.body)

Vue.use(VueAwesomeSwiper/* ,{ default global options } */)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
