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
    pbonoff:false, //控制显示或者隐藏
    pbhash:{},
    pbsetoff:false, //是否播放
    val:0,  //拖拽的value
    currentTime:0,
    el:null

  },
  mutations: {
    createEl(state,el){
      state.el = el;
    },
    addCurrentT(state,num){
      state.currentTime = num;
    },
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
    cgPbsetoff(state,b){
      state.pbsetoff = b;
    },
    pboff(state,of){
      state.pbsetoff = !!of;
      state.pbonoff = false;
    },
    //获取拖拽的value值
    addVal(state,val){
      state.val = val;
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
