<template>
  <div class="body">
    <canvas id="canvas" :width="width" :height="height"></canvas>
    <div id="ship"></div>
  </div>

</template>

<script>
export default {
    name:'game-canvas',
    props:['width','height'],
    // data(){
    //     return{
    //         // canvas:document.getElementById("canvas"),
    //         // ctx:'',
    //     }
    // },
    // watch:{
    //     width: function(newVal){
    //         // console.log(newVal);
    //         // this.drawCanvas();

    //     },
    //     height: function(newVal){
    //         // console.log(newVal);
    //         // this.drawCanvas();
    //     },
        
    // },
    mounted(){
        this.canvas=document.getElementById("canvas"),
        this.ctx=this.canvas.getContext("2d")
        this.render();
    },
    methods:{
        render:function(){

            this.ctx.fillStyle = "blue";
            this.ctx.fillRect(0, 0, this.width, this.height);
            const ship = document.getElementById('ship');
            ship.style.top = `${this.height}px`;
            ship.style.left = `0px`;
            ship.style.width = `${this.width}px`;
            // ship.style.left = `${this.width + Math.floor(Math.random() * 100)}px`;
            requestAnimationFrame(this.render);
        }
    }
}

</script>

<style lang='scss' scoped>
    .body{
      overflow: hidden;
      width: auto;
      height:auto;
      position: relative;
    }

    .canvas{
        width: 100%;
        height:100%;
        position: absolute;
    }

    #ship{
    //   width: 2rem;
      height:1rem;
      position:fixed;
      background: rgb(154, 5, 5);
    }
</style>