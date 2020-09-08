<template>
  <div class="card">
      <div class="technologies"><icon v-for="(icon,i) in card.icons" :key="i" :icon="icon"></icon> </div>
      <img src="@/assets/placeholder5.png" alt="">
      <div class="links"><card-button  v-for="(button,i) in card.buttons" :key="i" :button="button"></card-button></div>
      <div class="descriprion"><div class="descriprion__name">{{card.name}}</div><div>{{card.description}}</div></div>
  </div>
</template>

<script>
import icon from '@/partials/Icons.vue';
import cardButton from '@/components/project/CardBtn.vue'
export default {
    name:'project-card',
    props:['card'],
    components:{
        icon,
        cardButton
    },
}
</script>

<style lang='scss' scoped>
    .card{
        object-fit: cover;
        width: 100%;
    }
    .technologies{
        display: flex;
        flex-direction: row;
        justify-content:space-around;
        // padding-top: 0.3rem;
        // background: rgba(255, 255, 255, 0.05);
    }
    img{
        width: 100%;
    }
    .links{
        width: 100%;
        display: inline-flex;
        flex-wrap: wrap;
    }
    .descriprion{
        width:100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        text-align: center;
        background:#ffffff0d;
        padding-bottom: 1rem;
        margin-bottom: 1rem;
        &__name{
            margin:1rem 0;
        }
    }
</style>