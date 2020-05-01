import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex) //vue里使用插件需要use

export default new Vuex.Store({
    state : {
        cities : '北京'
      },
      mutations : {
        increment (states, str){
          states.cities = str
        }
      }
})