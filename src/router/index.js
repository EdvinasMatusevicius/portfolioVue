import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store/index.js'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const openTab =(to, from, next)=>{
    const payload = to.name;
    store.dispatch('openTab',payload);
    next()
  }

  const routes = [
  {
    id:1,
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter:openTab
  },
  {
    id:2,
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    beforeEnter:openTab
  },
  {
    id:3,
    path:'/projects',
    name:'My projects',
    component: ()=>import('../views/Projects.vue'),
    beforeEnter:openTab
  },
  {
  id:4,
  path:'/notab',
  name:'No tab',
  component: ()=>import('../views/NoTab.vue')
  },
  {
    id:4,
    path:'/*',
    name:'404',
    component: ()=>import('../views/404.vue')
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
