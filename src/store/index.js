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
    tabs:[
      {
        id:1,
        name:"Home",
        route:"/",
        status:"selected"
      }
    ],
    homeVisited:false
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
    }
  },
  mutations: {
    openTab({tabs,navigationRoutes},payload){
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
