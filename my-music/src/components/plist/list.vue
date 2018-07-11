<template>
    <div id="pl">
        <mu-paper :z-depth="1" class="demo-loadmore-wrap">
            
            <mu-list textline="three-line">
                <mu-card-media :title="title" sub-title="Image Sub Title">
                    <router-link to="/rank">
                        <mu-icon 
                            value="keyboard_arrow_left" 
                            class="gun"
                            size="50" color="#fff">
                        </mu-icon>
                    </router-link>
                    <img :src="img">
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
import {songpage} from '../../json.js';
export default {
    name:"Pl",
    data(){
        return {
            list:[],
            img:'',
            title:''
        }
    },
  async  mounted() {
        let id = this.$route.params.id || 0;
        // let d = await axios.get('/api/rank/info/&json=true?rankid='+id)
        let d = songpage.plist.list.info[id*1];

        this.list = d.songs;
        // this.list = d.songs.list;
        this.img = d.imgurl.replace(/{size}/,'');
        this.title = d.specialname;
        // this.img = d.data.info;
        console.log(d)
    }
}
</script>

<style>
.d{
    padding-top:4.5rem; 
}

#pl .demo-loadmore-wrap {
  width: 100%;
  height:40.3rem;
  display: flex;
  flex-direction: column;
}
.gun{
    position: absolute;
}
#pl .demo-loadmore-wrap .mu-appbar {
    width: 100%;
}
#pl .mu-list{
    padding: 10px;
}
#pl .mu-item-title{
    float: left;
    width:90%;
    font-size:1.2rem;
}
#pl .mu-item-action{
    float: right;
    max-width:none;
    min-width:0 !important;
}
#pl .mu-card-media{
    overflow: hidden;
    height: 14rem;
}
#pl .mu-card-media img{
    width:22.2rem;
    margin-top:-2rem;
}
#pl .mu-list li{
    border-bottom: 1px solid #ccc;
}
#pl .mu-card-media-title .mu-card-title{
    font-size:20px;
}
</style>