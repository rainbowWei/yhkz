<template>
  <div class="catalog">
    <div class="crumb">
      <router-link to="/device">装置列表</router-link> /
      <span>热风炉</span>
    </div>
    <div class="catalog-con">
      <!-- <p>这是详情页面{{ id }}</p> -->
      <!-- <p>这是详情页面{{ childNode }}</p> -->
      <div class="tit">
        <p>工程项目名称</p>
        <span>通讯状态</span>
      </div>
      <ul class="list">
        <li v-for="item in data" :key="item.id">
          <router-link
            :to="{ name: 'deviceDetail', params: {
          id: item.id
        }}"
          >{{ item.zhName }}</router-link>
          <span>{{ item.status }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
// import { getList } from '@/mock/deviceList'
import { getCatalogList } from '@/api/catalog'
export default {
  name: 'deviceDetail',
  data() {
    return {
      id: 0,
      childNode: '',
      data: []
    }
  },
  mounted() {
    this.handlegetCatalogList()
  },
  methods: {
    handlegetCatalogList() {
      getCatalogList({}).then(res => {
        this.data = res.data
      })
    }
  },

  beforeUpdate() {
    console.log(this.$route, '___')
  },

  beforeRouteEnter(to, from, next) {
    next(vm => {
      console.log(vm, '_____')
      vm._data.id = to.params.id
      vm._data.childNode = to.params.childNode
    })
  }
}
</script>

<style lang="scss" scoped>
.catalog {
  width: 100%;
  min-height: calc(100vh - 144px);
  .crumb {
    padding-left: 50px;
    background: #e7f2f8;
    font-size: 14px;
    height: 30px;
    line-height: 30px;
  }
}
.catalog-con {
  max-width: 1000px;
  margin: 0 auto;
  padding-bottom: 20px;
}
p {
  text-align: center;
}
.tit {
  height: 50px;
  line-height: 50px;
  p {
    float: left;
    padding-left: 20px;
  }
  span {
    float: right;
    padding-right: 20px;
    display: block;
  }
}
.list {
  border: 1px solid #eee;
  li {
    height: 35px;
    line-height: 35px;
    border-bottom: 1px solid #eee;
    font-size: 14px;
    padding: 0 20px;
    &:last-child {
      border-bottom: none;
    }
  }
  a {
    float: left;
    &:hover {
      color: #3f7ad6;
    }
  }
  span {
    height: 20px;
    line-height: 20px;
    float: right;
    display: block;
    padding: 0 10px;
    border-radius: 6px;
    background: #eee;
    margin-top: 7px;
  }
}
</style>
