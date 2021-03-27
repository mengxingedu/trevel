import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/home/home'
import Detail from '@/pages/detail/Detail'

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
    component: () => import(/* webpackChunkName: "about" */ '@/pages/city/City')
  },
  {
    path : '/Detail/:id',
    name : 'Detail',
    component : Detail
  }
]

const router = new VueRouter({
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

export default router
