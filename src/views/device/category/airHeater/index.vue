<template>
  <div class="details">
    <div class="crumb">
      <router-link to="/device">装置列表</router-link>/
      <router-link to="/device/catalog">项目列表</router-link>/
      <span>热风炉</span>
    </div>
    <div class="details-con">
      <router-view></router-view>
      <div class="btn">
        <router-link to="/device/process">燃烧流程</router-link>
        <router-link to="/device/evaluate">运行评价</router-link>
        <router-link to="/device/reports">运行报表</router-link>
        <router-link to="/device/trend">历史趋势</router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.details {
  position: relative;
  width: 100%;
  min-height: calc(100vh - 64px);
  .crumb {
    padding-left: 50px;
    background: #e7f2f8;
    font-size: 14px;
    height: 30px;
    line-height: 30px;
  }
}
.details-con {
  height: 100%;
}
.btn {
  position: absolute;
  right: 50px;
  top: 0;
  a {
    float: left;
    display: block;
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    padding: 0 10px;
    background: #A6B7D1;
    border-radius: 4px;
    margin: 0 1px;
    box-sizing: border-box;
    &:hover {
      background:#09429B;
      color: #fff;
    }
  }
}
</style>
