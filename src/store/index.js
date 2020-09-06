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
        ],
        description:'Website to quickly deploy pure PHP7.3, Laravel, Vue.js or static websites on raspberry PI runing Debian-based operating system'
      },
      {
        frontPage:true,
        name:'Darbo baze',
        icons:['node','mongodb'],
        buttons:[
          {
            name:'To website',
            icon:'open',
            classes:'blue width100',
            route:'#'
          },
          {
            name:'To github',
            icon:'github',
            classes:'green width100',
            route:'https://github.com/EdvinasMatusevicius/darbo-baze'
          }
        ],
        description:'Job search website that scrapes job posting websites for jobs fitting set criteria'
      }
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
