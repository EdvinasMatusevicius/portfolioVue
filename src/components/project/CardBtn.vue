<template>
    <!-- <div :class="'btn '+button.color"> -->
        <a :href="button.route" :class="'btn '+button.classes">
            <icon :icon="button.icon"></icon>
            <div>{{button.name}}</div>
        </a>
    <!-- </div> -->
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
        justify-content: center;
        align-items: center;
        text-decoration: none;
        color: white;
    }
    .width100{
        min-width: 100%;
    }
    .width50{
        min-width: 50%;
    }
    .green{
        background: rgb(2, 154, 88);
    }
    .orange{
        background: rgb(251, 152, 2);
    }
    .blue{
        background: rgba(0, 142, 202, 0.932);
    }
    @media (max-width: 1100px) {
        .width50{
            min-width: 100%;
        }
    }
</style>