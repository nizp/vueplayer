import Vue from 'vue'
import Router from 'vue-router'
import Index from './components/index';
import Rank from './components/rank';
import Plist from './components/plist';
import Singer from './components/singer';
import Info from './components/rank/info.vue';

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
    },
    {
      path: '/rank/info/:id',
      name: 'Info',
      component: Info,
    }
    
  ]
})
