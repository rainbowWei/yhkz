<template>
  <div class="echart-map" id="s2">dsdsdsds</div>
</template>

<script>
import Vue from 'vue'
import { smap } from '@/plugins/echarts.js'
import China from './c.json'

Vue.use(smap)

export default {
  name: 'smap',
  data() {
    return {
      a: 123
    }
  },
  mounted() {
    // this.randomValue()
    const options = {
      title: {
        text: '和隆优化业绩分布图',
        sublink:
          'http://zh.wikipedia.org/wiki/%E9%A6%99%E6%B8%AF%E8%A1%8C%E6%94%BF%E5%8D%80%E5%8A%83#cite_note-12'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{b}<br/>{c} (p / km2)'
      },
      toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
          dataView: { readOnly: false },
          restore: {},
          saveAsImage: {}
        }
      },
      visualMap: {
        min: 800,
        max: 50000,
        text: ['High', 'Low'],
        realtime: false,
        calculable: true,
        inRange: {
          color: ['lightskyblue', 'yellow', 'orangered']
        }
      },
      series: [
        {
          name: '业绩分布图',
          type: 'map',
          mapType: 'HKJ', // 自定义扩展图表类型
          itemStyle: {
            normal: { label: { show: true } },
            emphasis: { label: { show: true } }
          },
          data: [
            { name: '南海诸岛', value: 0 },
            { name: '北京', value: 5881.85 },
            { name: '天津', value: 5881.85 },
            { name: '上海', value: 5881.85 },
            { name: '重庆', value: 5881.85 },
            { name: '河北', value: 5881.85 },
            { name: '河南', value: 5881.85 },
            { name: '云南', value: 5881.85 },
            { name: '辽宁', value: 5881.85 },
            { name: '黑龙江', value: 5881.85 },
            { name: '湖南', value: 5881.85 },
            { name: '安徽', value: 5881.85 },
            { name: '山东', value: 5881.85 },
            { name: '新疆', value: 5881.85 },
            { name: '江苏', value: 5881.85 },
            { name: '浙江', value: 5881.85 },
            { name: '江西', value: 5881.85 },
            { name: '湖北', value: 5881.85 },
            { name: '广西', value: 5881.85 },
            { name: '甘肃', value: 5881.85 },
            { name: '山西', value: 5881.85 },
            { name: '内蒙古', value: 5881.85 },
            { name: '陕西', value: 5881.85 },
            { name: '吉林', value: 5881.85 },
            { name: '福建', value: 5881.85 },
            { name: '贵州', value: 5881.85 },
            { name: '广东', value: 5881.85 },
            { name: '青海', value: 5881.85 },
            { name: '西藏', value: 5881.85 },
            { name: '四川', value: 5881.85 },
            { name: '宁夏', value: 5881.85 },
            { name: '海南', value: 5881.85 },
            { name: '台湾', value: 5881.85 },
            { name: '香港', value: 5881.85 },
            { name: '澳门', value: 5881.85 }
          ]
          // 自定义名称映射
          // nameMap: {
          //   'Central and Western': '中西区',
          //   Eastern: '东区',
          //   Islands: '离岛',
          //   'Kowloon City': '九龙城',
          //   'Kwai Tsing': '葵青',
          //   'Kwun Tong': '观塘',
          //   North: '北区',
          //   'Sai Kung': '西贡',
          //   'Sha Tin': '沙田',
          //   'Sham Shui Po': '深水埗',
          //   Southern: '南区',
          //   'Tai Po': '大埔',
          //   'Tsuen Wan': '荃湾',
          //   'Tuen Mun': '屯门',
          //   'Wan Chai': '湾仔',
          //   'Wong Tai Sin': '黄大仙',
          //   'Yau Tsim Mong': '油尖旺',
          //   'Yuen Long': '元朗'
          // }
        }
      ]
    }
    const echartMap = this.$smap.smap('s2', China, options)
    echartMap.on('click', function(p) {
      console.log(
        p,
        '根据p返回的数据，判断点击的是哪个省份，拿到身份id，重新请求地图数据和options数据'
      )
    })
  }
  // methods: {
  //   randomValue() {
  //     return Math.round(Math.random() * 1000)
  //   }
  // }
}
</script>

<style lang="scss" scoped>
.echart-map {
  width: 100%;
  height: 800px;
}
</style>
