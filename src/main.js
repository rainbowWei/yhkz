import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element'
import './plugins/axios'
import './styles/index.scss'
import myCharts from './plugins/myCharts'
import drive from '@/directives/driveCharts'

Vue.use(myCharts)

Vue.config.productionTip = false
Vue.directive('drive', drive)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
