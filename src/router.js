import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import TemptationsEdit from './views/TemptationsEdit.vue';
import Graphs from './views/Graphs.vue';
import Login from './views/Login.vue';
import Signup from "./views/Signup.vue";


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [

          { path: '/', name: 'home', component: Home },
          { path: '/temptations/:id/edit', name: 'temptations-edit', component: TemptationsEdit },
          { path: '/graphs', name: 'graphs', component: Graphs },
          { path: '/login', name: 'login', component: Login },
          { path: "/signup", name: "signup", component: Signup }
          ]
})
