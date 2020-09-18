<template>
    <div class="wraper">
        <div class="word" v-for="(wordArr,index) in randomText" :key="index">
            <span class="container" v-for="(letterArr,i) in wordArr" :key="i">
                <!-- <p :class="setClass()">{{letterArr}}</p> -->
                <div :class="'container__letter-arr '+ setClass()">
                    <div class="text-align container__letter-individual" v-for="(letter,i) in letterArr" :key="i">{{letter}}</div>
                </div>
            </span>
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
            let wordIndex = 0;
            let wordLetterIndex =0;
            for (let i = 0; i < this.finalText.length; i++) {
                if(textContainer[wordIndex]){
                    wordLetterIndex +=1;
                }else{
                     wordLetterIndex = 0;
                     textContainer[wordIndex] = [];
                }
                
                for (let i2 = 0; i2 < this.maskLetterNumb; i2++) {
                    const randomLetterIndex = Math.floor(Math.random() * Math.floor(this.randomLetters.length));
                    if(textContainer[wordIndex][wordLetterIndex]){
                        textContainer[wordIndex][wordLetterIndex] += (this.maskLetterNumb-1 === i2 ? this.finalText[i] : this.randomLetters[randomLetterIndex]);
                    }else{
                        textContainer[wordIndex][wordLetterIndex]=this.randomLetters[randomLetterIndex];
                    }
                }
                if(this.finalText[i] === ' '){ wordIndex += 1;}
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
    $animation1: 1.2s;
    $animation2: 0.8s;
    $animation3: 0.4s;
    $animation4: 1.8s;
    $transform: -755%;
    @mixin transformBrowsers {
        transform: translateY(#{$transform});
    }
    @keyframes slideUp {
      0% {
        transform: translateY(0%);
      }
      100% {
        @include transformBrowsers;
      }
    }
    .wraper{
        display:flex;
        flex-wrap: wrap;
        height: 1.5rem;

    }
    .container{
        display: inline-flex;
        height: 1.5rem;
        overflow: hidden;
        font-size: 1.5rem;
        &__letter-arr{
            display: flex;
            flex-direction: column;
            margin-right: 2px;
            height: 1.5rem;
        }
        &__letter{
            @include transformBrowsers;
            &-individual{
                height: 1.5rem;
                margin-top: 5px;
            }
            &-anim1{
                animation: #{$animation1} ease-out 0s  slideUp;
                @include transformBrowsers;
            }
            &-anim2{
                animation: #{$animation2} ease-out 0s  slideUp;
                @include transformBrowsers;
            } 
            &-anim3{
                animation: #{$animation3} ease-out 0s  slideUp;
                @include transformBrowsers;
            }         
            &-anim4{
                animation: #{$animation4} ease-out 0s  slideUp;
                @include transformBrowsers;
            }
        }
    }
    .text-align{
        text-align: center;
    }
</style>