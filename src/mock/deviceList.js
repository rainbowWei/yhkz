
const data = [
  {
    zhName: '南钢2号燃气炉燃烧优化控制系统',
    id: 'hl20191130001',
    category_id: '1',
    status: '通讯正常'
  },
  {
    zhName: '安钢1号燃气炉燃烧优化控制系统',
    id: 'hl20191130002',
    category_id: '1',
    status: '通讯正常'
  },
  {
    zhName: '福建三钢1号燃气炉燃烧优化控制系统',
    id: 'hl20191130003',
    category_id: '1',
    status: '通讯中断'
  },
  {
    zhName: '东海燃气炉燃烧优化控制系统',
    id: 'hl20191130004',
    category_id: '1',
    status: '通讯正常'
  },
  {
    zhName: '南钢2号燃气炉燃烧优化控制系统',
    id: 'hl20191130005',
    category_id: '1',
    status: '通讯正常'
  },
  {
    zhName: '安钢1号燃气炉燃烧优化控制系统',
    id: 'hl20191130006',
    category_id: '1',
    status: '通讯正常'
  },
  {
    zhName: '福建三钢1号燃气炉燃烧优化控制系统',
    id: 'hl20191130007',
    category_id: '1',
    status: '通讯中断'
  },
  {
    zhName: '东海燃气炉燃烧优化控制系统',
    id: 'hl20191130008',
    category_id: '1',
    status: '通讯正常'
  },
  {
    zhName: '四川惠美1#CFB燃烧优化控制系统',
    id: 'hl20191130009',
    category_id: '2',
    status: '通讯正常'
  },
  {
    zhName: '万海能源2#燃烧优化控制系统',
    id: 'hl201911300010',
    category_id: '2',
    status: '通讯正常'
  },
  {
    zhName: '奥喜埃化工2#CFB燃烧优化控制系统',
    id: 'hl201911300011',
    category_id: '2',
    status: '通讯中断'
  },
  {
    zhName: '复晟铝业2#CFB燃烧优化控制系统',
    id: 'hl201911300012',
    category_id: '2',
    status: '通讯正常'
  },
  {
    zhName: '万海能源1#燃烧优化控制系统',
    id: 'hl201911300013',
    category_id: '2',
    status: '通讯正常'
  },
  {
    zhName: '敬业13#热风炉',
    id: 'hl201911300014',
    category_id: '3',
    status: '通讯正常'
  },
  {
    zhName: '东华热风炉1#',
    id: 'hl201911300015',
    category_id: '3',
    status: '通讯正常'
  },
  {
    zhName: '黎城太行热风炉',
    id: 'hl201911300016',
    category_id: '3',
    status: '通讯中断'
  },
  {
    zhName: '张店热风炉',
    id: 'hl201911300017',
    category_id: '3',
    status: '通讯正常'
  },
  {
    zhName: '兴鑫钢铁',
    id: 'hl201911300018',
    category_id: '3',
    status: '通讯正常'
  },
  {
    zhName: '临盘链条炉1#',
    id: 'hl201911300019',
    category_id: '4',
    status: '通讯正常'
  },
  {
    zhName: '天铁2#加热炉',
    id: 'hl201911300020',
    category_id: '5',
    status: '通讯中断'
  },
  {
    zhName: '敬业3#加热炉',
    id: 'hl201911300021',
    category_id: '5',
    status: '通讯正常'
  },
  {
    zhName: '敬业4#加热炉',
    id: 'hl201911300022',
    category_id: '5',
    status: '通讯正常'
  },
  {
    zhName: '敬业5#加热炉',
    id: 'hl201911300023',
    category_id: '5',
    status: '通讯正常'
  }
]

export const getList = (params = {}) => {
  return Promise.resolve({
    data
  })
}
