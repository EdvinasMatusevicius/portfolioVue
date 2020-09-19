import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navigationRoutes:[
      {
        id:1,
        name:'Home',
        route:'/',
      },
      {
        id:2,
        name:'My projects',
        route:'/projects',
      },
      {
        id:3,
        name:'About',
        route:'/about',
      },
    ],
    tabs:[],
    homeVisited:false,
    projects:[
      {
        frontPage:true,
        name:'ServerPi',
        icons:['html','sass','js','vue','laravel','mysql','linux','nginx'],
        image:require('@/assets/serverpi.png'),
        buttons:[
          {
            name:'To website',
            icon:'open',
            classes:'blue width100',
            route:'http://www.serverpi.ddns.me/'
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
        ],
        description:'Website to quickly deploy pure PHP7.3, Laravel, Vue.js or static websites from your github repository on raspberry PI runing Debian GNU/Linux. (In development)'
      },
      {
        frontPage:true,
        name:'Darbo bazė',
        icons:['html','sass','js','node','mongodb'],
        image:require('@/assets/darboBaze.png'),
        buttons:[
          {
            name:'To website',
            icon:'open',
            classes:'blue width100',
            route:'http://darbo-baze.ddns.me/'
          },
          {
            name:'To github',
            icon:'github',
            classes:'green width100',
            route:'https://github.com/EdvinasMatusevicius/darbo-baze'
          }
        ],
        description:'Job search website that scrapes job posting websites for jobs fitting set criteria'
      },
      {
        frontPage:true,
        name:'Basic chat',
        icons:['html','css','js','node','mongodb'],
        image:require('@/assets/basicChat.png'),
        buttons:[
          {
            name:'To website',
            icon:'open',
            classes:'blue width100',
            route:'https://chat-basic.herokuapp.com/'
          },
          {
            name:'To github',
            icon:'github',
            classes:'green width100',
            route:'https://github.com/EdvinasMatusevicius/Basic-chat'
          }
        ],
        description:'Basic chat room where registered users and guests can communicate.'
      },
      {
        frontPage:true,
        name:'Basic rpg',
        icons:['html','css','js','php','mysql'],
        image:require('@/assets/basicRPG.png'),
        buttons:[
          {
            name:'To website',
            icon:'open',
            classes:'blue width100',
            route:'http://basicrpg.serverpi.ddns.me'
          },
          {
            name:'To github',
            icon:'github',
            classes:'green width100',
            route:'https://github.com/EdvinasMatusevicius/basicRPG'
          }
        ],
        description:'A game with pixel graphics that have most of rpg game components such as classes with diferent stats,leveling up, turn based combat,items with ability to save your character progress'
      },
    ]

    },

  getters:{
    getNavRoutes(state){
      return state.navigationRoutes
    },
    getTabs(state){
      return state.tabs
    },
    homeVisited(state){
      return state.homeVisited
    },
    getProjects(state){
      return state.projects;
    }
    ,
    getFrontPageProjects(state){
      return state.projects.filter((project)=>project.frontPage)
    }
  },
  mutations: {
    openTab({tabs,navigationRoutes},payload){
      payload = (navigationRoutes.filter(route=>payload === route.name))[0];
      const tabIndex = tabs.findIndex(tab=> tab.id ===payload.id);
      if(tabIndex === -1){
        const routeInfo = navigationRoutes.filter((navRoute)=>navRoute.id === payload.id);
        tabs.forEach((tab)=>tab.status = 'deselected');
        tabs.push({...routeInfo[0],status:'selected'});
        return
      }
      tabs.forEach((tab)=>tab.status = 'deselected');
      tabs[tabIndex].status='selected';
    },
    closeTab({tabs},payload){
      if(payload.selectedIndex !== undefined){
        tabs.forEach((tab)=>tab.status = 'deselected');
        tabs[payload.selectedIndex].status = 'selected';
      }
      const tabIndex = tabs.findIndex(tab=> tab.id ===payload.id);
      tabs.splice(tabIndex,1);
      if(tabs.length === 0){
        router.push('/notab')
      }
    },
    homeVisited(state){
      state.homeVisited = true;
    }
  },
  actions: {
    homeVisited({commit}){
      commit('homeVisited')
    },
    openTab({commit},payload){
      commit('openTab',payload)
    },
    closeTab({commit,state},payload){
      const tabs = state.tabs;
      const closeTabIndex = tabs.findIndex(tab=> tab.id ===payload.id);
      if(tabs.length >1 && tabs[closeTabIndex].status === 'selected' && closeTabIndex !== -1){
        const nextTabIndex = tabs[closeTabIndex+1] ? closeTabIndex+1 : closeTabIndex-1
        router.push(tabs[nextTabIndex].route);
        commit('closeTab',{...payload,selectedIndex:nextTabIndex});
        return
      }
      commit('closeTab',payload);
    }
  },
  modules: {
  }
})
