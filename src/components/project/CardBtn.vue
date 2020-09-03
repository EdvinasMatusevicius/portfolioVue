<template>
    <div :class="'btn '+button.color">
        <icon :icon="button.icon"></icon>
        <div>{{button.name}}</div>
    </div>
</template>

<script>
import icon from '@/partials/Icons.vue'
export default {
    name:'card-button',
    props:['button'],
    components:{
        icon
    }
}
</script>

<style lang="scss"  scoped>
    .btn{
        padding: 0.2rem 0;
        display: flex;
        flex-direction: row;
        min-width: 50%;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
    .green{
        background: rgb(2, 154, 88);
    }
    .blue{
        background: rgba(0, 142, 202, 0.932);
        
    }
</style>