<template>
    <mu-tabs 
        :value.sync="active1" 
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
    data(){
        return {
            active1:0
        }
    }
}
</script>

<style>
.mu-tab-wrapper{
    font-size:1.1429rem;
}
</style>