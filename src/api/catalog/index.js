import axios from '@/plugins/axios'

export const getCatalogList = (params = {}) => axios({
  url: 'https://bizapi.zhuanzhuan.com/biz/recharge/getGoods?type=2',
  method: 'get',
  params
})
