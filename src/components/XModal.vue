<template>
  <div>
    <div
      class="box"
      :ref="instance.uuid"
      :style="{
        zIndex: instance.zIndex
      }"
      @click.stop="addZIndex(instance.uuid)"
    >
      <div
        class="head"
        @mousedown.stop="mouseDownHandleelse($event)"
        @mouseup.stop="mouseUpHandleelse($event)"
      >
        <div class="l fl">
          <i></i>
          <span>{{instance.title}}</span>
        </div>
        <div class="r fr" @click.stop="closeXbox"></div>
      </div>
      <div class="content clearfix">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'XModal',
  props: ['title', 'instance', 'maxZIndex'],
  data() {
    return {
      moveDataelse: {
        x: null,
        y: null
      }
    }
  },
  beforeDestroy() {},
  components: {},
  computed: {
    isTop() {
      return this.instance.zIndex >= this.maxZIndex
    }
  },
  methods: {
    mouseDownHandleelse(event) {
      console.log(this.isTop, this.instance.zIndex, this.maxZIndex, 'jjjjjjj')
      if (this.isTop) {
        this.moveDataelse.x =
          event.pageX - this.$refs[this.instance.uuid].offsetLeft
        this.moveDataelse.y =
          event.pageY - this.$refs[this.instance.uuid].offsetTop
        event.currentTarget.style.cursor = 'move'
        window.onmousemove = this.mouseMoveHandleelse
      } else {
        window.onmousemove = null
        this.addZIndex()
      }
    },
    mouseMoveHandleelse(event) {
      let moveLeft = event.pageX - this.moveDataelse.x + 'px'
      let moveTop = event.pageY - this.moveDataelse.y + 'px'
      this.$refs[this.instance.uuid].style.left = moveLeft
      this.$refs[this.instance.uuid].style.top = moveTop
    },
    mouseUpHandleelse(event) {
      window.onmousemove = null
      event.currentTarget.style.cursor = 'move'
      console.log('鼠标松开了')
    },
    closeXbox() {
      console.log(']]]]]]]]]]]]]]]]]]]]]]]]]', this.instance)
      this.$emit('onTriggerShow', this.instance.uuid, false)
    },
    // 提高当前弹窗的层级为最高层级
    addZIndex() {
      const uuid = this.instance.uuid
      // 当前弹窗不是在最上面一层，则提高该弹窗的层级
      if (!this.isTop) {
        console.log(this.instance, 'addZIndex,,,,,,', uuid)
        const maxZIndex = this.maxZIndex + 1
        this.$refs[uuid].style.zIndex = maxZIndex
        this.$emit('onAddZIndex', maxZIndex, this.instance)
      }
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
.box {
  background: #5290b7;
  position: fixed;
  top: 100px;
  left: 100px;
  cursor: pointer;
  z-index: 1000;
  padding: 0 2px 2px 2px;
}
.head {
  height: 36px;
  line-height: 36px;
  font-size: 14px;
  color: #fff;
  position: relative;
  cursor: move;
  user-select: none;
  .l {
    i {
      width: 22px;
      height: 22px;
      display: inline-block;
      background: url(../assets/images/install.png);
      background-size: 100% 100%;
      position: absolute;
      top: 6px;
      left: 10px;
    }
    span {
      text-indent: 35px;
      display: inline-block;
    }
  }
  .r {
    width: 14px;
    height: 14px;
    background: url(../assets/images/close.png);
    background-size: 100% 100%;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }
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
.content {
  background: #fff;
}
</style>
