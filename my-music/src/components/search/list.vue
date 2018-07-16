<template>
    <div id="searchlist">
        <mu-appbar style="width: 100%;" color="#fff">
            <mu-button icon slot="left"  @click="$router.go(-1)">
                <mu-icon 
                    value="keyboard_arrow_left"
                    color="#999"
                    size="45"
                   
                ></mu-icon>
            </mu-button>
                搜索
            <mu-button flat slot="right"></mu-button>
        </mu-appbar>
        <div class="s">
            <input type="text" class="search" v-model="val">
           
            <mu-button 
                class="sbtn" 
                color="primary"
                :to="{path:`/search/list/${val}`}"
                >搜索
            </mu-button>
        </div>
        <mu-paper :z-depth="1" class="demo-loadmore-wrap">
            <mu-list textline="three-line">
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
import jsonp from 'fetch-jsonp';
export default {
    name:'SearchList',
     created(){
        this.$store.commit('pboff');
    },
    async mounted() {
        let name = this.$route.params.name;
        let d = await jsonp('http://mobilecdn.kugou.com/api/v3/search/song?format=jsonp&keyword='+ name +'&page=1&pagesize=30&showtype=1',{
            jsonpCallback:'callback'
        })
        let json = await d.json();

        this.list = json.data.info;
        console.log(this.list);

        
    },
    data(){
        return{
            list:[],
            val:this.$route.params.name
        }
    },

}
</script>

<style>
.d{
    padding-top:4.5rem; 
}
#searchlist .demo-loadmore-wrap {
  width: 100%;
  height:40.3rem;
  display: flex;
  flex-direction: column;
  
}
#searchlist .demo-loadmore-wrap .mu-appbar {
    width: 100%;
}
#searchlist .mu-list{
    padding: 10px;
}
#searchlist .mu-item-title{
    float: left;
    width:90%;
    font-size:1.2rem;
}
#searchlist .mu-item-action{
    float: right;
    max-width:none;
    min-width:0 !important;
}


#searchlist .mu-list li{
    border-bottom: 1px solid #ccc;
}

#searchlist .mu-appbar-title{
    color:#000;
    text-align: center;
}
.s{
    width: 88%;
    height: 56px;
    margin: 1rem auto 0;
}
#searchlist .search {
    width: 70%;
    padding: .4rem .0714rem .4rem 1.7rem;
    margin-right: 3%;
    border: 1px solid #000;
    border-radius: 5px;
    float: left;
    margin: 0;
}
#searchlist .sbtn{
    width: 17.25%;
    height: 2.2rem;
    line-height: 2.0714rem;
    border: none;
    border-radius: 5px;
    text-align: center;
    float: left;
    margin-left: .4rem;
}
</style>