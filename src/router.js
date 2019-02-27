import Vue from 'vue';
import Router from 'vue-router';
import TemptationsIndex from './views/TemptationsIndex.vue';
import TemptationsNew from './views/TemptationsNew.vue'
import Graphs from './views/Graphs.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
          { path: '/temptations', name: 'temptations-index', component: TemptationsIndex },
          { path: '/temptations/new', name: 'temptations-new', component: TemptationsNew },
          { path: '/graphs', name: 'graphs', component: Graphs }, 
          ]
})
