import '@/setup'
import Vue, { h } from 'vue'
import { App } from './app'
import router from './router'

Vue.config.productionTip = false

const app = new Vue({
  router,
  render: () => h(App),
})
app.$mount('#app')
