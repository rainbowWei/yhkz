import axios from '@/plugins/axios'

export const getNewsList = (params = {}) => axios({
  url: 'https://bizapi.zhuanzhuan.com/biz/recharge/getGoods?type=1',
  method: 'get',
  params
})
