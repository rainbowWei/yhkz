import axios from '@/plugins/axios'

export const getNewsList = (params = {}) => axios({
  url: '/article/getarticlecate?_t=2',
  // url: 'http://yhkz.rainbow.site.com/a/example/mock',
  method: 'get',
  params
})
export const getNewsList2 = (params = {}) => axios({
  url: '/article/getarticlecate?_t=3',
  // url: 'http://yhkz.rainbow.site.com/a/example/mock2',
  method: 'get',
  params
})
