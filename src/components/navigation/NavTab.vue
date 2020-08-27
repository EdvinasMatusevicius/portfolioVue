<template>
  <div :class="'tab '+ tab.status">
      <nav-route :routeInfo="tab"></nav-route>
  </div>
</template>

<script>
import navRoute from '@/components/navigation/NavRouteBtn.vue'

export default {
    name:'navTab',
    props:['tab'],
    components:{
        navRoute
    }
}
</script>

<style>
    .tab{
        display:inline-block;
        height:100%;
        line-height: 3rem;
        margin-right: 1px;
    }
    .selected{
        background: #242424;
    }
    .deselected{
        background: #ffffff0d;
    }
</style>