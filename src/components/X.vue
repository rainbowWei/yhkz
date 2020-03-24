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
        <div class="xbox">
          <div class="title">
            <span>1#拱顶温度调节空燃比先控</span>
          </div>
          <div class="left fl">
            <div class="lefttop">
              <ul class="SP clearfix">
                <li>SP</li>
                <li class="input color">0.00</li>
                <li class="btn">自动</li>
              </ul>
              <ul class="PV clearfix">
                <li>PV</li>
                <li class="input color2">0.00</li>
                <li class="btn active">手动</li>
              </ul>
              <ul class="AV clearfix">
                <li>AV</li>
                <li class="input color3">0.00</li>
                <li class="btn">跟踪</li>
              </ul>
              <ul class="button clearfix">
                <li>-5</li>
                <li>-1</li>
                <li>+1</li>
                <li>+5</li>
                <li class="active">正作用</li>
              </ul>
            </div>
            <ul class="PVMD clearfix">
              <li>
                <span>PVMD</span>
                <div>
                  <input type="text" value="0.00" />
                </div>
              </li>
              <li>
                <span>PVMU</span>
                <div>
                  <input type="text" value="0.00" />
                </div>
              </li>
              <li>
                <span>MD</span>
                <div>
                  <input type="text" value="0.00" />
                </div>
              </li>
              <li>
                <span>MU</span>
                <div>
                  <input type="text" value="0.00" />
                </div>
              </li>
              <li>
                <span>OUTB</span>
                <div>
                  <input type="text" value="0.00" />
                </div>
              </li>
              <li>
                <span>OUTT</span>
                <div>
                  <input type="text" value="0.00" />
                </div>
              </li>
              <li>
                <span>ORL</span>
                <div>
                  <input type="text" value="0.00" />
                </div>
              </li>
              <li>
                <span>RTH</span>
                <div>
                  <input type="text" value="0.00" />
                </div>
              </li>
            </ul>
            <ul class="PVMD clearfix">
              <li>
                <span>AV_P</span>
                <div class="color4">0.00</div>
              </li>
              <li>
                <span>AV_R</span>
                <div class="color5">0.00</div>
              </li>
              <li>
                <span>AV_GC</span>
                <div class="color6">0.00</div>
              </li>
              <li>
                <span>AV_J</span>
                <div class="color7">0.00</div>
              </li>
              <li>
                <span>AV_C</span>
                <div class="color8">0.00</div>
              </li>
              <li>
                <span>AV_D</span>
                <div class="color9">0.00</div>
              </li>
            </ul>
            <ul class="PVMD clearfix">
              <li>
                <span>TC</span>
                <div>
                  <input type="text" value="0.00" />
                </div>
              </li>
              <li>
                <span>GC1</span>
                <div>
                  <input type="text" value="0.00" />
                </div>
              </li>
              <li>
                <span>TZ</span>
                <div>
                  <input type="text" value="0.00" />
                </div>
              </li>
              <li>
                <span>GC2</span>
                <div>
                  <input type="text" value="0.00" />
                </div>
              </li>
              <li>
                <span>OUTL</span>
                <div>
                  <input type="text" value="0.00" />
                </div>
              </li>
              <li>
                <span>OUTH</span>
                <div>
                  <input type="text" value="0.00" />
                </div>
              </li>
            </ul>
            <ul class="PVMD clearfix">
              <li>
                <span>TC</span>
                <div>
                  <input type="text" value="0.00" />
                </div>
              </li>
              <li>
                <span>CDGD</span>
                <div>
                  <input type="text" value="0.00" />
                </div>
              </li>
              <li>
                <span>TZ</span>
                <div>
                  <input type="text" value="0.00" />
                </div>
              </li>
              <li>
                <span>CDKJ</span>
                <div>
                  <input type="text" value="0.00" />
                </div>
              </li>
              <li>
                <span>CDK1</span>
                <div>
                  <input type="text" value="0.00" />
                </div>
              </li>
              <li>
                <span>CDKD</span>
                <div>
                  <input type="text" value="0.00" />
                </div>
              </li>
              <li>
                <span>CDK2</span>
                <div>
                  <input type="text" value="0.00" />
                </div>
              </li>
              <li>
                <span>CDBH</span>
                <div>
                  <input type="text" value="0.00" />
                </div>
              </li>
              <li>
                <span>CDL</span>
                <div>
                  <input type="text" value="0.00" />
                </div>
              </li>
              <li>
                <span>CDH</span>
                <div>
                  <input type="text" value="0.00" />
                </div>
              </li>
            </ul>
            <ul class="PVMD clearfix">
              <li>
                <span>XGL1H</span>
                <div>
                  <input type="text" value="0.00" />
                </div>
              </li>
              <li>
                <span>XGL1L</span>
                <div>
                  <input type="text" value="0.00" />
                </div>
              </li>
              <li>
                <span>XGL2H</span>
                <div>
                  <input type="text" value="0.00" />
                </div>
              </li>
              <li>
                <span>XGL2L</span>
                <div>
                  <input type="text" value="0.00" />
                </div>
              </li>
              <li>
                <span>PUDI</span>
                <div>
                  <input type="text" value="0.00" />
                </div>
              </li>
              <li>
                <span>UVDI</span>
                <div>
                  <input type="text" value="0.00" />
                </div>
              </li>
              <li>
                <span>EKDB</span>
                <div>
                  <input type="text" value="0.00" />
                </div>
              </li>
              <li>
                <button>参数复位</button>
                <button>参数提取</button>
              </li>
            </ul>
          </div>
          <ul class="bottombtn clearfix">
            <li>并联</li>
            <li class="active">RSF投用</li>
            <li>GC投用</li>
            <li>CD投用</li>
            <li>XZ投用</li>
            <li>自整定</li>
            <li>自适应</li>
          </ul>
          <div class="right fl">
            <ul class="bigbox clearfix">
              <li>
                <span>TL1</span>
                <div>
                  <input type="text" value="0.00" title="软伺服作用时间下，下位已经全部将4作用时间参数统一，只需修改TL1" />
                  <input type="text" value="0.00" />
                  <input type="text" value="0.00" />
                  <input type="text" value="0.00" />
                </div>
              </li>
              <li>
                <span>TL</span>
                <div>
                  <input type="text" value="0.00" />
                </div>
              </li>
              <li>
                <span>PO</span>
                <div>
                  <input type="text" value="0.00" />
                </div>
              </li>
              <li>
                <span>KP</span>
                <div>
                  <input type="text" value="0.00" />
                </div>
              </li>
              <li>
                <span>P</span>
                <div>
                  <input type="text" value="0.00" />
                </div>
              </li>
              <li>
                <span>SVH</span>
                <div>
                  <input type="text" value="0.00" />
                </div>
              </li>
              <li>
                <span>E1</span>
                <div>
                  <input type="text" value="0.00" title="软伺服偏差区间1" />
                  <input type="text" value="0.00" title="软伺服偏差区间2" />
                  <input type="text" value="0.00" title="软伺服偏差区间3" />
                  <input type="text" value="0.00" title="软伺服偏差区间4" />
                </div>
              </li>
              <li>
                <span>BLK</span>
                <div>
                  <input type="text" value="0.00" />
                </div>
              </li>
              <li>
                <span>TIO</span>
                <div>
                  <input type="text" value="0.00" />
                </div>
              </li>
              <li>
                <span>KI</span>
                <div>
                  <input type="text" value="0.00" />
                </div>
              </li>
              <li>
                <span>TI</span>
                <div>
                  <input type="text" value="0.00" />
                </div>
              </li>
              <li>
                <span>SPRH</span>
                <div>
                  <input type="text" value="0.00" />
                </div>
              </li>
              <li>
                <span>AO1</span>
                <div>
                  <input type="text" value="0.00" title="软伺服偏差区间1对应输出幅度1" />
                  <input type="text" value="0.00" title="软伺服偏差区间2对应输出幅度2" />
                  <input type="text" value="0.00" title="软伺服偏差区间3对应输出幅度3" />
                  <input type="text" value="0.00" title="软伺服偏差区间4对应输出幅度4" />
                </div>
              </li>
              <li>
                <span>TD</span>
                <div>
                  <input type="text" value="0.00" />
                </div>
              </li>
              <li>
                <span>KD</span>
                <div>
                  <input type="text" value="0.00" />
                </div>
              </li>
              <li>
                <span>DI</span>
                <div>
                  <input type="text" value="0.00" />
                </div>
              </li>
            </ul>
            <div ref="chart1" class="chart" style="width:790px;height:400px;"></div>
          </div>
        </div>
      </div>
    </x-modal>
  </div>
  <div v-else></div>
