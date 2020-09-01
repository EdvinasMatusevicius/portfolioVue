<template>
    <div class="wrapper">
        <div class="letters">
            <span class="container" v-for="(letterArr,i) in randomText" :key="i"><p :class="setClass()">{{letterArr}}</p></span>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name:'intro-animation',
    data(){
        return{
            finalText:"Hello, I'm Edvinas Matusevičius full-stack developer.",
            randomText: [],
            randomLetters:"abcdefghijklmnopqrstuvws1234567890",
            maskLetterNumb:7
        }
    },
    created(){
        this.randomText = this.fillRandonTxt();
    },
    computed:{
        ...mapGetters({
            homeVisited:'homeVisited'
        })
    },
    methods:{
        fillRandonTxt(){
            const textContainer = [];
            for (let i = 0; i < this.finalText.length; i++) {
                for (let i2 = 0; i2 < this.maskLetterNumb; i2++) {
                    const randomLetterIndex = Math.floor(Math.random() * Math.floor(this.randomLetters.length));
                    if(textContainer[i]){
                        textContainer[i] += (this.maskLetterNumb-1 === i2 ? this.finalText[i] : this.randomLetters[randomLetterIndex]);
                    }else{
                        textContainer[i]=this.randomLetters[randomLetterIndex];
                    }
                }
                
            }
            return textContainer;
        },
        setClass(){
            if(!this.homeVisited){
                return this.selectRandomCLass()
            }else{
                return 'container__letter'
            }
        },
        selectRandomCLass(){
            const animationClassList = ['container__letter-anim1','container__letter-anim2','container__letter-anim3','container__letter-anim4'];
            const randomIndex = Math.floor(Math.random() * animationClassList.length);
            return animationClassList[randomIndex];
        }
    }
}
</script>

<style lang='scss' scoped>
    $animation1: 1s;
    $animation2: 0.7s;
    $animation3: 0.4s;
    $animation4: 1.3s;
    $transform: -600%;
    @keyframes slideUp {
      0% {
        transform: translateX(0%);
      }
      100% {
        transform: translateY(#{$transform});
      }
    }
    .container{
        
        height: 1.5rem;
        overflow-y: hidden;
        overflow-x: visible;
        font-size: 1.5rem;
        writing-mode: vertical-rl;
        text-orientation: upright;
        line-height: 1rem;
        &__letter{
                transform: translateY(#{$transform});
            &-anim1{
                animation: #{$animation1} ease-out 0s  slideUp;
                transform: translateY(#{$transform});
            }
            &-anim2{
                animation: #{$animation2} ease-out 0s  slideUp;
                transform: translateY(#{$transform});
            } 
            &-anim3{
                animation: #{$animation3} ease-out 0s  slideUp;
                transform: translateY(#{$transform});
            }         
            &-anim4{
                animation: #{$animation4} ease-out 0s  slideUp;
                transform: translateY(#{$transform});
            }
        }
    }
</style>