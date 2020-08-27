<template>
    <router-link :to="routeInfo.route"><div class="routeBtn" @click="newTab({id:routeInfo.id})">{{routeInfo.name}}</div></router-link>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name:'navRouteBtn',
    props:['routeInfo'],
    methods:{
        ...mapActions({
            newTab:'openTab'
        })
    }
}
</script>

<style>
    .routeBtn{
        padding: 0 1rem;
        color: white;
    }
</style>