import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/home/home'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    // name: 'Home',
    component: Home
  }
  // ,
  // {
  //   path: '/list',
  //   // name: 'list',
  //   component: () => import(/* webpackChunkName: "about" */ '../pages/list/list')
  // }
]

const router = new VueRouter({
  routes
})

export default router
