import Vue from 'vue'
import VueRouter from 'vue-router'

import { authLevel } from '@/config/enum';
import verifyToken from '@/tools/verifyToken';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/home'),
    beforeEnter: verifyToken,
    meta: { authLevel: authLevel.USER }
  },
  {
    path: '/sign',
    name: 'sign',
    component: () => import('@/pages/sign'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
