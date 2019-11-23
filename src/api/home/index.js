import axios from '@/plugins/axios'

export const getNewsList = (params = {}) => axios({
  url: '/article/getarticlecate',
  method: 'get',
  params
})
