<template>
  <div id="app">
    <nav-bar></nav-bar>
    <nav-tabs></nav-tabs>
    <router-view class="content"></router-view>
  </div>
</template>

<script>
import navBar from '@/partials/NavBar.vue';
import navTabs from '@/partials/NavTabs.vue';

export default {
  name:'app',
  components:{
    navBar,
    navTabs
  }

}
</script>

<style lang="scss">
  *{
    margin:0px;
    padding:0px;
  }
  .content{
    grid-area: content;
    // overflow-y: scroll;
  }
  #app {
    width:100vw;
    height:100vh;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #ebebeb;
    background: #242424;
    display: grid;
    grid-template-rows: 3rem auto;
    grid-template-columns: 15rem auto;
    grid-template-areas: 
    "navbar navtabs"
    "navbar content"
    ;
  }
</style>
