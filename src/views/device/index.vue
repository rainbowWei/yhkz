<template>
  <div class="device">
    <ul class="list">
      <p>
        装置类别
        <span>个数</span>
      </p>
      <li>
        <router-link to="/details">燃气锅炉燃烧优化控制系统</router-link>
        <span>33</span>
      </li>
      <li>
        <router-link to="/details">CFB燃烧优化控制系统</router-link>
        <span>12</span>
      </li>
      <li>
        <router-link to="/details">高炉热风炉燃烧优化控制系统</router-link>
        <span>21</span>
      </li>
      <li>
        <router-link to="/details">链条炉燃烧优化控制系统</router-link>
        <span>9</span>
      </li>
      <li>
        <router-link to="/details">加热炉燃烧优化控制系统</router-link>
        <span>5</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'deviceClass'
}
</script>
<style lang="scss" scoped>
.device {
  width: 100%;
  min-height: 450px;
}
.list {
  width: 900px;
  height: 100%;
  margin: 0 auto;
}
.list li {
  //   width: 100%;
  height: 50px;
  padding-left: 20px;
  &:nth-child(even) {
    background-color: #eee;
  }
}
.list li a {
  line-height: 50px;
  &:hover {
    color: #00a03b;
  }
}
.list li span {
  // height: 30PX;
  float: right;
  margin-right: 80px;
  background: #999;
  border-radius: 10px;
  color: #fff;
  padding: 5px 10px;
  margin-top: 10px;
}
p {
  height: 80px;
  line-height: 80px;
}
p span {
  float: right;
  margin-right: 80px;
}
</style>
