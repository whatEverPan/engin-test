import Vue from 'vue'
import VueRouter from 'vue-router'


import modelLaboratory from '@/views/ThreeInOne/modelLaboratory'
import signIn from '@/views/signIn'

import test_result from '@/views/ThreeInOne/Result/test_result'
import history from '@/views/ThreeInOne/Result/history'
import data from '@/views/ThreeInOne/Result/data'

import testModel from '@/views/ThreeInOne/TestModel/testModel'
import testCase from '@/views/ThreeInOne/TestCase/testCase'

Vue.use(VueRouter)

const routes = [{
    path: '/signIn',
    name: 'signIn',
    component: signIn
  },
  {
    path: '/modelLaboratory',
    name: 'modelLaboratory',
    component: modelLaboratory
  },
  {
    path: '/testCase',
    name: 'testCase',
    component: testCase
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/test_result',
    name: 'test_result',
    component: test_result
  },
  {
    path: '/history',
    name: 'history',
    component: history
  },
  {
    path: '/data',
    name: 'data',
    component: data
  },
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


// router.beforeEach((to,from,next) =>{
//   //window.document.title = to.meta.title;
//   window.document.title = to.name;
//   next();
// })
// router.afterEach((to,from,next) =>{
//   window.scrollTo(0,0);
// })
export default router