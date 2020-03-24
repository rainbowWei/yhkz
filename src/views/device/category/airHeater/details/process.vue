<template>
  <div class="box">
    <div class="title">高炉热风炉燃烧流程优化控制系统</div>
    <div class="process">
      <div class="left">
        <div class="pipeline">
          <div class="valve position"></div>
          <div class="l_t">
            <p>空气</p>
            <div class="heater heater_t">加热器</div>
            <div class="air_box">
              <div class="air rotate_l"></div>
              <ul class="air_btn">
                <li>A</li>
                <li>R</li>
                <li>P</li>
              </ul>
              <div class="set">50.8%</div>
              <div class="feedback">49.9%</div>
            </div>
            <div class="air_box air_box2">
              <div class="air rotate_r"></div>
              <ul class="air_btn">
                <li>A</li>
                <li>R</li>
                <li>P</li>
              </ul>
              <div class="set">50.8%</div>
              <div class="feedback">49.9%</div>
            </div>
            <ul class="pressure_t">
              <li>1006℃</li>
              <li>255Kpa</li>
            </ul>
          </div>
          <div class="l_b">
            <p>煤气</p>
            <div class="heater">加热器</div>
            <div class="air_box coal_box">
              <div class="air rotate_l"></div>
              <ul class="air_btn">
                <li>A</li>
                <li>R</li>
                <li>P</li>
              </ul>
              <div class="sf">
                <div class="set">50.8%</div>
                <div class="feedback">49.9%</div>
              </div>
            </div>
            <ul class="pressure_t pressure_t2">
              <li>1006℃</li>
              <li>255Kpa</li>
              <li>100034m³/h</li>
            </ul>
          </div>
        </div>
        <ul class="list">
          <li>
            <div class="luhao">1号炉</div>
            <div class="kongqi">
              <div class="set">50.8%</div>
              <div class="feedback">49.9%</div>
              <div class="famen">
                <div class="l"></div>
                <ul class="r">
                  <li>A</li>
                  <li>X</li>
                </ul>
              </div>
            </div>
            <div class="meiqi">
              <div class="famen famen2">
                <div class="l rotate"></div>
                <ul class="r">
                  <li
                    v-for="item in [{uuid: 'a1', type: 'a', title: '劳资是热风炉'}]"
                    :key="item.uuid"
                    @click="handleMultiModal(item)"
                  >A</li>
                  <li
                    v-for="item in [{uuid: 'bb', type: 'x', title: '加热炉子'}, {uuid: 'aa', type: 'x', title: '加热炉子二号'}, {uuid: 'cc', type: 'x', title: '加热炉子三号'}]"
                    :key="item.uuid"
                    @click="handleMultiModal(item)"
                  >X</li>
                </ul>
              </div>
              <div class="set">50.8%</div>
              <div class="feedback">49.9%</div>
            </div>
          </li>
          <li>
            <div class="luhao">2号炉</div>
            <div class="kongqi">
              <div class="set">50.8%</div>
              <div class="feedback">49.9%</div>
              <div class="famen">
                <div class="l"></div>
                <ul class="r">
                  <li>A</li>
                  <li>X</li>
                </ul>
              </div>
            </div>
            <div class="meiqi">
              <div class="famen famen2">
                <div class="l rotate"></div>
                <ul class="r">
                  <li>A</li>
                  <li>X</li>
                  <li>X</li>
                  <li>X</li>
                </ul>
              </div>
              <div class="set">50.8%</div>
              <div class="feedback">49.9%</div>
            </div>
          </li>
          <li>
            <div class="luhao">3号炉</div>
            <div class="kongqi">
              <div class="set">50.8%</div>
              <div class="feedback">49.9%</div>
              <div class="famen">
                <div class="l"></div>
                <ul class="r">
                  <li>A</li>
                  <li>X</li>
                </ul>
              </div>
            </div>
            <div class="meiqi">
              <div class="famen famen2">
                <div class="l rotate"></div>
                <ul class="r">
                  <li>A</li>
                  <li>X</li>
                  <li>X</li>
                  <li>X</li>
                </ul>
              </div>
              <div class="set">50.8%</div>
              <div class="feedback">49.9%</div>
            </div>
          </li>
          <li>
            <div class="luhao">4号炉</div>
            <div class="kongqi">
              <div class="set">50.8%</div>
              <div class="feedback">49.9%</div>
              <div class="famen">
                <div class="l"></div>
                <ul class="r">
                  <li>A</li>
                  <li>X</li>
                </ul>
              </div>
            </div>
            <div class="meiqi">
              <div class="famen famen2">
                <div class="l rotate"></div>
                <ul class="r">
                  <li>A</li>
                  <li>X</li>
                  <li>X</li>
                  <li>X</li>
                </ul>
              </div>
              <div class="set">50.8%</div>
              <div class="feedback">49.9%</div>
            </div>
          </li>
        </ul>
        <el-table
          :data="tableData"
          border
          class="table"
          :header-row-style="{ height:'20px' }"
          :row-style="{ height:'20px' }"
          :header-cell-style="{background:'#eef1f6',color:'#606266'}"
        >
          <el-table-column prop="pono" label="炉号" text-align:center></el-table-column>
          <el-table-column prop="state" label="状态"></el-table-column>
          <el-table-column prop="time" label="时间"></el-table-column>
          <el-table-column prop="vault" label="拱顶温度"></el-table-column>
          <el-table-column prop="ability" label="蓄热能力"></el-table-column>
          <el-table-column prop="burning" label="烧炉时间"></el-table-column>
          <el-table-column prop="discard" label="废弃温度"></el-table-column>
          <el-table-column prop="smokeT" label="预测烟温"></el-table-column>
        </el-table>
        <div class="exhaust_gas">
          <p>废气</p>
          <div class="valve position"></div>
        </div>
      </div>
      <div class="content"></div>
      <div class="right">
        <div class="valve valve2"></div>
        <div class="valve valve3"></div>
        <p class="hot">热风</p>
        <p class="cold">冷风</p>
        <ul class="pressure_t pressure_t3">
          <li>1006℃</li>
          <li>255Kpa</li>
          <li>100034m³/h</li>
        </ul>
        <p class="temperature">1006℃</p>
      </div>
    </div>
    <X :data="xData" :maxZIndex="zIndex" @onAddZIndex="addZIndex" @onClose="onCloseX"></X>
    <A :data="aData" :maxZIndex="zIndex" @onAddZIndex="addZIndex" @onClose="onCloseA"></A>
    <tap></tap>
  </div>
