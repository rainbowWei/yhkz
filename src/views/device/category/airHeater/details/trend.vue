<template>
  <div>
    <div ref="trendchart" class="trendchart"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  mounted() {
    console.log('-------', 2222222222222222)
    if (this.$refs.trendchart) {
      this.$chart.line1(this.$refs.trendchart, {
        xAxis: {
          type: 'category',
          data: [
            '12:00',
            '12:10',
            '12:20',
            '12:30',
            '12:40',
            '12:50',
            '13:00',
            '13:10',
            '13:20',
            '13:30',
            '13:40',
            '13:50',
            '14:00'
          ]
        },
        series: [
          {
            data: [
              820,
              932,
              901,
              934,
              1290,
              1330,
              1320,
              820,
              932,
              901,
              934,
              1290,
              1330
            ],
            type: 'line',
            name: '拱顶温度',
            itemStyle: {
              normal: {
                lineStyle: {
                  width: 1 // 0.1的线条是非常细的了
                }
              }
            }
          },
          {
            data: [
              '60%',
              '50.8%',
              '55.9%',
              '44.9%',
              '59.8%',
              '58%',
              '54.9%',
              '70.9%',
              '56.9%',
              '55%',
              '60%',
              '60%',
              '60%'
            ],
            type: 'line',
            name: '废弃温度',
            itemStyle: {
              normal: {
                lineStyle: {
                  width: 1 // 0.1的线条是非常细的了
                }
              }
            }
          },
          {
            data: [
              700,
              500,
              690,
              345,
              890,
              987,
              853,
              234,
              777,
              343,
              700,
              500,
              690
            ],
            type: 'line',
            name: '蓄热能力',
            itemStyle: {
              normal: {
                lineStyle: {
                  width: 1 // 0.1的线条是非常细的了
                }
              }
            }
          },
          {
            data: [
              500,
              700,
              490,
              845,
              290,
              587,
              353,
              634,
              477,
              543,
              900,
              300,
              890
            ],
            type: 'line',
            name: '烧炉时间',
            itemStyle: {
              normal: {
                lineStyle: {
                  width: 1 // 0.1的线条是非常细的了
                }
              }
            }
          },
          {
            data: [
              400,
              520,
              890,
              345,
              690,
              787,
              953,
              434,
              377,
              253,
              670,
              245,
              670
            ],
            type: 'line',
            name: '预测烟温',
            itemStyle: {
              normal: {
                lineStyle: {
                  width: 1 // 0.1的线条是非常细的了
                }
              }
            }
          },
          {
            data: [
              270,
              500,
              654,
              555,
              345,
              965,
              333,
              231,
              390,
              453,
              544,
              600,
              390
            ],
            type: 'line',
            name: '烧炉时间',
            itemStyle: {
              normal: {
                lineStyle: {
                  width: 1 // 0.1的线条是非常细的了
                }
              }
            }
          },
          {
            data: [
              240,
              670,
              854,
              324,
              567,
              435,
              379,
              568,
              754,
              325,
              456,
              715,
              678
            ],
            type: 'line',
            name: '煤气流量',
            itemStyle: {
              normal: {
                lineStyle: {
                  width: 1 // 0.1的线条是非常细的了
                }
              }
            }
          },
          {
            data: [
              270,
              500,
              654,
              555,
              345,
              965,
              333,
              231,
              390,
              453,
              544,
              600,
              390
            ],
            type: 'line',
            name: '空气流量',
            itemStyle: {
              normal: {
                lineStyle: {
                  width: 1 // 0.1的线条是非常细的了
                }
              }
            }
          },
          {
            data: [
              240,
              670,
              854,
              324,
              567,
              435,
              379,
              568,
              754,
              325,
              456,
              715,
              678
            ],
            type: 'line',
            name: '观测器静态',
            itemStyle: {
              normal: {
                lineStyle: {
                  width: 1 // 0.1的线条是非常细的了
                }
              }
            }
          }
        ]
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.trendchart {
  width: 1200px;
  height: 600px;
  margin: 0 auto;
  padding-bottom: 80px;
}
</style>
