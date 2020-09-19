<template>
  <div class="homeGrid">
    <!-- <div class="intro">Hello, I'm Edvinas Matusevičius full-stack developer.</div> -->
    <introduction class="intro"></introduction>
    <div class="title">Newest projects</div>
    <div class="project1">
      <project-card :card="projects[0]"></project-card>
    </div>
    <div class="project2">
            <project-card :card="projects[1]"></project-card>
    </div>
    
  </div>
</template>

<script>

import icons from '@/partials/Icons.vue'
import introduction from '@/components/home/IntroductionAnimation.vue'
import projectCard from '@/components/project/card.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name:'home',
  components:{
    icons,
    introduction,
    projectCard
  },
  computed:{
    ...mapGetters({
      homeVisited:'homeVisited',
      projects:'getFrontPageProjects'
    })
  },
  methods:{
    ...mapActions({
      setHomeVisited:'homeVisited'
    })
  },
  beforeDestroy(){
    if(!this.homeVisited){
      this.setHomeVisited()
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/styles/_variables.scss';
  .intro{
    grid-area: intro;
  }

  .title{
    grid-area: title;
    margin:0 auto;
    font-size: 1.3rem;
    letter-spacing: 0.4rem;
  }
  .project1{
    grid-area: project1;
  }
  .project2{
    grid-area: project2;
  }
  .project2 img{
    object-fit: cover;
    width: 100%
  }
  .homeGrid{
    display:grid;
    grid-template-rows:3rem 6rem 4rem auto;
    grid-template-columns:auto 40% auto 40% auto;
    grid-template-areas: 
    ". . . . ."
    ". intro intro intro ."
    "title title title title title"
    ". project1 . project2 ."
    ;
  }
  .icon{
    margin: 0 0.3rem;
  }
    @media(max-width: $tabletScreen){
      .homeGrid{
        grid-template-rows:3rem 11rem 4rem auto 2rem auto;
        grid-template-columns:auto 90% auto;
        grid-template-areas: 
        ". . ."
        ". intro ."
        "title title title"
        ". project1 ."
        ". . ."
        ". project2 ."
        ;
      }
    }
    @media(max-width: $mobileScreen){
      .homeGrid{
        grid-template-rows:3rem 15rem 4rem auto 2rem auto;
      }
      .homeGrid>:last-child{
        padding-bottom: $lastChildPadding;
      }
    }

</style>
