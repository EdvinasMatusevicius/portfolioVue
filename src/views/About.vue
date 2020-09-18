<template>
  <div class="about">
    <introduction></introduction>
    <skills></skills>
    <contact></contact>
    <div class="mobile-footer"></div>
  </div>
</template>
<script>
import icons from '@/partials/Icons.vue'
import introduction from '@/components/about/Introduction.vue'
import skills from '@/components/about/Skills.vue'
import contact from "@/components/about/Contact.vue"

export default {
  name:'about',
  components:{
    icons,
    introduction,
    skills,
    contact
  }
}
</script>

<style lang="scss" scoped>
  .about{
    overflow-y:scroll ;
    display: grid;
    grid-template-rows:auto auto auto;
  }
  .mobile-footer{
    display: none;
  }
  @media(max-width: 500px){
  .mobile-footer{
    display: block;
    height: 2rem;
  }
  }
</style>
