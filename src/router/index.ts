import VueRouter from 'vue-router'
import { routes } from '@/router/routes'
import config from '@/config'
import Vue from 'vue'

Vue.use(VueRouter)

const router = new VueRouter({
  base: config.BASE_ROUTE,
  mode: 'history',
  routes,
})

export default router
