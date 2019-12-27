
const data = [
  {
    name: 'huolu',
    zhName: '燃气锅炉燃烧优化控制系统',
    id: '1',
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
    id: '2',
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
    id: '3',
    childNodeLen: 30,
    childNode: [
      {
        name: 'ssss',
        zhName: '东风路撒',
        id: 'hl2019113000301'
      }
    ]
  },
  {
    name: 'huolu',
    zhName: '链条炉燃烧优化控制系统',
    id: '4',
    childNodeLen: 8,
    childNode: [
      {
        name: 'ssss',
        zhName: '东风路撒',
        id: 'hl2019113000301'
      }
    ]
  },
  {
    name: 'huolu',
    zhName: '加热炉燃烧优化控制系统',
    id: '5',
    childNodeLen: 12,
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
