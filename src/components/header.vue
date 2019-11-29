<template>
  <div class="header">
    <div class="h-content">
      <div class="logo">
        <a href="javascript:">
          <img src="../assets/images/logo.png" alt />
        </a>
      </div>
      <ul class="nav">
        <li>
          <router-link to="/">首页</router-link>
        </li>
        <li>
          <router-link to="/device">装置类别</router-link>
        </li>
        <li>
          <router-link to="/map">业绩地图</router-link>
        </li>
        <li>
          <router-link to="/census">节能统计</router-link>
        </li>
        <li>
          <router-link to="/about">关于我们</router-link>
        </li>
      </ul>
      <div class="sign-in">登录</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'loginHeader'
}
</script>
<style lang="scss" scoped>
.header {
  width: 100%;
  height: 60px;
  line-height: 60px;
  border-bottom: 4px solid #eee;
}
.h-content {
  width: 1200px;
  margin: 0 auto;
}
.logo {
  width: 150px;
  height: 50px;
  float: left;
  margin-top: 5px;
}
.nav {
  float: left;
  width: 600px;
  margin-left: 100px;
}
.nav li {
  float: left;
  margin-right: 50px;
}
.sign-in {
  float: right;
  margin-right: 30px;
}
.logo img {
  width: 100%;
  height: 100%;
}
.router-link-active{
    color: #203b85;
}
</style>
