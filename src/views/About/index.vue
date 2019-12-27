<template>
  <div class="about">
    <div class="left">
      <router-link
        v-for="item in nav"
        :key="item.id"
        :class="item.id === $route.params.id ? 'active' : ''"
        :to="item.route"
      >{{item.name}}</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'about',
  data() {
    return {
      nav: [
        {
          name: '公司簡介',
          id: '567',
          route: '/about/567'
        },
        {
          name: '企業文化',
          id: '57',
          route: '/about/57'
        },
        {
          name: '發展歷程',
          id: '56',
          route: '/about/56'
        },
        {
          name: '聯繫我們',
          id: '5',
          route: '/about/5'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.about {
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  .left {
    width: 200px;
    a {
      display: block;
      width: 100%;
      height: 30px;
      line-height: 30px;
      &:hover{
        color: #3F7AD6;
      }
    }
  }
  h1 {
    line-height: 50px;
  }
  .active {
    background: #eee;
    color: #3F7AD6;
  }
}
</style>
