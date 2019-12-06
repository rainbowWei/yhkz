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
        <!-- <li>
          <router-link to="/map">业绩地图</router-link>
        </li>-->
        <li>
          <router-link to="/mapc">业绩地图</router-link>
        </li>
        <li>
          <router-link to="/census">节能统计</router-link>
        </li>
        <li>
          <router-link to="/about">关于我们</router-link>
          <ul class="list-child">
            <li>
              <router-link to="/about/a/567">公司简介</router-link>
            </li>
            <li>
              <router-link to="/about/a/57">企业文化</router-link>
            </li>
            <li>
              <router-link to="/about/a/56">发展历程</router-link>
            </li>
            <li>
              <router-link to="/about/a/5">联系我们</router-link>
            </li>
          </ul>
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
  width: 700px;
  margin-left: 100px;
}
.nav li {
  float: left;
  margin-right: 50px;
  position: relative;
  &:hover {
    .list-child {
      display: block;
    }
  }
}
.sign-in {
  float: right;
  margin-right: 30px;
}
.logo img {
  width: 100%;
  height: 100%;
}
.router-link-active {
  color: #203b85;
}
.list-child {
  display: none;
  width: 100%;
  position: absolute;
  top: 45px;
  right: -25px;
  background: #eee;
  border-radius: 10px;
  padding: 10px 20px;
}
.list-child li {
  width: 100%;
  height: 30px;
  line-height: 30px;
  border-bottom: 1px solid #999;
}
.list-child li a {
  display: inline-block;
  width: 100%;
  height: 100%;
  &:hover {
    color: red;
  }
}
</style>
