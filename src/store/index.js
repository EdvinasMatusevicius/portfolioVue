import Vue from 'vue'
import Vuex from 'vuex'

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
  },
  getters:{
    getNavRoutes(state){
      return state.navigationRoutes
    },
    getTabs(state){
      return state.tabs
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
    coloseTab({tabs},payload){
      const tabIndex = tabs.findIndex(tab=> tab.id ===payload.id);
      tabs.splice(tabIndex,1);
    }
  },
  actions: {
    openTab({commit},payload){
      commit('openTab',payload)
    },
    closeTab({commit},payload){
      commit('closeTab',payload);
    }
  },
  modules: {
  }
})
