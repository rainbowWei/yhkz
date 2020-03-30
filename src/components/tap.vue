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
        <div class="tbox">
          <div class="title">
            <span>2# 炉控制参数</span>
          </div>
          <div class="t-left fl">
            <div class="add">
              <p>初期增加值</p>
              <input type="text" value="333" @focus="focusPrice($event)" @blur="blurPrice($event)" />
              <p>调整时间</p>
              <input type="text" value="333" @focus="focusPrice($event)" @blur="blurPrice($event)" />
            </div>
            <div class="flue">
              <div class="yanwen">
                <p>预测烟温</p>
                <p class="orange">000000</p>
              </div>
              <div class="meiqi">
                <p>煤气设定</p>
                <input
                  type="text"
                  value="00099"
                  @focus="focusPrice($event)"
                  @blur="blurPrice($event)"
                />
              </div>
              <div class="X flueX">X</div>
              <div class="meiqi2 orange">000000.0</div>
              <div class="burning">
                <p>烧炉强度</p>
                <input
                  type="text"
                  value="00000.0"
                  @focus="focusPrice($event)"
                  @blur="blurPrice($event)"
                />
              </div>
              <div class="xietiao">
                <p>协调减少量</p>
                <p class="orange">00000.0</p>
              </div>
              <ul class="list">
                <li>
                  <p>基本强度</p>
                  <input
                    type="text"
                    value="00000.0"
                    @focus="focusPrice($event)"
                    @blur="blurPrice($event)"
                  />
                </li>
                <li>
                  <p>单烧增量</p>
                  <input
                    type="text"
                    value="00000.0"
                    @focus="focusPrice($event)"
                    @blur="blurPrice($event)"
                  />
                </li>
                <li>
                  <p>保留系数</p>
                  <input
                    type="text"
                    value="00000.0"
                    @focus="focusPrice($event)"
                    @blur="blurPrice($event)"
                  />
                </li>
              </ul>
            </div>
            <div class="exhaust">
              <div class="feiqi">
                <p>废气含氧量</p>
                <p class="orange">00000.0</p>
              </div>
              <div class="set">
                <p>含氧量设定</p>
                <input
                  type="text"
                  value="00000.0"
                  @focus="focusPrice($event)"
                  @blur="blurPrice($event)"
                />
              </div>
              <div class="X x1">
                <li
                  v-for="item in [{uuid: 'xxx', type: 'x', title: '劳资是热风炉'}]"
                  :key="item.uuid"
                  @click="handleMultiModal(item)"
                >X</li>
              </div>
              <div class="X a1">R</div>
              <div class="X a2">R</div>
              <div class="atxt orange">0000.00</div>
              <div class="atxt2 orange">0000.00</div>
              <div class="dingwen">
                <p>顶温下降调配比系数</p>
                <input
                  type="text"
                  value="00000.2"
                  @focus="focusPrice($event)"
                  @blur="blurPrice($event)"
                />
              </div>
              <div class="ganyu">
                <p>干预风煤比</p>
                <p class="orange">000000.2</p>
              </div>
              <div class="youhua">
                <p>优化风煤比</p>
                <input
                  type="text"
                  value="00000.2"
                  @focus="focusPrice($event)"
                  @blur="blurPrice($event)"
                />
              </div>
              <div class="btn">屏蔽</div>
            </div>
          </div>
          <div class="t-center fl">
            <div class="con">
              <p>风煤协调</p>
            </div>
            <ul class="c-top">
              <li>
                <p>初始强度</p>
                <input
                  type="text"
                  value="00000.0"
                  @focus="focusPrice($event)"
                  @blur="blurPrice($event)"
                />
              </li>
              <li>
                <p>初始强度</p>
                <input
                  type="text"
                  value="00000.0"
                  @focus="focusPrice($event)"
                  @blur="blurPrice($event)"
                />
              </li>
            </ul>
            <div class="other orange">其他情况</div>
            <div class="frame">优化参数画面</div>
          </div>
          <div class="t-right fr">
            <div class="air">
              <div class="airset">
                <p>空气流量设定值</p>
                <p class="orange">999</p>
              </div>
              <div class="X x2">X</div>
              <div class="totalinput orange">0000</div>
              <ul class="airlist">
                <li>
                  <span>空气上限</span>
                  <input
                    type="text"
                    value="30000"
                    @focus="focusPrice($event)"
                    @blur="blurPrice($event)"
                  />
                </li>
                <li>
                  <span>空气下限</span>
                  <input
                    type="text"
                    value="30000"
                    @focus="focusPrice($event)"
                    @blur="blurPrice($event)"
                  />
                </li>
              </ul>
              <div class="airflow">
                <p>空气流量</p>
                <p class="orange">00000</p>
                <p>停止补偿</p>
              </div>
              <div class="feedforward">
                <ul class="feedlist">
                  <li>
                    <span>初始阀位增加</span>
                    <input
                      type="text"
                      value="9999"
                      @focus="focusPrice($event)"
                      @blur="blurPrice($event)"
                    />
                  </li>
                  <li>
                    <span>空压前馈系数</span>
                    <input
                      type="text"
                      value="9999"
                      @focus="focusPrice($event)"
                      @blur="blurPrice($event)"
                    />
                  </li>
                </ul>
                <div class="feedout clearfix">
                  <span>前馈输出</span>
                  <p class="orange">56778</p>
                </div>
              </div>
            </div>
            <div class="gas">
              <div class="airset">
                <p>煤气流量设定值</p>
                <p class="orange">999</p>
              </div>
              <div class="X x2">X</div>
              <div class="totalinput orange">0000</div>
              <ul class="airlist">
                <li>
                  <span>煤气上限</span>
                  <input
                    type="text"
                    value="30000"
                    @focus="focusPrice($event)"
                    @blur="blurPrice($event)"
                  />
                </li>
                <li>
                  <span>煤气下限</span>
                  <input
                    type="text"
                    value="30000"
                    @focus="focusPrice($event)"
                    @blur="blurPrice($event)"
                  />
                </li>
              </ul>
              <div class="airflow">
                <p>煤气流量</p>
                <p class="orange">00000</p>
                <p>停止补偿</p>
              </div>
              <div class="feedforward">
                <ul class="feedlist">
                  <li>
                    <span>初始阀位增加</span>
                    <input
                      type="text"
                      value="9999"
                      @focus="focusPrice($event)"
                      @blur="blurPrice($event)"
                    />
                  </li>
                  <li>
                    <span>煤压前馈系数</span>
                    <input
                      type="text"
                      value="9999"
                      @focus="focusPrice($event)"
                      @blur="blurPrice($event)"
                    />
                  </li>
                </ul>
                <div class="feedout clearfix">
                  <span>前馈输出</span>
                  <p class="orange">56778</p>
                </div>
              </div>
            </div>
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
  name: 'tap',
  components: {
    XModal
  },
  props: ['title', 'data', 'maxZIndex'],
  data() {
    return {
      showModal: {
        show: false, // 弹窗是否显示
        uuid: '', // 弹窗id
        activeX: '', // 弹窗X所用标识id
        activeA: '', // 弹窗A所用标识id
        xData: {}, // 弹窗X数据
        aData: {}, // 弹窗A数据
        tData: {}, // 先控画面的数据
        rData: {}, // 弹窗R数据
        zIndex: 1001 // 弹窗层级
      }
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
      } else if (modalType === 'T') {
        this.tData = {
          ...this.tData,
          [ins.uuid]: single
        }
      } else if (modalType === 'R') {
        this.rData = {
          ...this.rData,
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
      // this.activeA = ins.uuid
      const temp = this.xData[ins.uuid]
      const isTop = temp && temp.zIndex >= this.zIndex
      if (!isTop) {
        this.addZIndex()
        this.promoteZIndex(ins)
      }
    },
    // 文本聚焦事件 为0置空处理 添加输入边框类名
    focusPrice: function($even) {
      if ($even.target.value === '0' || $even.target.value === 0) {
        $even.target.value = ''
      }
      $even.target.classList.add('borderactive')
      console.log('聚焦了')
    },
    // 文本失焦事件 为空置0处理  删除输入边框类名
    blurPrice: function($even) {
      if ($even.target.value === '') {
        $even.target.value = 0
      }
      $even.target.classList.remove('borderactive')
      console.log('失焦了')
    }
  }
}
</script>
<style scoped lang='scss'>
.tbox {
  min-width: 1110px;
  padding: 0 23px 20px 38px;
  height: 500px;
  box-sizing: border-box;
  font-size: 12px;
}

