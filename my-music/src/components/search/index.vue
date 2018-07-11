<template>
    <div id="search">
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
            <mu-list>
                <mu-list-item 
                    avatar 
                    button 
                    v-for="val in list"
                >
                <mu-list-item-title>{{val.keyword}}</mu-list-item-title>
                </mu-list-item>
                
            </mu-list>
        </mu-paper>
    </div>
</template>

<script>
import jsonp from 'fetch-jsonp';
    export default {
        name:"Search",
        data(){
            return {
                list:[],
                val:'讲真'
            }
        },
        created() {
            this.$store.commit('pboff');
            jsonp('http://mobilecdn.kugou.com/api/v3/search/hot?format=jsonp&plat=0&count=30',{
                jsonpCallback:'callback'
            })
            .then(e=>e.json())
            .then(data=>{
                this.list = data.data.info;
                console.log(data)
            })

        },
    }
</script>

<style lang="less">
#search .mu-appbar-title{
    color:#000;
    text-align: center;
}
.s{
    width: 88%;
    height: 56px;
    margin: 1rem auto 0;
}
#search .search {
    width: 70%;
    padding: .4rem .0714rem .4rem 1.7rem;
    margin-right: 3%;
    border: 1px solid #000;
    border-radius: 5px;
    float: left;
    margin: 0;
}
#search .sbtn{
    width: 17.25%;
    height: 2.2rem;
    line-height: 2.0714rem;
    border: none;
    border-radius: 5px;
    text-align: center;
    float: left;
    margin-left: .4rem;
}
#search li{
    border-bottom: 1px solid #999;
}
#search .demo-loadmore-wrap {
  width: 100%;
  max-width: 360px;
  height: 420px;
  display: flex;
  flex-direction: column;
  .mu-appbar {
    width: 100%;
  }
}

</style>