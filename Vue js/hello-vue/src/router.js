import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/home/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',  
    component: () => import('./views/About.vue')
  },
  {
    path: '/base',
    name: 'Base',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ './views/base/Base.vue')
  },
  {
    path: "*",
    redirect: '/base',
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
