<template>
  <div id="app">
    <Nav></Nav>
    <Tab></Tab>
    
    <router-view/>
  </div>
</template>
<script>
import Nav from './components/app/nav';
import Tab from './components/app/tab';
export default {
  name:'App',
  components:{
    Nav,
    Tab
  }
}
</script>

<style>
body{
  overflow-y: hidden;
}
</style>
