import Vue from 'vue'
import Vuex from 'vuex';
import {json, list ,songpage,songe} from './json';
import axios from 'axios';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    indexData:{
      banner:[],
      list:[]
    },
    pbonoff:false,
    pbhash:{}
  },
  mutations: {
    addList(state,data){
      // console.log(data)
      state.indexData.list.push(...data);
    },
    addBanner(state,data){
      state.indexData.banner.push(...data);
    },
    pbon(state,data){
      state.pbonoff = true;
      state.pbhash = data;
    },
    pboff(state){
      state.pbonoff = false;
    }
  },
  getters:{
    changeoff:state=>{
      return !!state.pbhash;
    }
  },
  actions: {
    addJson({commit}){
        if(this.state.indexData.banner.length)return;
        commit('addList',json.data);
        commit('addBanner',json.banner);
    },
    play({commit},hash){
      axios.get('/api/app/i/getSongInfo.php?cmd=playInfo&hash='+hash)
      .then((data)=>{
        console.log(data.data);
        commit('pbon',data.data);
      });
    }
  }
})
