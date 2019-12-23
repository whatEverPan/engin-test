import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import modelLaboratory from '../components/modelLaboratory.vue'
import Result from '../views/test_result.vue'
import history from '../views/Historical.vue'
import data from '../views/data.vue'

import testModel from '../components/testModel'
import testCase from '../components/testCase'
Vue.use(VueRouter)

const routes = [{
    path: '/modelLaboratory',
    name: 'modelLaboratory',
    component: modelLaboratory
  },
  {
    path: '/case',
    name: 'case',
    component: testCase
  }, {

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
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/result',
    name: 'result',
    component: Result
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