.title {
  padding: 15px 0 0 0;
}
.t-left {
  width: 552px;
  margin-top: 56px;
  position: relative;
  .flue {
    width: 472px;
    height: 128px;
    background: url(../assets/images/X_ZS.png);
    background-size: 100% 100%;
    position: absolute;
    top: 0;
    left: 0;
    .yanwen {
      position: absolute;
      left: 96px;
      top: 11px;
    }
    .meiqi {
      position: absolute;
      left: 180px;
      top: -32px;
    }
    .flueX {
      position: absolute;
      left: 256px;
      top: 26px;
    }
    .meiqi2 {
      position: absolute;
      left: 320px;
      top: 29px;
    }
    .burning {
      position: absolute;
      right: -60px;
      top: 52px;
    }
    .xietiao {
      position: absolute;
      top: 87px;
      left: 12px;
    }
    .list {
      position: absolute;
      top: 87px;
      left: 105px;
      li {
        float: left;
        margin: 0 23px;
        &:last-child {
          margin-left: 0;
        }
      }
    }
  }
  .exhaust {
    width: 467px;
    height: 110px;
    background: url(../assets/images/X_ZX.png);
    background-size: 100% 100%;
    position: absolute;
    top: 145px;
    right: 0;
    .feiqi {
      position: absolute;
      left: -60px;
      top: 70px;
    }
    .set {
      position: absolute;
      left: 24px;
      top: 25px;
    }
    .x1 {
      position: absolute;
      left: 147px;
      top: 26px;
    }
    .a1 {
      position: absolute;
      left: 190px;
      bottom: 26px;
    }
    .a2 {
      position: absolute;
      left: 190px;
      bottom: -10px;
    }
    .atxt,
    .atxt2 {
      width: 66px;
      text-align: center;
      position: absolute;
      left: 227px;
    }
    .atxt {
      bottom: 26px;
    }
    .atxt2 {
      bottom: -6px;
    }
    .dingwen {
      position: absolute;
      left: 168px;
      top: 4px;
      input {
        width: 108px;
      }
    }
    .ganyu {
      position: absolute;
      left: 308px;
      top: 4px;
    }
    .youhua {
      position: absolute;
      top: -33px;
      right: 20px;
    }
    .btn {
      width: 51px;
      height: 22px;
      line-height: 22px;
      text-align: center;
      background: #e9e9e9;
      color: #768ca3;
      font-size: 14px;
      border-radius: 20px;
      position: absolute;
      right: 36px;
      bottom: 23px;
    }
  }
  .add {
    width: 80px;
    height: 70px;
    border: 1px solid #000;
    padding: 0 9px;
    box-sizing: border-box;
    position: absolute;
    top: -15px;
    left: -10px;
    z-index: 2;
  }
}
p {
  text-align: center;
  line-height: 17px;
}
input {
  width: 60px;
  height: 15px;
  line-height: 15px;
  text-align: center;
  margin: 0 auto;
}
.borderactive {
  border: 1px dashed #bbcaca;
  box-sizing: border-box;
}
.X {
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  font-size: 18px;
  color: #fff;
  cursor: pointer;
  background: #be3979;
}
.orange {
  color: #ff7800;
  cursor: pointer;
}
.t-center {
  width: 105px;
  margin-top: 115px;
  position: relative;
  .con {
    width: 100%;
    height: 190px;
    border: 1px solid #000;
    text-align: center;
    box-sizing: border-box;
    p {
      width: 25px;
      text-align: center;
      font-size: 21px;
      line-height: 30px;
      margin: 26px 0 0 40px;
    }
  }
  .c-top {
    width: 133px;
    height: 38px;
    padding-left: 6px;
    border: 1px solid #000;
    box-sizing: border-box;
    position: absolute;
    top: -65px;
    left: -15px;
    li {
      float: left;
    }
  }
  .other {
    font-size: 14px;
    position: absolute;
    left: 20px;
    bottom: -35px;
  }
  .frame {
    width: 100%;
    height: 22px;
    line-height: 22px;
    border-radius: 20px;
    text-align: center;
    color: #fff;
    position: absolute;
    left: 0;
    bottom: -75px;
    background: #46a279;
    font-size: 14px;
  }
}
.t-right {
  width: 383px;
  .air {
    width: 383px;
    height: 78px;
    background: url(../assets/images/X_YS.png);
    background-size: 100% 100%;
    margin: 122px 0 85px 0;
    position: relative;
  }
  .airset {
    position: absolute;
    top: -15px;
    left: 42px;
  }
  .x2 {
    position: absolute;
    top: 0px;
    right: 105px;
  }
  .totalinput {
    position: absolute;
    top: 3px;
    left: 335px;
  }
  .airlist {
    width: 115px;
    height: 37px;
    position: absolute;
    top: 26px;
    left: 20px;
    padding-left: 4px;
    box-sizing: border-box;
    input {
      width: 55px;
    }
  }
  .airflow {
    position: absolute;
    top: 63px;
    left: 155px;
  }
  .feedforward {
    width: 145px;
    height: 55px;
    padding: 2px 0 0 6px;
    box-sizing: border-box;
    position: absolute;
    top: 24px;
    left: 235px;
    .feedout {
      span,
      p {
        float: left;
      }
      p {
        width: 60px;
        height: 15px;
        line-height: 15px;
        text-align: center;
      }
      span {
        text-indent: 24px;
      }
    }
  }
  .gas {
    width: 381px;
    height: 82px;
    background: url(../assets/images/X_YX.png);
    background-size: 100% 100%;
    position: relative;
    .airlist {
      top: 29px;
    }
    .feedforward {
      top: 29px;
    }
  }
}
</style>
