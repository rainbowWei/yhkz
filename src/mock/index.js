
const data = [
  {
    name: 'huolu',
    zhName: '燃气锅炉燃烧优化控制系统',
    id: 'hl20191130001',
    childNodeLen: 30,
    childNode: [
      {
        name: 'ssss',
        zhName: '东风路撒',
        id: 'hl2019113000101'
      }
    ]
  },
  {
    name: 'huolu',
    zhName: 'CFB燃烧优化控制系统',
    id: 'hl20191130002',
    childNodeLen: 30,
    childNode: [
      {
        name: 'ssss',
        zhName: '东风路撒',
        id: 'hl2019113000201'
      }
    ]
  },
  {
    name: 'huolu',
    zhName: '高炉热风炉燃烧优化控制系统',
    id: 'hl20191130003',
    childNodeLen: 30,
    childNode: [
      {
        name: 'ssss',
        zhName: '东风路撒',
        id: 'hl2019113000301'
      }
    ]
  }
]

export const getList = (params = {}) => {
  return Promise.resolve({
    data
  })
}
