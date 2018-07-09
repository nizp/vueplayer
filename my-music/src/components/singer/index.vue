<template>
    <div id="singer">
         <mu-paper :z-depth="1" class="demo-loadmore-wrap">
            <!-- <mu-list 
                textline="three-line"
                v-for="val in filterData" 
                v-for="key in val" 
            > -->
            <mu-list 
                textline="three-line"
            >
                <mu-list-item 
                    button 
                    :nested=true
                    v-for="val in filterData" 
                >
                        <mu-list-item>
                            <mu-list-item-content >
                                <mu-list-item-title></mu-list-item-title>
                                <mu-list-item-action>
                                    <mu-icon value="chevron_right" size="30"></mu-icon>
                                </mu-list-item-action>
                            </mu-list-item-content>
                        </mu-list-item>

                   
                   
                    <!-- <div class="s" v-for="key in val">
                        <mu-list-item-content >
                            <mu-list-item-title></mu-list-item-title>
                            <mu-list-item-action>
                                <mu-icon value="chevron_right" size="30"></mu-icon>
                            </mu-list-item-action>
                        </mu-list-item-content>
                    </div> -->
                   
                </mu-list-item>
            </mu-list>
        </mu-paper>
    </div>
</template>

<script>
import {songe as data} from '../../json.js';
    export default {
        name:"Singer",
        data(){
            return {
                list:[]
            }
        },
        async mounted(){
            //await async
            let d = await data.list;
            this.list.push(...d);
        },
        computed:{
            filterData(){
                let obj = {};
                this.list.forEach(e=>{
                    let name = e.classname.substr(0,2);
                    if(!obj[name]){
                        obj[name] = [];
                    }
                    obj[name].push(e);
                });
                return obj;
            }
        }
    }
</script>

<style lang="less">
#singer .mu-list li{
    border: 1px solid #ccc;
    border-radius: 10px;
    margin: 1rem .7143rem 1.0714rem;
    width:95%;
    padding:0;
    .s{
        border-bottom:1px solid #ccc;
        display: block;
        width:100%;
        
    }
}
#singer li:nth-last-child(1){
    border:none;
}
#singer .demo-loadmore-wrap {
  width: 100%;
  display: flex;
  flex-direction: column;
  .mu-appbar {
    width: 100%;
  }
}
</style>