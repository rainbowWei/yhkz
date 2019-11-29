<template>
  <div id="app">
    <login-header></login-header>
    <router-view/>
    <login-footer></login-footer>
  </div>
</template>
<script>
import LoginHeader from './components/header'
import LoginFooter from './components/footer'
export default {
  name: 'loginIndex',
  components: {
    LoginHeader,
    LoginFooter
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
