import Vue from 'vue'
import Vuex from 'vuex'
import modules from './module'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex) //vue里使用插件需要use，将状态从跟组件注入到每一个子组件中需要调用 这个


export default new Vuex.Store({
	state,
	actions,
	mutations,
	modules,
	getters
})