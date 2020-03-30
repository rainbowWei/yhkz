<template>
  <div v-if="isNotNone">
    <x-modal
      @onTriggerShow="triggerShow"
      v-for="x in data"
      :key="x.uuid"
      :instance="x"
      :maxZIndex="maxZIndex"
      @onAddZIndex="onAddZIndex"
      v-show="x.show"
    >
      <div slot="content">
        <div class="rbox">
          <div class="title">
            <span>1#拱顶温度调节空燃比先控</span>
          </div>
          <div class="left fl">
            <ul class="leftlist">
              <li>
                <span>SP</span>
                <input type="text" readonly value="0000.2" />
              </li>
              <li>
                <span>PV</span>
                <input type="text" readonly value="0000.2" />
              </li>
              <li>
                <span>AV</span>
                <input type="text" readonly value="0000.2" />
              </li>
              <li>
                <span>TL1</span>
                <input type="text" value="0000.2" />
              </li>
              <li>
                <span>TL2</span>
                <input type="text" value="0000.2" />
              </li>
              <li>
                <span>TL3</span>
                <input type="text" value="0000.2" />
              </li>
              <li>
                <span>TL4</span>
                <input type="text" value="0000.2" />
              </li>
              <li>
                <span>E1</span>
                <input type="text" value="0000.2" />
              </li>
              <li>
                <span>E2</span>
                <input type="text" value="0000.2" />
              </li>
              <li>
                <span>E3</span>
                <input type="text" value="0000.2" />
              </li>
              <li>
                <span>E4</span>
                <input type="text" value="0000.2" />
              </li>
              <li>
                <span>A01</span>
                <input type="text" value="0000.2" />
              </li>
              <li>
                <span>A02</span>
                <input type="text" value="0000.2" />
              </li>
              <li>
                <span>A03</span>
                <input type="text" value="0000.2" />
              </li>
              <li>
                <span>A04</span>
                <input type="text" value="0000.2" />
              </li>
              <li>
                <span>TL</span>
                <input type="text" value="0000.2" />
              </li>
              <li>
                <span>MD</span>
                <input type="text" value="0000.2" />
              </li>
              <li>
                <span>MU</span>
                <input type="text" value="0000.2" />
              </li>
              <li>
                <span>ZFK</span>
                <input type="text" value="0000.2" />
              </li>
            </ul>
            <ul class="bottombtn clearfix">
              <li>自动</li>
              <li class="active">正作用</li>
            </ul>
          </div>
          <div class="right fl">
            <div
              v-drive="driveLineChart"
              :ref="'chart'+x.uuid"
              class="chart"
              style="width:890px;height:400px;"
            ></div>
          </div>
        </div>
      </div>
    </x-modal>
  </div>
  <div v-else></div>
</template>
<script>
import XModal from '@/components/XModal.vue'
// import conf from '@/plugins/xconf.js'
export default {
  name: 'R',
  components: {
    XModal
  },
  props: ['title', 'data', 'maxZIndex'],
  data() {
    return {
      a: 0,
      infoList: ''
    }
  },
  computed: {
    xData: {
      get() {
        return this.data
      },
      set() {}
    },
    isNotNone() {
      return Object.keys(this.data).length > 0
    }
  },
  methods: {
    // 获取折线图dom
    getChartContainDom(uuid) {
      console.log(this.$refs['chart' + uuid][0], '000000', this.$refs)
      return this.$refs['chart' + uuid][0]
    },
    // 添加曲线
    onAddLine(type, uuid) {
      const chartConatinDom = this.getChartContainDom(uuid)
      const data = {
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
            '14:00',
            '15:00'
          ]
        }
      }
      this.driveLineChart(chartConatinDom, data)
    },
    // 画弹窗中的折线图
    driveLineChart(el, data = {}) {
      if (el) {
        this.$chart.line1(el, data)
      }
    },
    // 关闭弹窗
    triggerShow(uuid, val) {
      const temp = {}
      Object.keys(this.data).forEach(d => {
        if (uuid !== d) {
          temp[d] = Object.assign({}, this.data[d])
        }
      })
      this.$emit('onClose', temp)
    },
    onAddZIndex(zIndex, instance) {
      this.$emit('onAddZIndex', zIndex, instance)
    }
  }
}
</script>
<style lang="scss">
.el-dialog__header,
.el-dialog__body {
  padding-top: 5px;
  padding-bottom: 0;
}
</style>
<style lang="scss" scoped>
.rbox {
  min-width: 1080px;
  padding: 0 10px;
  box-sizing: border-box;
}
.left {
  width: 120px;
  font-size: 12px;
  .leftlist {
    width: 100%;
    li {
      width: 100%;
      height: 18px;
      line-height: 18px;
      margin-bottom: 2px;
      text-align: center;
    }
    span {
      width: 60px;
      height: 100%;
      display: inline-block;
    }
    input {
      width: 60px;
      height: 100%;
      background: #d1dee2;
      text-align: center;
      cursor: pointer;
    }
  }
}
.bottombtn {
  // width: 350px;
  font-size: 12px;
  padding-left: 15px;
  box-sizing: border-box;
  li {
    float: left;
    padding: 0px 2px;
    margin-bottom: 2px;
    margin-left: 2px;
    border: 1px solid #cecece;
    box-sizing: border-box;
    border-radius: 5px;
    text-align: center;
    cursor: pointer;
    &:first-child {
      margin-left: 0;
    }
  }
  .active {
    background: green;
    color: #fff;
  }
}
.right {
  width: 790px;
  .bigbox {
    width: 100%;
    padding-left: 25px;
    box-sizing: border-box;
    li {
      height: 20px;
      line-height: 20px;
      float: left;
      span {
        width: 35px;
        font-size: 12px;
        text-align: center;
        float: left;
      }
      div {
        float: left;
        input {
          width: 60px;
          height: 20px;
          text-align: center;
          background: #d1dee2;
          cursor: pointer;
          float: left;
          display: block;
          margin-right: 4px;
          border: 1px solid #fff;
          box-sizing: border-box;
          &:last-child {
            margin-right: 0;
          }
        }
      }
    }
  }

  .chart {
    width: 100%;
    height: 400px;
  }
}
</style>
