<template>
    <div class="navTabs">
        <nav-tab v-for="tab of tabs" :key="tab.id" :tab="tab"></nav-tab>
    </div>
</template>

<script>
import navTab from '@/components/navigation/NavTab.vue'
import { computed } from 'vue'
import { mapGetters } from 'vuex'
export default {
name:'navTabs',
components:{
    navTab
},
computed:{
    ...mapGetters({
        tabs:'getTabs'
    })
}
}
</script>

<style lang='scss'>
  @import '../../assets/styles/_variables.scss';

    .navTabs{
        grid-area: navtabs;
        background: #ffffff0d;
    }
    @media(max-width: $mobileScreen){
        .navTabs{
            display:none;
        }
    }
</style>