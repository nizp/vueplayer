import Vue from 'vue'
import Router from 'vue-router'
import Index from './components/index';
import Rank from './components/rank';
import Plist from './components/plist';
import Singer from './components/singer';
import Info from './components/rank/info.vue';
import Pl from './components/plist/list.vue';
import Search from './components/search';
import SearchList from './components/search/list.vue';
import Songing from './components/app/songing.vue';
import Ceshi from './views/About.vue';
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
      path: '/plist/list/:id',
      name: 'Pl',
      component: Pl
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
    },
    {
      path: '/search',
      name: 'Search',
      component: Search,
    },
    {
      path: '/search/list/:name',
      name: 'SearchList',
      component: SearchList,
    },
    {
      path: '/ceshi',
      name: 'ceshi',
      component: Ceshi,
    },
    {
     path:'/songing',
     component : Songing
    }
    
  ]
})
