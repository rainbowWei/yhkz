import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    // redirect: '/home',
    component: () => import('../views/Home.vue')

  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/map',
    name: 'map',
    component: () => import('../views/Map.vue')
  },
  {
    path: '/device',
    name: 'device',
    component: () => import('../views/device/index.vue'),
    children: [
      {
        path: '/details',
        name: 'details',
        component: () => import('@/views/device/details/index.vue')
      }
    ]
  },
  {
    path: '/census',
    name: 'census',
    component: () => import('../views/Census.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
