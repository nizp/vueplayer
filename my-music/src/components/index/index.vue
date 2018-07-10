<template>
    <div id="indelist">
        <mu-paper :z-depth="1" class="demo-loadmore-wrap">
            <mu-list textline="three-line">
                <Carousel />
                <mu-list-item 
                    button 
                    v-for="val in list" 
                    @click="$store.dispatch('play',val.hash)"
                >
                    <mu-list-item-content>
                        <mu-list-item-title>{{val.filename}}</mu-list-item-title>
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
import Carousel from './carousel';
export default {
    name:'Index',
     created(){
        this.$store.commit('pboff');
    },
    mounted() {
        this.$store.dispatch('addJson');
    },
    data(){
        return{
            list:this.$store.state.indexData.list
        }
    },  
    components:{
        Carousel
    }
}
</script>

<style>
.d{
    padding-top:4.5rem; 
}
#indelist .demo-loadmore-wrap {
  width: 100%;
  height:40.3rem;
  display: flex;
  flex-direction: column;
  
}
#indelist .demo-loadmore-wrap .mu-appbar {
    width: 100%;
}
#indelist .mu-list{
    padding: 10px;
}
#indelist .mu-item-title{
    float: left;
    width:90%;
    font-size:1.2rem;
}
#indelist .mu-item-action{
    float: right;
    max-width:none;
    min-width:0 !important;
}


#indelist .mu-list li{
    border-bottom: 1px solid #ccc;
}
</style>