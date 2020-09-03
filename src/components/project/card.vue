<template>
  <div class="card">
      <div class="technologies"><icon v-for="(icon,i) in card.icons" :key="i" :icon="icon"></icon> </div>
      <img src="@/assets/placeholder1.png" alt="">
      <div class="links"><card-button  v-for="(button,i) in card.buttons" :key="i" :button="button"></card-button></div>
      <div class="decription"></div>
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
        width: 100%
    }
    .technologies{
        display: flex;
        flex-direction: row;
        justify-content:space-around;
    }
    img{
        width: 100%;
    }
    .links{
        width: 100%;
        display: inline-flex;
    }
</style>