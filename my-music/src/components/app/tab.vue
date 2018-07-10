<template>
    <mu-tabs 
        :value="active" 
        inverse 
        text-color="#000" 
        center
        indicator-color="#58A5E6"
        full-width
        color="#58A5E6"
    >
        <mu-tab to="/">新歌</mu-tab>
        <mu-tab to="/rank">排行</mu-tab>
        <mu-tab to="/plist">歌单</mu-tab>
        <mu-tab to="/singer">歌手</mu-tab>
        
    </mu-tabs>
</template>

<script>
export default {
    name:"Tab",
    computed:{
        active(){
            switch(this.$route.path){
                case '/':
                    return 0
                case '/rank':
                    return 1
                case '/plist':
                    return 2
                case '/singer':
                    return 3
            }
        }
    }
}
</script>

<style>
.mu-tab-wrapper{
    font-size:1.1429rem;
}
</style>