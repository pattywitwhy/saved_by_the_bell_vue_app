import Vue from 'vue';
import Router from 'vue-router';
import TemptationsIndex from './views/TemptationsIndex.vue';
import Graphs from './views/Graphs.vue';
import Login from './views/Login.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
          { path: '/temptations', name: 'temptations-index', component: TemptationsIndex }, 
          { path: '/graphs', name: 'graphs', component: Graphs }, 
          { path: '/login', name: 'login', component: Login }
          ]
})
