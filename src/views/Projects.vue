<template>
  <div class="projects">
    <project-card v-for="(project,i) in projects" :key="i" :card="project" class="projects__card"></project-card>
  </div>
</template>

<script>
import projectCard from '@/components/project/card.vue'
import { mapGetters } from 'vuex'
export default {
  name:'projects',
  components:{
    projectCard
  },
  computed:{
    ...mapGetters({
      projects:'getProjects'
    })
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/styles/_variables.scss';

  .projects{
    padding: 1rem;
    display: grid;
    column-gap: 1rem;
    row-gap: 4rem;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  }
  @media(max-width: $mobileScreen){
  
    .projects>:last-child{
      padding-bottom: $lastChildPadding;
    }
  }
</style>