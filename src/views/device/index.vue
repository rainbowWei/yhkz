<template>
  <div class="device">
    <p>
      装置类别
      <span>个数</span>
    </p>
    <ul class="list">
      <!-- <li>
        <router-link :to="{ name: 'deviceDetail' }">燃气锅炉燃烧优化控制系统</router-link>
        <span>33</span>
      </li>
      <li>
        <router-link :to="{ name: 'deviceDetail', params: { id: 456 } }">CFB燃烧优化控制系统</router-link>
        <span>12</span>
      </li>
      <li>
        <router-link to="/device/details/567">高炉热风炉燃烧优化控制系统</router-link>
        <span>21</span>
      </li>
      <li>
        <router-link to="/device/details/test">链条炉燃烧优化控制系统</router-link>
        <span>9</span>
      </li>
      <li>
        <router-link to="/device/details/809">加热炉燃烧优化控制系统</router-link>
        <span>5</span>
      </li>-->
      <li v-for="item in data" :key="item.id">
        <router-link
          :to="{ name: 'deviceDetail', params: {
          id: item.id,
          childNode: item.childNode
        }}"
        >{{ item.zhName }}</router-link>
        <span>{{ item.childNodeLen }}</span>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>
<script>
import { getList } from '@/mock'

export default {
  name: 'deviceClass',
  data() {
    return {
      data: []
    }
  },
  mounted() {
    getList().then(res => {
      console.log(res, '____')
      this.data = res.data
    })
  }
}
</script>
<style lang="scss" scoped>
.device {
  width: 100%;
  min-height: 450px;
}
p{
  width: 900px;
  margin: 0 auto;
  padding-left: 20px;
  box-sizing: border-box;
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
