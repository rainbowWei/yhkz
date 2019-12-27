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
        path: '/about/:id',
        name: 'aa',
        component: () => import('@/views/About/details/index.vue')
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
    component: () => import('@/views/Device/index.vue')
  },
  {
    path: '/device/category',
    name: 'deviceDetail',
    redirect: '/device/process',
    component: () => import('@/views/Device/category/airHeater/index.vue'),
    children: [
      {
        path: '/device/process',
        name: 'deviceProcess',
        component: () => import('@/views/Device/category/airHeater/details/process.vue')
      },
      {
        path: '/device/evaluate',
        name: 'deviceEvaluate',
        component: () => import('@/views/Device/category/airHeater/details/evaluate.vue')
      },
      {
        path: '/device/reports',
        name: 'deviceReports',
        component: () => import('@/views/Device/category/airHeater/details/reports.vue')
      },
      {
        path: '/device/trend',
        name: 'deviceTrend',
        component: () => import('@/views/Device/category/airHeater/details/trend.vue')
      }
    ]
  },
  {
    path: '/device/catalog',
    name: 'deviceCatalog',
    component: () => import('@/views/Device/category/catalog.vue')
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
