<template>
  <div class="container">
    <!-- <ul>
      <li v-for=" list in teacherlist" :key="list.id">{{list}}</li>
    </ul>-->
    <div class="banner">这是一个轮播图</div>
    <div class="content">
      <p>这里是有两大块内容1.HeroRTS系统的介绍2.HeroRTS系统总体架构以及产品功能</p>
    </div>
  </div>
</template>

<script>
import { getNewsList } from '@/api/home/index'

export default {
  data() {
    return {
      teacherlist: []
    }
  },
  mounted() {
    this.handlegetTeacherList()
  },
  methods: {
    handlegetTeacherList() {
      getNewsList()
        .then(res => {
          if (res.data) {
            this.teacherlist = res.data
          }
        })
        .catch(err => {
          throw new Error(err, '0000')
        })
      console.log(111)
      console.log(this.teacherlist, '+++++')
    }
  }
}
</script>
<style lang="scss" scoped>
.banner {
  width: 100%;
  height: 450px;
  line-height: 450px;
  background: #dddddd;
  text-align: center;
}
.content {
  width: 100%;
  height: 400px;
  line-height: 400px;
  text-align: center;
  // background: #999;
}
</style>
