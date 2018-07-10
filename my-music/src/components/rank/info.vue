<template>
    <div id="info">
        <mu-paper :z-depth="1" class="demo-loadmore-wrap">
            <mu-list textline="three-line">
                <mu-card-media :title="img.rankname" sub-title="Image Sub Title">
                    <router-link to="/rank">
                        <mu-icon 
                            value="keyboard_arrow_left" 
                            class="gun"
                            size="50" color="#fff">
                        </mu-icon>
                    </router-link>
                    <img :src="img.imgurl?img.imgurl.replace(/{size}/,''):''">
                </mu-card-media>
                <mu-list-item 
                    button 
                    v-for="v in list"
                    @click="$store.dispatch('play',v.hash)"
                >
                    <mu-list-item-content>
                        <mu-list-item-title>{{v.filename}}</mu-list-item-title>
                        <mu-list-item-action>
                            <mu-icon value="play_for_work" size="30"></mu-icon>
                        </mu-list-item-action>
                    </mu-list-item-content>
                </mu-list-item>
                <div class="d"></div>
            </mu-list>
        </mu-paper>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name:"Info",
    data(){
        return {
            list:[],
            img:''
        }
    },
  async  mounted() {
        let id = this.$route.params.id || '666';
        let d = await axios.get('/api/rank/info/&json=true?rankid='+id)
        this.list = d.data.songs.list;
        this.img = d.data.info;
        // console.log(this.list)
    }
}
</script>

<style>
.d{
    padding-top:4.5rem; 
}
#info .demo-loadmore-wrap {
  width: 100%;
  height:40.3rem;
  display: flex;
  flex-direction: column;
}
.gun{
    position: absolute;
}
#info .demo-loadmore-wrap .mu-appbar {
    width: 100%;
}
#info .mu-list{
    padding: 10px;
}
#info .mu-item-title{
    float: left;
    width:90%;
    font-size:1.2rem;
}
#info .mu-item-action{
    float: right;
    max-width:none;
    min-width:0 !important;
}
#info .mu-card-media img{
    height: 16rem;
}
#info .mu-list li{
    border-bottom: 1px solid #ccc;
}
</style>