<template>
  <!-- Main -->
  <div class=" w-full py-5 bg-gray-100 dark:bg-slate-800">
    <div class=" flex flex-row gap-4 justify-between mx-auto lg:justify-around xl:w-4/5">
      <!-- 博客列表 -->
      <div class=" basis-3/4 flex flex-col gap-4 ml-3">
        <ArticleCard></ArticleCard>
      </div>
      <!-- 右侧卡片列表 -->
      <div class=" basis-1/4 flex flex-col mr-3 gap-4">
        <UserCard></UserCard>
      </div>

    </div>
  </div>
</template>

<script>
import ArticleCard from '@/components/Article/ArticleCard.vue';
import UserCard from '@/components/RightSide/UserCard.vue';

export default {
  name: 'BlogMain',
}
</script>

<style scoped></style>
