<template>
    <div>
        <img v-if="icon === 'html'" class="icon1" src="@/assets/html.svg" alt="">
        <img v-if="icon === 'css'" class="icon1" src="@/assets/css.svg" alt="">
        <sass-icon v-if="icon === 'sass'" class="sass"></sass-icon>
        <bootstrap-icon v-if="icon === 'bootstrap'" class="bootstrap"></bootstrap-icon>
        <java-script-icon v-if="icon === 'js'" class="js"></java-script-icon>
        <node-icon v-if="icon === 'node'" class="node"></node-icon>
        <img v-if="icon === 'vue'" class="icon1" src="@/assets/vue.svg" alt="">
        <php-icon v-if="icon === 'php'" class="php"></php-icon>
        <laravel-icon v-if="icon === 'laravel'" class="laravel"></laravel-icon>
        <git-icon v-if="icon === 'git'" class="git"></git-icon>
        <github-icon v-if="icon === 'github'"></github-icon>
        <img v-if="icon === 'ps'" class="icon1" src="@/assets/photoshop.svg" alt="">
        <img v-if="icon === 'illustrator'" class="icon1" src="@/assets/illustrator.svg" alt="">
        <img v-if="icon === 'mysql'" class="icon2" src="@/assets/mysql.svg" alt="">
        <img v-if="icon === 'mongodb'" class="icon1" src="@/assets/mongodb.svg" alt="">
        <img v-if="icon === 'linux'" class="icon1" src="@/assets/linux.svg" alt="">
        <img v-if="icon === 'nginx'" class="icon1" src="@/assets/nginx.svg" alt="">
        <open-icon v-if="icon === 'open'"></open-icon>
        <email v-if="icon === 'email'"></email>
        <phone v-if="icon === 'phone'"></phone>
    </div>
</template>

<script>
import CssIcon from 'vue-material-design-icons/LanguageCss3.vue';
import SassIcon from 'vue-material-design-icons/Sass.vue';
import BootstrapIcon from 'vue-material-design-icons/Bootstrap.vue';
import JavaScriptIcon from 'vue-material-design-icons/LanguageJavascript.vue';
import NodeIcon from 'vue-material-design-icons/Nodejs.vue';
import VueIcon from 'vue-material-design-icons/Vuejs.vue';
import PhpIcon from 'vue-material-design-icons/LanguagePhp.vue';
import LaravelIcon from 'vue-material-design-icons/Laravel.vue';
import GitIcon from 'vue-material-design-icons/Git.vue';
import GithubIcon from 'vue-material-design-icons/Github.vue';
import OpenIcon from 'vue-material-design-icons/OpenInApp.vue';
import Email from 'vue-material-design-icons/Email.vue';
import Phone from 'vue-material-design-icons/Cellphone.vue';


export default {
    name:'icons',
    props:['icon'],
    components:{
        CssIcon,
        SassIcon,
        BootstrapIcon,
        JavaScriptIcon,
        NodeIcon,
        VueIcon,
        PhpIcon,
        LaravelIcon,
        GitIcon,
        GithubIcon,
        OpenIcon,
        Email,
        Phone,
    }
}
</script>

<style>
    .material-design-icon.icon > .material-design-icon__svg{
        height: 2rem;
        width: 2rem;
    }
    .icon1{
        width: 1.6rem;
        height: 1.6rem;
    }
    .icon2{
        width: 3rem;
        height: 1.7rem;
    }
    .css{
        color: #276bbf;
    }
    .sass{
        color:#f152a2
    }
    .bootstrap{
        color: #6d0fb0;
    }
    .js{
        color:rgb(223, 223, 19);
    }
    .node{
        color:#18b018;
    }
    .vue{
        color:#20a279;
    }
    .php{
        color: #7377ad;
    }
    .laravel{
        color: #ff2d20;
    }
    .git{
        color: #e84d31;
    }
</style>