import Vue from 'vue'  
import App from './App.vue'
import router from './router'
// import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'
import 'swiper/css/swiper.css'
import '../vue.config'

Vue.config.productionTip = true;    //对于开发版本，会默认向控制台打印：设置为false就不会提示了
// fastClick.attach(document.body)

Vue.use(VueAwesomeSwiper)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')