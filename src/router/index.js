import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import Result from '../views/test_result.vue'
import history from '../views/Historical.vue'
import data from '../views/data.vue'
import testModel from '../components/testModel'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/result',
    name:'result',
    component:Result},
  {
    path:'/history',
    name:'history',
    component:history},
    {
      path:'/data',
      name:'data',
      component:data},
{
    path: '/testModel',
    name: 'testModel',
    component: testModel

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
