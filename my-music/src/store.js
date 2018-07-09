import Vue from 'vue'
import Vuex from 'vuex';
import {json, list ,songpage,songe} from './json';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    indexData:{
      banner:[],
      list:[]
    }
  },
  mutations: {
    addList(state,data){
      state.indexData.list.push(...data);
    },
    addBanner(state,data){
      state.indexData.banner.push(...data);
    }
  },
  actions: {
    addJson({commit}){
        if(this.state.indexData.banner.length)return;
        commit('addList',json.data);
        commit('addBanner',json.banner);
    }
  }
})
