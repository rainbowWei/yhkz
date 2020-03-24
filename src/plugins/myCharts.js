/**
 * 各种画echarts图表的方法都封装在这里
 * 注意：这里echarts没有采用按需引入的方式，只是为了方便学习
 */

import echarts from 'echarts'
const install = function(Vue) {
  Object.defineProperties(Vue.prototype, {
    $chart: {
      get() {
        return {
          line1: function(id, options = {}) {
            this.chart = echarts.init(id)
            this.chart.clear()
            const optionData = {
              color: ['#ff8a65',
                '#ffb952', '#fff176', '#81c784',
                '#80deea',
                '#90caf9', '#b39ddb', '#f48fb1', '#ef9a9a', '#30e0e0'],
              tooltip: {},
              legend: {
                top: '10%'
              },
              grid: {
                x: '12%', y: '25%'
              },
              lineStyle: {
                width: 1
              },
              toolbox: {
                right: '3%',
                top: '10%',
                feature: {
                  saveAsImage: {}
                }
              },
              dataZoom: [{
                startValue: '13:00'
              }, {
                type: 'inside'
              }],
              xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
              },
              yAxis: {
                type: 'value'
              },
              // series: [{
              //   data: [820, 932, 901, 934, 1290, 1330, 1320],
              //   type: 'line',
              //   smooth: true
              // }]
              series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320, 820, 932, 901, 934, 1290, 1330],
                type: 'line',
                name: '设定值',
                itemStyle: {
                  normal: {
                    lineStyle: {
                      width: 1// 0.1的线条是非常细的了
                    }
                  }
                }
              },
              {
                data: ['60%', '50.8%', '55.9%', '44.9%', '59.8%', '58%', '54.9%', '70.9%', '56.9%', '55%', '60%', '60%', '60%'],
                type: 'line',
                name: '测量值',
                itemStyle: {
                  normal: {
                    lineStyle: {
                      width: 1// 0.1的线条是非常细的了
                    }
                  }
                }
              },
              {
                data: [700, 500, 690, 345, 890, 987, 853, 234, 777, 343, 700, 500, 690],
                type: 'line',
                name: '总输出',
                itemStyle: {
                  normal: {
                    lineStyle: {
                      width: 1// 0.1的线条是非常细的了
                    }
                  }
                }
              },
              {
                data: [500, 700, 490, 845, 290, 587, 353, 634, 477, 543, 900, 300, 890],
                type: 'line',
                name: 'PID',
                itemStyle: {
                  normal: {
                    lineStyle: {
                      width: 1// 0.1的线条是非常细的了
                    }
                  }
                }
              },
              {
                data: [400, 520, 890, 345, 690, 787, 953, 434, 377, 253, 670, 245, 670],
                type: 'line',
                name: '观测器',
                itemStyle: {
                  normal: {
                    lineStyle: {
                      width: 1// 0.1的线条是非常细的了
                    }
                  }
                }
              },
              {
                data: [270, 500, 654, 555, 345, 965, 333, 231, 390, 453, 544, 600, 390],
                type: 'line',
                name: '重叠',
                itemStyle: {
                  normal: {
                    lineStyle: {
                      width: 1// 0.1的线条是非常细的了
                    }
                  }
                }
              },
              {
                data: [240, 670, 854, 324, 567, 435, 379, 568, 754, 325, 456, 715, 678],
                type: 'line',
                name: 'RSF',
                itemStyle: {
                  normal: {
                    lineStyle: {
                      width: 1// 0.1的线条是非常细的了
                    }
                  }
                }
              },
              {
                data: [270, 500, 654, 555, 345, 965, 333, 231, 390, 453, 544, 600, 390],
                type: 'line',
                name: '观测器动态',
                itemStyle: {
                  normal: {
                    lineStyle: {
                      width: 1// 0.1的线条是非常细的了
                    }
                  }
                }
              },
              {
                data: [240, 670, 854, 324, 567, 435, 379, 568, 754, 325, 456, 715, 678],
                type: 'line',
                name: '观测器静态',
                itemStyle: {
                  normal: {
                    lineStyle: {
                      width: 1// 0.1的线条是非常细的了
                    }
                  }
                }
              }
              ]
            }

            this.chart.setOption({ ...optionData, ...options })
          }
        }
      }
    }
  })
}

export default {
  install
}
