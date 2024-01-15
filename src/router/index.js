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
      console.log(to.params.id);
      if (!to.params.id) {
        next({ name: 'Home' }); // 如果用户没有权限，重定向到首页
      } else {
        next(); // 如果用户有权限，正常导航
      }
    }
    // beforeEnter: (to, from, next) => {
    //   const articleId = to.params.id;
    
    //   // 发起请求到后端，获取文章所属栏目的公开状态
    //   fetch(`/api/article/${articleId}/category`)
    //     .then(response => response.json())
    //     .then(category => {
    //       if (category.isPublic) {
    //         next(); // 如果栏目是公开的，允许导航到详情页面
    //       } else {
    //         next({ name: 'Home' }); // 如果栏目不是公开的，重定向到首页
    //       }
    //     })
    //     .catch(error => {
    //       console.error('Error:', error);
    //       next({ name: 'Home' }); // 请求失败时，重定向到首页
    //     });
    // }
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

export default router