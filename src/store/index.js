import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex) //vue里使用插件需要use

export default new Vuex.Store({
    state : {
        cities : localStorage.getItem('cities') || '北京'
      },
      mutations : {
        increment (states, str){
          localStorage.setItem('cities', str)
          states.cities = str
        }
      }
})