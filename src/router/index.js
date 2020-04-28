import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/home/home'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    // name: 'Home',
    component: Home
  },
  {
    path: '/city',
    name: 'City',
    component: () => import(/* webpackChunkName: "about" */ '../pages/city/City')
  }
]

const router = new VueRouter({
  routes
})

export default router
