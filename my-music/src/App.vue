<template>
  <div id="app">
    <Nav></Nav>
    <Tab v-show="toggleTab"></Tab>
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
  },
  computed:{
    toggleTab(){
      let arr = ['/rank/info/','plist/list/','/search','/songing']; 
      let path = this.$route.path; 
      let re = new RegExp(arr.join('|'));
      return !re.test(path);
    }
  }

}
</script>

<style>
body,html{
  overflow-y: hidden;
}
</style>
