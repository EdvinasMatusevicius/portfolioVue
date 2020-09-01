<template>
    <div class="wrapper">
        <div class="letters">
            <span class="letter" v-for="(letterArr,i) in randomText" :key="i"><p>{{letterArr}}</p></span>
        </div>
    </div>
</template>

<script>
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
    }
}
</script>

<style lang="scss" scoped>
    @keyframes slideUp {
      0% {
        transform: translateX(0%);
      }
      100% {
        transform: translateY(-600%);
      }
    }
    .letter{
        
        height: 1.5rem;
        overflow-y: hidden;
        overflow-x: visible;
        font-size: 1.5rem;
        writing-mode: vertical-rl;
        text-orientation: upright;
        & p{
            animation: 1s ease-out 0s  slideUp;
            transform: translateY(-600%);
            line-height: 1rem;
            // add loded var in vuex  and add animation class with mounted()
        }
    }
</style>