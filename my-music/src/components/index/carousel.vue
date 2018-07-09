<template>
    <mu-carousel :cycle=false>
        <mu-carousel-item v-for="val,key in list">
            <img :src="val.imgurl">
        </mu-carousel-item>
    </mu-carousel>
</template>

<script>
    export default {
        name:"Carousel",
        data(){
            return {
                list:this.$store.state.indexData.banner
            }
        }
    }
</script>

<style>
.mu-carousel,.mu-carousel img{
    height:12rem !important;
}
</style>