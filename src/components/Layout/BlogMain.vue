<template>
  <!-- Main -->
  <main class=" w-full bg-base-200 py-5">
    <div class=" flex flex-row gap-4 justify-between mx-auto lg:justify-around xl:w-4/5">
      <!-- 博客列表 -->
      <div class=" md:basis-3/4 flex flex-col gap-4 mx-3">
        <ArticleCard></ArticleCard>
      </div>
      <!-- 右侧卡片列表 -->
      <div class=" md:basis-1/4 hidden md:flex md:flex-col mx-3 gap-4">
        <UserCard></UserCard>
      </div>

    </div>
  </main>
</template>

<script>
import {ref} from 'vue'
import {useRoute} from 'vue-router'
import ArticleCard from '@/components/Article/ArticleCard.vue';
import UserCard from '@/components/RightSide/UserCard.vue';

export default {
  name: 'BlogMain',
  components: {
    ArticleCard,
    UserCard,
  },
  setup (){
    // 查询博客列表,返给<ArticleCard>循环
      const articles = ref(''); // 当前列表
      const route = useRoute(); // 获取当前路由
      const kwargs = ref({page: 0, searchText: ''}); // page 和 搜索内容
  }
}
</script>

<style scoped></style>
