<template>
    <div id="plist">
        <mu-paper :z-depth="1" class="demo-loadmore-wrap">
        <mu-list>
            <router-link 
                :to="{'path':`/plist/list/${key}`}"
                v-for="val,key in list"
            >
            <mu-list-item
                avatar 
                button 
                :ripple="true"
                
            >
                <mu-list-item-action>
                    <mu-avatar size="100">
                        <img :src="val.imgurl.replace(/{size}/,'')">
                    </mu-avatar>
                </mu-list-item-action>
                <mu-list-item-title>{{val.specialname}}</mu-list-item-title>
                <mu-list-item-action>
                    <mu-icon 
                        value="chevron_right"
                        size="45"
                    ></mu-icon>
                </mu-list-item-action>
                <div class="headset">
                    <mu-icon 
                        value="headset"
                        size="20"
                    ></mu-icon>
                    <span>{{val.playcount}}</span>
                </div>
            </mu-list-item>
            </router-link>
        </mu-list>
        </mu-paper>
    </div>
</template>
<script>
import {songpage as data} from '../../json.js';
    export default {
        name:'Plist',
        created(){
            this.$store.commit('pboff');
        },
        data(){
            return {
                list:[]
            }
        },
       async mounted(){
            //await async
            let d = await data.plist.list.info;
            console.log(d);
            this.list.push(...d);
        }
    }
</script>

<style lang="less">
#plist .headset{
    position: absolute;
    top: 5.5rem;
    left: 9rem;
    width: 30%;
    span{
        float: left;
        margin-left:1rem;
        color:#9b9b9b;
        font-size:1rem;
    }
    i{
        float: left;
        color:#9b9b9b;
    }
}
#plist .demo-loadmore-wrap {
  width: 100%;
  height: 42rem;
  display: flex;
  flex-direction: column;
  .mu-appbar {
    width: 100%;
  }
}
#plist .mu-avatar,#plist .mu-avatar img{
    border-radius:0;
}
#plist li{
    height: 7.5rem;
    border-bottom: 1px solid #ccc;
}
#plist .mu-item-action{
    width:100%;
    min-width:0;
}
#plist .mu-item-wrapper,#plist .mu-item.has-avatar{
    height: 100%;
}
#plist .mu-item-title{
    font-size:1.5rem;
}
</style>