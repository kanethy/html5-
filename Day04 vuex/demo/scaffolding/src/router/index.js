import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Access1 from '../views/access1.vue'
import Access2 from '../views/access2.vue'
import Changeage from '../views/changeage.vue'
import addProduct from '../views/addproduct.vue'
import ajax1 from '../views/ajax1.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/ajax1',
    component:ajax1
  },
  {
    path:'/addproduct',
    component:addProduct
  },
  {
    path:'/changeage',
    component:Changeage
  },
  {
    path:'/access1',
    component:Access1
  },
  {
    path:'/access2',
    component:Access2
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
