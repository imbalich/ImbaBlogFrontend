import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login.vue'
import Home from '@/views/Home.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  { 
    path: '/login',
    name: 'Login',
    component: Login
    
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

export default router