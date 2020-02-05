import Vue from 'vue'
import App from './App.vue'
import Mirror from '../packages/index.js'
Vue.use(Mirror)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
