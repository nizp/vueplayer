<template>
    <div id="rank">
        <mu-paper :z-depth="1" class="demo-loadmore-wrap">
        <mu-list>
            <router-link 
                v-for="val in list"
                :to="{'path':'/rank/info/'+val.rankid}"
            >
                <mu-list-item 
                    avatar 
                    button 
                    :ripple="false"
                    
                >
                    <mu-list-item-action>
                        <mu-avatar size="100">
                            <img :src="val.imgurl.replace(/{size}/,'')">
                        </mu-avatar>
                    </mu-list-item-action>
                    <mu-list-item-title>{{val.rankname}}</mu-list-item-title>
                    <mu-list-item-action>
                        <mu-icon 
                            value="chevron_right"
                            size="45"
                        ></mu-icon>
                    </mu-list-item-action>
                </mu-list-item>
            </router-link>
            <div class="d"></div>
        </mu-list>
        
        </mu-paper>
    </div>
</template>
<script>
import {list as data} from '../../json.js';
    export default {
        name:'Rank',
        data(){
            return {
                list:[]
            }
        },
        created(){
            this.$store.commit('pboff');
        },
        async mounted(){
            //await async
            let d = await data.rank.list;
            this.list.push(...d);
        }
    }
</script>

<style lang="less">
#rank .demo-loadmore-wrap {
  width: 100%;
  height: 42rem;
  display: flex;
  flex-direction: column;
  .mu-appbar {
    width: 100%;
  }
}
#rank .mu-avatar,#rank .mu-avatar img{
    border-radius:0;
}
#rank li{
    height: 9.5rem;
    border-bottom: 1px solid #ccc;
}
#rank .mu-item-action{
    width:100%;
    min-width:0;
}
#rank .mu-item-wrapper,#rank .mu-item.has-avatar{
    height: 100%;
}
#rank .mu-item-title{
    font-size:1.5rem;
}
</style>