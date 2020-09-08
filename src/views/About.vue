<template>
  <div class="about">
    <introduction></introduction>
    <skills></skills>
    <contact></contact>
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
    display: grid;
    // grid-template-columns: repeat(auto-fill);
  }
</style>
