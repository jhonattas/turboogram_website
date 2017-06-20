import Vue from 'vue'
import App from './App'
import router from './router/index'

/* semantic-ui */
import '../node_modules/semantic-ui/dist/semantic.min.js'
import '../node_modules/semantic-ui/dist/semantic.min.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
