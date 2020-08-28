<template>
    <router-link class="routeLink" :to="routeInfo.route"><div class="routeBtn" @click="newTab({id:routeInfo.id})"><folder-multiple-outline-icon class="icon"></folder-multiple-outline-icon>{{routeInfo.name}}</div></router-link>
</template>

<script>
import { mapActions } from 'vuex'
import FolderMultipleOutlineIcon from 'vue-material-design-icons/FolderMultipleOutline.vue';
export default {
    name:'navRouteBtn',
    props:['routeInfo'],
    components:{
        FolderMultipleOutlineIcon
    },
    methods:{
        ...mapActions({
            newTab:'openTab'
        })
    }
}
</script>

<style>
    .routeLink{
        text-decoration: none;
        font-weight: 100;
    }
    .routeBtn{
        padding: 0 1rem;
        color: white;
    }
    .material-design-icon.icon > .material-design-icon__svg{
        margin-right: 0.5rem;
        height: 1rem;
        width: 1rem;
    }
    .green{
        color: green;
    }
</style>