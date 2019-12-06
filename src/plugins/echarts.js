import echarts from 'echarts'
// import china from '@/mock/china'

// const getGeoJson = (id) => {
//   return Promise.resolve(china)
// }

const _smap = {}
_smap.install = (Vue, options) => {
  Object.defineProperties(Vue.prototype, {
    $smap: {
      get() {
        return {
          smap: (id, geoJson, options) => {
            this.chart = echarts.init(document.getElementById(id))
            this.chart.clear()
            echarts.registerMap('HKJ', geoJson)

            this.chart.setOption(options)
            return this.chart
          },
          country(id, mapName, options) {
            // this.chart = echarts.init(document.getElementById(id))
            // this.chart.clear()
            // getGeoJson().then(res => {
            //   const coordinates = res.features[0].geometry.coordinates
            //   const newCoo = coordinates.map(coordinate => {
            //     return {
            //       type: 'Feature',
            //       geometry: // 没全国的数据，拼不成echart想要的效果了。这个数据是aliyun的数据
            //     }
            //   })
            //   console.log(res, 'yyyyyyyyyyyyyyyyyyyy')
            //   // echarts.registerMap(mapName, newCoo)
            // })
          }
        }
      }
    }
  })
}
export const smap = _smap
