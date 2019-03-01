import Vue from 'vue';
import Router from 'vue-router';
import TemptationsIndex from './views/TemptationsIndex.vue';
import TemptationsEdit from './views/TemptationsEdit.vue';
import Graphs from './views/Graphs.vue';
<<<<<<< HEAD
import Login from './views/Login.vue';
=======
import Goals from './views/Goals.vue';

>>>>>>> 7bc87b54a7a96bcb2eae8f4caf8ff7564172096d

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
          { path: '/temptations', name: 'temptations-index', component: TemptationsIndex },
          { path: '/temptations/:id/edit', name: 'temptations-edit', component: TemptationsEdit },
          { path: '/graphs', name: 'graphs', component: Graphs },
<<<<<<< HEAD
          { path: '/login', name: 'login', component: Login }
=======
          { path: '/goals', name: 'goals', component: Goals }
>>>>>>> 7bc87b54a7a96bcb2eae8f4caf8ff7564172096d
          ]
})
