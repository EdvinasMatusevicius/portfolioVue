<template>
  <div class="contact">
        <h3>Contact info</h3>
        <div class="contact__content">
            <div class="contact__line"><icon icon='email'></icon><p>edvinas2121@hotmail.com</p></div>
            <div class="contact__line"><icon icon='phone'></icon><a class="mobile-link" href="tel:+37068132481">+37068132481</a></div>
        </div>
  </div>
</template>

<script>
import icon from "@/partials/Icons.vue"

export default {
    name:'contact',
    components:{
        icon
    }
}
</script>

<style lang="scss" scoped>
    .contact{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        padding: 1rem 0;
        &__line{
            display:inline-flex;
            align-items: center;
            margin-left: 1rem;
        }
        &__content{
        height:5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        }
    }
    .mobile-link{
        text-decoration: none;
        color: white;
    }
</style>