</template>
<script>
import X from '@/components/X.vue'
import A from '@/components/A.vue'
import tap from '@/components/tap.vue'
export default {
  data() {
    return {
      tableData: [
        {
          pono: '1',
          state: '烧炉',
          time: '100min',
          vault: '1209℃',
          ability: '60.4',
          burning: '55.7min',
          discard: '888.9℃',
          smokeT: '666.7℃'
        },
        {
          pono: '2',
          state: '焖炉',
          time: '100min',
          vault: '1209℃',
          ability: '60.4',
          burning: '55.7min',
          discard: '888.9℃',
          smokeT: '666.7℃'
        },
        {
          pono: '3',
          state: '送风',
          time: '100min',
          vault: '1209℃',
          ability: '60.4',
          burning: '55.7min',
          discard: '888.9℃',
          smokeT: '666.7℃'
        },
        {
          pono: '4',
          state: '烧炉',
          time: '100min',
          vault: '1209℃',
          ability: '60.4',
          burning: '55.7min',
          discard: '888.9℃',
          smokeT: '666.7℃'
        }
      ],
      dialogStatus: false,
      activeX: '', // 弹窗X所用标识id
      activeA: '', // 弹窗A所用标识id
      xData: {}, // 弹窗X数据
      aData: {}, // 弹窗A数据
      zIndex: 1000 // 弹窗层级
    }
  },
  components: {
    X,
    A,
    tap
  },
  mounted() {
    // this.handlegetStationList()
  },
  methods: {
    // 关闭X弹窗
    onCloseX(remain) {
      console.log(remain, 'jjjjjj')
      this.xData = remain
    },
    // 关闭A弹窗
    onCloseA(remain) {
      this.aData = remain
    },
    // 提高目标弹窗的层级
    promoteZIndex(ins) {
      if (!ins || (ins && !ins.uuid)) return
      // 弹窗配置
      const single = {
        ...ins,
        show: true,
        zIndex: this.zIndex
      }
      const modalType = String(ins.type).toUpperCase()
      if (modalType === 'A') {
        this.aData = {
          ...this.aData,
          [ins.uuid]: single
        }
      } else if (modalType === 'X') {
        this.xData = {
          ...this.xData,
          [ins.uuid]: single
        }
      }
    },
    // 弹窗层级值递增
    addZIndex(val, ins) {
      if (val) {
        this.zIndex = val
      } else {
        this.zIndex += 1
      }
      console.log(ins, 'nnnnnnnnnnnnnnnnn', val)
      this.promoteZIndex(ins)
    },
    // 处理同时触发多个弹窗按钮逻辑
    handleMultiModal(ins) {
      this.activeA = ins.uuid
      const temp = this.xData[ins.uuid]
      const isTop = temp && (temp.zIndex >= this.zIndex)
      if (!isTop) {
        this.addZIndex()
        this.promoteZIndex(ins)
      }
    }
  }
}
</script>
<style lang="scss">
.el-table .cell {
  text-align: center;
}
.el-table th > .cell {
  text-align: center;
}
.el-table td,
.el-table th {
  padding: 8px 0;
}
</style>
<style lang="scss" scoped>
.box {
  min-width: 1200px;
}
.process {
  height: 500px;
  margin-top: 50px;
}
.title {
  text-align: center;
  font-size: 20px;
}
.left,
.content,
.right {
  float: left;
  height: 100%;
  text-align: center;
}
.left {
  width: 75%;
  position: relative;
  .list {
    width: 80%;
    display: flex;
    justify-content: space-around;
    position: absolute;
    right: -12px;
    li {
      position: relative;
    }
  }
  .luhao {
    margin-top: -20px;
  }
  .kongqi {
    margin-top: 10px;
  }
  .meiqi {
    margin-top: 39px;
  }
  .sf {
    position: absolute;
    left: 85px;
  }
  .set,
  .feedback {
    line-height: 25px;
  }
  .pressure_t {
    position: absolute;
    top: 130px;
    left: -30px;
    font-size: 14px;
    line-height: 18px;
  }
  .pressure_t2 {
    top: 0px;
    left: -90px;
  }
  .pipeline {
    width: 85%;
    height: 39px;
    background: url(../../../../../assets/images/T_2.png) no-repeat;
    background-size: 100% 100%;
    position: absolute;
    right: -12px;
    top: 100px;
    .l_t {
      width: 80px;
      height: 158px;
      background: url(../../../../../assets/images/T_1A.png);
      background-size: 100% 100%;
      position: absolute;
      left: -40px;
      top: -153px;
    }
    .air_box {
      position: absolute;
      top: 20px;
      z-index: 1000;
      left: -62px;
      .air {
        float: right;
        margin-left: 10px;
      }
      .air_btn {
        float: left;
      }
    }
    .air {
      width: 20px;
      height: 20px;
      background: url(../../../../../assets/images/tap.png);
      background-size: 100% 100%;
    }
    .air_btn {
      width: 40px;
      font-size: 14px;
      li {
        float: left;
        width: 20px;
        height: 20px;
        text-align: center;
        line-height: 20px;
        background: #ddd;
        border: 1px solid #eee;
        box-sizing: border-box;
      }
    }
    .air_box2 {
      left: 62px;
      width: 80px;
      .air {
        float: left;
        margin-right: 10px;
      }
      .air_btn {
        float: right;
      }
    }
    .coal_box {
      top: 125px;
    }
    .rotate_l {
      transform: rotate(-90deg);
    }
    .rotate_r {
      transform: rotate(90deg);
    }
    .l_b {
      position: absolute;
      left: -1px;
      top: 34px;
      width: 35px;
      height: 180px;
      background: url(../../../../../assets/images/T_3A.png);
      background-size: 100% 100%;
      .air {
        top: 130px;
      }
      p {
        width: 40px;
        position: absolute;
        bottom: -25px;
        left: -15px;
      }
    }

    .heater {
      width: 50px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      font-size: 14px;
      background: url(../../../../../assets/images/heater.png);
      position: absolute;
      top: 65px;
      left: -21px;
    }
    .heater_t {
      top: 80px;
      left: 14px;
    }
  }
  .famen {
    position: relative;
    height: 40px;
    font-size: 14px;
    .l {
      width: 30px;
      height: 30px;
      background: url(../../../../../assets/images/b.png);
      background-size: 100% 100%;
      float: left;
      position: absolute;
      left: 10px;
      bottom: 0;
    }
    .r {
      width: 40px;
      position: absolute;
      top: 0;
      left: 50px;
      li {
        float: left;
        width: 20px;
        height: 20px;
        text-align: center;
        line-height: 20px;
        background: #ddd;
        border: 1px solid #eee;
        box-sizing: border-box;
        cursor: pointer;
      }
    }
    .rotate {
      transform: rotate(180deg);
    }
  }
  .famen2 {
    .l {
      top: 0;
    }
    .r {
      top: 10px;
    }
  }
  .table {
    position: absolute;
    left: 240px;
    bottom: 50px;
    width: 70%;
    text-align: center;
  }
  .exhaust_gas {
    width: 60%;
    height: 6px;
    position: absolute;
    right: -8px;
    bottom: 28px;
    background: url(../../../../../assets/images/T_5.png);
    background-size: 100% 100%;
    p {
      position: absolute;
      left: -40px;
      top: -10px;
    }
  }
}
.valve {
  width: 20px;
  height: 20px;
  background: url(../../../../../assets/images/tap.png);
  background-size: 100% 100%;
  position: absolute;
  z-index: 1000;
}
.position {
  right: 15px;
  top: -13px;
}
.valve2 {
  left: 21px;
  top: 20px;
  transform: rotate(90deg);
}
.valve3 {
  bottom: 0;
  left: 45px;
}
.content {
  width: 10%;
  margin-top: 20px;
  height: 460px;
  background: url(../../../../../assets/images/process.png);
  background-size: 100% 100%;
}
.right {
  width: 15%;
  height: 390px;
  position: relative;
  background: url(../../../../../assets/images/T_3.png);
  background-size: 100% 100%;
  margin: 83px 0 0 -8px;
  .hot {
    position: absolute;
    right: 0;
    top: -25px;
  }
  .cold {
    position: absolute;
    right: 0;
    bottom: -20px;
  }
  .pressure_t3 {
    position: absolute;
    right: 20px;
    bottom: 20px;
  }
  .temperature {
    position: absolute;
    top: -25px;
    right: 40px;
  }
}
</style>
