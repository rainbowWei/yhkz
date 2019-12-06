<template>
  <div class="details">
    <div class="crumb">
      <span>装置列表</span>/
      <span>热风炉</span>
    </div>
    <p>这是详情页面{{ id }}</p>
  </div>
</template>
<script>
export default {
  name: 'deviceDetail',
  data() {
    return {
      id: 0
    }
  },
  beforeUpdate() {
    console.log(this.$route, '___')
  },

  beforeRouteEnter(to, from, next) {
    next(vm => {
      console.log(vm, '_____')
      vm._data.id = to.params.id
    })
  }
}
</script>
<style lang="scss" scoped>
.details{
  width: 100%;
  height: 450px;
}
.crumb{
  padding-left: 20px;
}
p{
  text-align: center;
}
</style>
