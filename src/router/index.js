import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Log from '../views/Log.vue'
import Products from '../views/Products.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/admin',
    name: 'Log',
    component: Log
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
]

const router = new VueRouter({
  
  base: process.env.BASE_URL,
  routes
})

/* mode: 'history', */

export default router
