import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/123',
    name: 'home',
    component: () => import('@/pages/home')
  },
  {
    path: '*',
    // path: '/sign',
    name: 'sign',
    component: () => import('@/pages/sign')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
