import Vue from 'vue'
import VueRouter from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  scrollBehavior: function(to, from, savedPosition) {
    if(to.hash) {
      return { selector: to.hash }
    } else {
      return { x: 0, y: 0}
    }
  },
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
  ]
});