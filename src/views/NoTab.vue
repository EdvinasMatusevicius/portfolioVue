<template>
  <div class="placeholder">
      <h2>Thank you for checking out my portfolio. It's made using Vue.js</h2>
  </div>

  <!-- <div class="game-container">
    <game-canvas v-if="width>0" :width="width" :height="height"></game-canvas>
  </div> -->
</template>

<script>
import gameCanvas from '@/components/noTab/GameCanvas.vue'
export default {
    name:'notab',
    components:{
      gameCanvas
    },
    data(){
        return{
            width:0,
            height:0,
        }
    },
    created() {
        // window.addEventListener("resize", this.checkDimentions);
    },
    mounted(){
        // this.checkDimentions()
    },
    methods: {
        checkDimentions(e) {
            this.width = document.querySelector('.game-container').offsetWidth;
            this.height = document.querySelector('.game-container').offsetHeight;
      }
    },
    destroyed() {
      // window.removeEventListener("resize", this.checkDimentions);
    },
}
</script>

<style lang="scss" scoped>
  .placeholder{
    width: auto;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .game-container{
    // overflow: hidden;
    width: auto;
    height:auto;
  }
</style>