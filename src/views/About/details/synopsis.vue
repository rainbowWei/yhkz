<template>
  <div class="about">
    <h1>这是公司简介{{ $route.params.id }}</h1>

  </div>
</template>
<script>

export default {
  name: 'aa',
  data() {
    return {
      id: ''
    }
  },
  beforeUpdate() {
    console.log(this.$route, '____')

    this.id = this.$route.params.id
  }
}
</script>
<style lang="scss" scoped>
.about {
  width: 100%;
  background: lightblue;
  height: 450px;
  text-align: center;
  line-height: 50px;
}
</style>
