<template>
    <div class="navBar">
        <div class="introduction">
            <span class="introduction__name">Edvinas Matusevičius</span>
            <span class="introduction__spec">Full stack programing</span>
        </div>
        <nav-route v-for="route of routeArr" :key="route.id" :routeInfo="route"></nav-route>

    </div>
</template>

<script>
// import { computed } from 'vue'
import navRoute from '@/components/navigation/NavRouteBtn.vue'
import {mapGetters} from 'vuex'
export default {
    name:'navBar',
    components:{
        navRoute
    },
    computed:{
        ...mapGetters({
            routeArr:'getNavRoutes'
        })
    }
}
</script>

<style lang="scss">
    .navBar{
        grid-area: navbar;
        background: #ffffff0d;
    }
    .introduction{
        height: 6rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding-left:1rem;
        &__spec{
            font-size: 1.2rem;
        }
    }
</style>