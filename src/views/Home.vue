<template>
  <div class="container">
    <div> 这是home页面</div>
    <ul>
      <li v-for=" list in teacherlist" :key="list.id">
      </li>
    </ul>
  </div>
</template>

<script>
import { getNewsList } from '@/api/home/index'

export default {
  data () {
    return {
      teacherlist: []
    }
  },
  mounted () {
    this.handlegetTeacherList()
  },
  methods: {
    handlegetTeacherList () {
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
    }
  }
}
</script>
<style lang="scss">

</style>
