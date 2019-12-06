import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue')

  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About/index.vue'),
    children: [
      {
        path: '/about/a/:id',
        name: 'aa',
        component: () => import('@/views/About/details/a.vue')
      }
    ]
  },
  // {
  //   path: '/map',
  //   name: 'map',
  //   component: () => import('@/views/Map.vue')
  // },
  {
    path: '/device',
    name: 'device',
    component: () => import('@/views/device/index.vue')
  },
  {
    path: '/device/details',
    name: 'deviceDetail',
    component: () => import('@/views/device/details/index.vue')
  },
  {
    path: '/census',
    name: 'census',
    component: () => import('@/views/Census.vue')
  },
  {
    path: '/map',
    name: 'map',
    component: () => import('@/views/Map/Index.vue')
  },
  {
    path: '/mapc',
    name: 'mapc',
    component: () => import('@/views/MapChain/Index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  console.log(to, from, '____总的路由防卫')
  next()
})

export default router
