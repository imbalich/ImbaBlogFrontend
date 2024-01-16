import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login.vue'
import Home from '@/views/Home.vue'
import ArticleDetail from '@/views/ArticleDetail.vue'


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
  {
    path: "/article/:id",
    name: "ArticleDetail",
    component: ArticleDetail,
    beforeEnter: (to, from, next) => {
      // console.log(to.params.id);
      if (!to.params.id) {
        next({ name: 'Home' }); // 如果用户没有权限，重定向到首页
      } else {
        next(); // 如果用户有权限，正常导航
      }
    }
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

export default router