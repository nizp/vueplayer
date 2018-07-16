<template>
    <mu-appbar style="width: 100%;" class="nav" color="primary">
        <h1 id="logo">
            <img src="../../assets/images/logo.png" alt="">
        </h1>
        <router-link to="/search" tag="i">
            <mu-icon 
                class="search" 
                value="search" 
                size="30"
            ></mu-icon>
        </router-link>
    </mu-appbar>
</template>

<script>
    export default {
       name:"Nav" 
    }
</script>

<style>
.nav{
    position: relative;
}
#logo{
    float: left;
}
#logo img{
    width: 7.286rem;
    height: 1.67857rem;
    margin-left: .7143rem;
    background-size: 100%;
}
.search{
    margin: 40px 6px 0 0;
    float: right;
}
</style>