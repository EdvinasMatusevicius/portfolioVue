<template>
  <div class="homeGrid">
    <!-- <div class="intro">Hello, I'm Edvinas Matusevičius full-stack developer.</div> -->
    <introduction class="intro"></introduction>
    <div class="title">Newest projects</div>
    <div class="project1">
      <project-card :card="card"></project-card>
    </div>
    <div class="project2">
      <img src="@/assets/placeholder5.png" alt="">
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
  //----------test data
   data(){
        return{
          card:{
            icons:['vue','laravel','mysql','linux','nginx'],
            buttons:[
              {
                name:'To website',
                icon:'open',
                classes:'blue width100',
                route:'#'
              },
              {
                name:'To github front-end',
                icon:'github',
                classes:'green width50',
                route:'https://github.com/EdvinasMatusevicius/serverpiVUE'
              },
                         {
                name:'To github back-end',
                icon:'github',
                classes:'orange width50',
                route:'https://github.com/EdvinasMatusevicius/serverpi'
              },
            ]
          }
        }
    },
  //------------------
  computed:{
    ...mapGetters({
      homeVisited:'homeVisited'
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
  .intro{
    grid-area: intro;
  }

  .title{
    grid-area: title;
    margin:0 auto;
    font-size: 1.3rem;
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
</style>
