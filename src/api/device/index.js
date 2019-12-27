import axios from '@/plugins/axios'

export const getDeviceList = (params = {}) => axios({
  url: 'https://bizapi.zhuanzhuan.com/biz/recharge/getGoods?type=3',
  method: 'get',
  params
})
