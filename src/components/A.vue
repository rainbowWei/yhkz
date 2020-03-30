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
        <div class="abox">
          <div class="title">
            <span>2# 炉空气流量调节阀</span>
            <b></b>
          </div>
          <ul class="list clearfix">
            <li>
              <div class="txt fl">
                <span>P</span>
                <input
                  type="text"
                  value="999"
                  class="input"
                  @focus="focusPrice($event)"
                  @blur="blurPrice($event)"
                />
              </div>
              <ul class="btns fl">
                <li class="active">-5</li>
                <li>-1</li>
                <li>+1</li>
                <li>+5</li>
              </ul>
              <div class="btn fr">手动</div>
            </li>
            <li>
              <div class="txt fl">
                <span>O</span>
                <div class="fr autotxt">8888</div>
              </div>
              <div class="btn fr on">自动</div>
            </li>
          </ul>
        </div>
      </div>
    </x-modal>
  </div>
  <div v-else></div>
</template>

<script>
import XModal from '@/components/XModal.vue'
export default {
  name: 'A',
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
.abox {
  min-width: 350px;
  padding-bottom: 20px;
}
.list {
  width: 314px;
  margin: 0 auto;
  font-size: 14px;
  li {
    width: 100%;
    height: 40px;
    line-height: 40px;
    padding-left: 20px;
    box-sizing: border-box;
    &:first-child {
      border-bottom: 1px dashed #bbcaca;
    }
    .borderactive {
      border: 1px dashed #bbcaca;
    }
    .txt {
      .input {
        width: 60px;
        height: 15px;
        text-align: center;
        font-size: 14px;
        box-sizing: border-box;
        margin: 0 11px 0 20px;
        // &:hover {
        //   border: 1px dashed #bbcaca;
        // }
      }
      .autotxt {
        width: 60px;
        height: 15px;
        text-align: center;
        font-size: 14px;
        margin: 0 11px 0 20px;
        color: #ff7800;
      }
    }
    .btns {
      margin-top: 12px;
      cursor: pointer;
      li {
        width: 18px;
        height: 18px;
        line-height: 18px;
        text-align: center;
        float: left;
        border: 1px solid #90a2b7;
        box-sizing: border-box;
        color: #90a2b7;
        border-radius: 4px;
        margin-right: 4px;
        padding-left: 0;
        font-size: 12px;
      }
      .active {
        background: #46a279;
        color: #fff;
        border-color: #46a279;
      }
    }
    .btn {
      width: 47px;
      height: 22px;
      line-height: 22px;
      text-align: center;
      background: #e9e9e9;
      color: #768ca3;
      border-radius: 50px;
      margin-top: 9px;
      margin-right: 10px;
      cursor: pointer;
    }
    .on {
      background: #46a279;
      color: #fff;
    }
  }
}
</style>
