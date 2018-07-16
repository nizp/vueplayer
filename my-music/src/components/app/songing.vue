<template>
    <div id="songing">
       
            <mu-appbar 
                class="back" 
                style="width: 100%;" 
                color="0"
            >
                <mu-button icon slot="left" @click="$router.go(-1)">
                    <mu-icon size="45" value="keyboard_arrow_left"></mu-icon>
                </mu-button>
                {{hashData.songName}}
                <mu-button flat slot="right"></mu-button>
            </mu-appbar>
        
        <div class="img">
            <img :src="hashData.imgUrl">
        </div>
        <div class="slider">
            <span class="l">{{currentT}}</span>
            <div class="c"
                @touchend="end"
            >
                <mu-slider 
                    class="demo-slider" 
                    v-model="value1"
                    @change="move"
                ></mu-slider>
            </div>
            <span class="r">{{listenTimeL}}</span>
        </div>
        <div class="onoff">
            <mu-icon 
                v-if="num==false"
                size="36" 
                value="play_arrow"
                @click="fn"
                color="#fff"
            ></mu-icon>
                <mu-icon 
                v-else
                size="36" 
                value="pause"
                color="#fff"
                @click="fn"
            ></mu-icon>
        </div>

        <div class="bg":style="{'background-image':'url('+ hashData.imgUrl +')'}"></div>
        <div class="mask"></div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                value1:0,
                timeL:0,
                ismove:false,
                num:!this.$store.state.pbsetoff
            }
        },
        created(){
            this.$store.commit('pboff',true);
            this.timeL = this.$store.state.pbhash.timeLength; 
            // console.log()

        },
        methods:{
            fn(){
                this.num = !this.num;
                if(this.num){
                    console.log(this.$store.state.el)
                    this.$store.state.el.play();
                }else{
                    this.$store.state.el.pause();
                }
            },
            end(){
                let {value1,timeL} = this;

                this.$store.state.el.currentTime = value1/100*timeL;

                this.ismove = false;
                // console.log()
            },
            move(){
                this.ismove = true;
            },
            toD(n){
                return n<10?'0'+n:''+n;
            },
            //换算总时长的时间
            huansuan(timeL){
                let {toD} = this;
                let s = Math.floor(timeL / 60);
                let m = Math.floor(timeL%60); 
                return toD(s)+':'+toD(m);
            }
        },
        computed:{
            //当前滚动的时间
            currentT(){
                let {timeL,value1,ismove} = this;
                let t = this.$store.state.currentTime; //当前的时间
                if(!ismove){
                    this.value1 = (t / timeL) * 100
                }
                return this.huansuan(this.$store.state.currentTime);
            },
            //当前歌曲总时间
            listenTimeL(){
                let {huansuan,timeL} = this;
                return huansuan(timeL);
            },
            hashData(){
                let hash = this.$store.state.pbhash;
                return {
                    songName:hash.songName,
                    imgUrl:hash.imgUrl?hash.imgUrl.replace(/{size}/,'200'):''
                }
            }
        }
        
    }
</script>

<style lang="less">
#songing{
    height:100vh;
}
#songing .onoff{
    position: relative;
    top:2rem;
    z-index: 666;
    i{
        margin-left: -8rem;
        
    }
}
.bg{
    background-repeat:no-repeat;
    background-size:cover;
    background-position:center top;
    filter:blur(10px);
    height:100vh;
    width:100vw;
    position: absolute;
    top:0;
}
#songing .back{
    position: relative;
    background: none;
    box-shadow: none;
}
#songing .mask{
    position: absolute;
    top:0;
    left:0;
    height:100vh;
    width:100vw;
    background:rgba(0,0,0,.6)
}
#songing .mu-appbar-title{
    text-align: center;
    font-size:16px;
}
#songing .img{
    width: 10.7143rem;
    height: 10.7143rem;
    margin: 1.4286rem auto;
    position: relative;
    z-index: 10;
    // border-radius:50%;
    overflow: hidden;
    img{
        width:100%
    }
}
#songing .slider{
    width:90%;
    margin: 0 auto;
    position: relative;
    z-index:88;
    color: #fff;
    .l{
        float: left;
    }
    .r{
        float:right;
    }
    .c{
        width:70%;
        float: left;
        height: 1.4rem;
        // background:#fff;
        margin-left:.7rem;
    }
}
</style>