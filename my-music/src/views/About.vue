<template>
  <div>
    <div @touchend="f" id="ffff">
    <mu-slider 
      class="demo-slider" 
      v-model="value1"
      @change="ff"
    ></mu-slider>
    </div>
    {{value1}}
    <audio 
      
      ref="el"
      autoplay 
      @timeupdate="dd"
      @play="ct"
      src="http://chipsguide.snaillove.com/Public/Uploads/file_server_storage/Audio/2017/03/23/19/192_20003137.mp3">
      
    </audio>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        value1:0,
        cTime:0,
        down:false
      }
    },
   
    updated(){
      // let t = this.$refs.el.currentTime; //当前的时间
      // let {value1,cTime} = this; //cTime总时间

      // let hs = (value1/100*cTime).toFixed(0);
      // t = t.toFixed(0)

      // if(hs == t){
      //   this.down = false;
      // }

      // console.log(hs,t)
     
    },
    methods:{
      f(){
        let {value1,cTime} = this;
        this.down = false;
        this.$refs.el.currentTime = (value1/100*cTime).toFixed(0)
        console.log(1);
      },
      ff(){
        this.down = true;
      },
      dd(e){

        // console.log(e.target.currentTime)
        // console.log( + '%')
        if(this.down)return



        this.value1 = (e.target.currentTime / this.cTime) * 100
      },
      ct(e){
        //总时间
        this.cTime = e.target.duration

        // console.log(e.target.duration,'lai')
        // setTimeout(()=>{
          
        // },1000)
      }
    },
    
  }
</script>

<style>
#ffff{
  width: 100%;
  height: 2rem;
  /* border: 1px solid #000 */
}
</style>