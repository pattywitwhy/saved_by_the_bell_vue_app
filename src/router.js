import Vue from 'vue';
import Router from 'vue-router';
import TemptationsIndex from './views/TemptationsIndex.vue';
import TemptationsEdit from './views/TemptationsEdit.vue';
import Graphs from './views/Graphs.vue';
import Login from './views/Login.vue';
import Goals from './views/Goals.vue';


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [

          { path: '/', name: 'home', component: TemptationsIndex },
          { path: '/temptations', name: 'temptations-index', component: TemptationsIndex },
          { path: '/temptations/:id/edit', name: 'temptations-edit', component: TemptationsEdit },
          { path: '/graphs', name: 'graphs', component: Graphs },
          { path: '/login', name: 'login', component: Login },
          { path: '/goals', name: 'goals', component: Goals }
          ]
})