</template>
<script>
import XModal from '@/components/XModal.vue'
export default {
  name: 'X',
  components: {
    XModal
  },
  props: ['title', 'data', 'maxZIndex'],
  data() {
    return {
      showModal: {
        show: false, // 弹窗是否显示
        uuid: '' // 弹窗id
      }
    }
  },
  beforeUpdate() {
    console.log(this.data, 'jjjjjjjjjjj update before')
    console.log(this.$refs.chart1, this.uuid, '++++++')
  },
  mounted() {
    console.log(this.$refs.chart1, '0000')
    console.log(this.$refs.chart1, this.uuid, '++++++')
    if (this.$refs.chart1) {
      this.$chart.line1(this.$refs.chart1, this.uuid, {
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
        }
      })
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
.xbox {
  min-width: 1080px;
  padding: 0 20px;
  box-sizing: border-box;
}
.title {
  height: 24px;
  line-height: 24px;
  font-size: 16px;
  text-align: center;
  font-weight: bold;
  color: #5290b7;
  padding: 5px 0;
  span {
    display: inline-block;
    padding: 0 20px;
    border: 1px solid #5290b7;
    border-radius: 4px;
  }
}
.left {
  width: 250px;
  font-size: 12px;
  .lefttop {
    ul {
      height: 20px;
      line-height: 20px;
      margin-bottom: 4px;
      li {
        float: left;
      }
      .btn {
        width: 50px;
        height: 20px;
        border: 1px solid #cecece;
        box-sizing: border-box;
        border-radius: 5px;
        text-align: center;
        cursor: pointer;
      }
      .active {
        background: green;
        color: #fff;
      }
      .input {
        width: 110px;
        height: 18px;
        line-height: 18px;
        background: #d1dee2;
        margin: 0 36px;
        cursor: pointer;
        text-align: center;
        // color: #fff;
      }
      .color {
        color: #ff8a65;
      }
      .color2 {
        color: #ffb952;
      }
      .color3 {
        color: #fff176;
      }
    }
    .button {
      margin-bottom: 5px;
      li {
        margin-left: 21px;
        padding: 0px 7px;
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
  }
  .PVMD {
    padding-bottom: 1px;
    border-bottom: 1px solid #999;
    margin-top: 2px;
    &:last-child {
      border-bottom: none;
    }
    li {
      float: left;
    }
    button {
      margin: 0 4px;
    }
    span {
      width: 60px;
      font-size: 12px;
      text-align: center;
      float: left;
      line-height: 16px;
    }
    div {
      width: 64px;
      height: 16px;
      line-height: 16px;
      margin-bottom: 1px;
      background: #d1dee2;
      text-align: center;
      color: #fff;
      font-size: 12px;
      float: left;
      cursor: pointer;
      input {
        width: 100%;
        height: 100%;
        background: #d1dee2;
        cursor: pointer;
        text-align: center;
        // color: #fff;
      }
    }
    .color4 {
      color: #81c784;
    }
    .color5 {
      color: #80deea;
    }
    .color6 {
      color: #90caf9;
    }
    .color7 {
      color: #b39ddb;
    }
    .color8 {
      color: #f48fb1;
    }
    .color9 {
      color: #ef9a9a;
    }
  }
}
.bottombtn {
  width: 350px;
  position: absolute;
  left: 4px;
  bottom: 2px;
  font-size: 12px;
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
