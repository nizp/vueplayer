<template>
  <div id="app">
    <Nav></Nav>
    <Tab></Tab>
    <Pb />
    <router-view/>
  </div>
</template>
<script>
import Nav from './components/app/nav';
import Tab from './components/app/tab';
import Pb from './components/app/playboy';
export default {
  name:'App',
  components:{
    Nav,
    Tab,
    Pb
  }
}
</script>

<style>
body,html{
  overflow-y: hidden;
}
</style>
