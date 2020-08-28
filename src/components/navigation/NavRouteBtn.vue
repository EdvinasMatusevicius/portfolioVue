<template>
    <router-link class="routeLink" :to="routeInfo.route"><div class="routeBtn" @click="newTab({id:routeInfo.id})">
        <folder-multiple-outline-icon class="icon orange" v-if="routeInfo.name ==='My projects'"></folder-multiple-outline-icon>
        <home-icon class="icon green" v-if="routeInfo.name ==='Home'"></home-icon>
        <information-variant-icon class="icon yellow" v-if="routeInfo.name ==='About'"></information-variant-icon>
        {{routeInfo.name}}</div></router-link>
</template>

<script>
import { mapActions } from 'vuex'
import FolderMultipleOutlineIcon from 'vue-material-design-icons/FolderMultipleOutline.vue';
import HomeIcon from 'vue-material-design-icons/Home.vue';
import InformationVariantIcon from 'vue-material-design-icons/InformationVariant.vue';

export default {
    name:'navRouteBtn',
    props:['routeInfo'],
    components:{
        FolderMultipleOutlineIcon,
        HomeIcon,
        InformationVariantIcon
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
        padding: 0.3rem 0.5rem;
    }
    .material-design-icon.icon > .material-design-icon__svg{
        margin-right: 0.5rem;
        height: 1rem;
        width: 1rem;
    }
    .orange{
        color: #D16767;
    }
    .green{
        color:#078960;
    }
    .yellow{
        color: yellow;
    }
</style>