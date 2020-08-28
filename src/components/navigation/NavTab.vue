<template>
  <div :class="'tab '+ tab.status">
      <nav-route :routeInfo="tab"></nav-route>
      <close-icon class="tab__close" @click="closeTab({id:tab.id})" />
  </div>
</template>

<script>
import navRoute from '@/components/navigation/NavRouteBtn.vue'
import CloseIcon from 'vue-material-design-icons/Close.vue';
import { mapActions } from 'vuex';

export default {
    name:'navTab',
    props:['tab'],
    components:{
        navRoute,
        CloseIcon
    },
    methods:{
        ...mapActions({
            closeTab:'closeTab'
        })
    }
}
</script>

<style lang="scss">
    .tab{
        display:inline-flex;
        height:100%;
        align-items: center;
        margin-right: 1px;

        &__close{
            cursor: pointer;
            padding-right: 0.5rem;

        }
    }
    .selected{
        background: #242424;
    }
    .deselected{
        background: #ffffff0d;
    }
</style>