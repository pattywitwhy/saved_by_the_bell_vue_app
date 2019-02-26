import Vue from 'vue'
import Router from 'vue-router'
import TemptationsIndex from './views/TemptationsIndex.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
          { path: '/temptations', name: 'temptations-index', component: TemptationsIndex },
          ]
})
