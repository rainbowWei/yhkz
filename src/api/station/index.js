import axios from '@/plugins/axios'

export const getStationList = (params = {}) => axios({
  url: 'http://ts-uf65jy88m6m6g6939.hitsdb.tsdb.aliyuncs.com:8242/api/query',
  method: 'post',
  params
})
