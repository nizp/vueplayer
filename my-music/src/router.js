import Vue from 'vue'
import Router from 'vue-router'
import Index from './components/index';
import Rank from './components/rank';
import Plist from './components/plist';
import Singer from './components/singer';
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/rank',
      name: 'Rank',
      component: Rank
    },
    {
      path: '/plist',
      name: 'Plist',
      component: Plist
    },
    {
      path: '/singer',
      name: 'Singer',
      component: Singer
    }
  ]
})
