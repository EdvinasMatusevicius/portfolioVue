<template>
  <div class="skills">
      <h3>Quick overview of my skills</h3>
      <div class="skills__section">
          <div class="skills__column">
            <div class="skills__column-row">
              <span>Front end:</span>
              <icons class="icon" icon='html'></icons>
              <icons class="icon" icon='css'></icons>
              <icons class="icon" icon='sass'></icons>
              <icons class="icon" icon='js'></icons>
              <icons class="icon" icon='vue'></icons>
            </div>
            <div class="skills__column-row">
              <span>Back end:</span>
              <icons class="icon" icon='node'></icons>
              <icons class="icon" icon='php'></icons>
              <icons class="icon" icon='laravel'></icons>
            </div>
          </div>
          <div class="skills__column">
            <div class="skills__column-row">
              <span>Databases:</span>
              <icons class="icon" icon='mysql'></icons>
              <icons class="icon" icon='mongodb'></icons>
            </div>
            <div class="skills__column-row">
              <span>Other:</span>
              <icons class="icon" icon='linux'></icons>
              <icons class="icon" icon='nginx'></icons>
              <icons class="icon" icon='git'></icons>
              <icons class="icon" icon='ps'></icons>
              <icons class="icon" icon='illustrator'></icons>
            </div>
          </div>
      </div>
    </div>
</template>

<script>
import icons from '@/partials/Icons.vue'

export default {
    name:'skills',
    components:{
        icons
    }
}
</script>

<style lang="scss" scoped>
    .skills{
    // font-size: 1.3rem;
    padding: 1rem 0;
    font-weight: 100;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
        background: rgba(255, 255, 255, 0.1);

    &__section{
      width: 100%;
      display:flex;
      flex-direction: row;
      justify-content: space-around;
      flex-wrap: wrap;
    }
    &__column{
      &-row{
        font-size: 1rem;
        display:flex;
        flex-direction: row;
      }
    }
  }
</style>