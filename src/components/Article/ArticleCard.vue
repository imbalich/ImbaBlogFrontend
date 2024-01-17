<template>
  <!-- 博客卡片 -->
  <div
  v-for = "article in info.results"  v-bind:key="article.url" id="articles"
  class=" bg-white dark:bg-slate-700 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-md hover:shadow-lg">
    <!-- 专栏 -->
    <div class="flex flex-row mb-2 gap-2">
      <span
        v-if="article.category !== null"
        class=" px-2 py-1 text-base font-bold text-indigo-100 bg-indigo-600 rounded-md">{{article.category.title}}</span>
    </div>
    <!-- 标题 -->
    <div class="flex flex-row items-center gap-2">
      <span class=" px-2 py-1 text-base font-bold leading-none text-indigo-100 bg-indigo-600 rounded-md select-none" style="flex-shrink: 0;">置顶</span>
      <!-- <a class="text-slate-900 hover:text-pink-500 dark:text-white dark:hover:text-pink-500 text-3xl font-medium tracking-wide leading-relaxed italic" href="#">DjangoRestfulFramework基础教学</a> -->
      <router-link
      :to="{ name: 'ArticleDetail', params: { id: article.id }}"
      class=" text-slate-900 hover:text-pink-500 dark:text-white dark:hover:text-pink-500 text-3xl font-medium tracking-wide leading-relaxed italic"
      >
        {{ article.title }}
      </router-link>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-500" fill="none" viewbox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M12 14l9-5-9-5-9 5 9 5z" />
      </svg>
    </div>
    <!-- 附属信息 -->
    <div class="flex flex-row my-2 gap-2 items-center">
      <span
        class=" text-sm text-slate-500 dark:text-slate-400 font-mono">2022/08/30
        created</span>
      <span class=" text-sm text-slate-500 dark:text-slate-400 font-mono">200
        views</span>
      <span class=" text-sm text-slate-500 dark:text-slate-400 font-mono">100
        likes</span>
    </div>
    <!-- 标签 -->
    <div class="flex flex-row gap-2 items-center">
      <span
        class=" px-2 py-1 text-xs font-bold leading-none text-indigo-100 bg-indigo-600 rounded-full">DRF</span>
      <span
        class=" px-2 py-1 text-xs font-bold leading-none text-indigo-100 bg-indigo-600 rounded-full">Django</span>
      <span
        class=" px-2 py-1 text-xs font-bold leading-none text-indigo-100 bg-indigo-600 rounded-full">MySQL</span>
    </div>
    <!-- 内容 -->
    <p class="text-slate-500 dark:text-slate-400 mt-2 text-base mb-2 italic select-none">
      这是一段很长很长很长很长的文章简介还有数字123456789还有英文imbalich这是一段很长很长很长很长的文章简介这是一段很长很长很长很长的文章简介这是一段很长很长很长很长的文章简介这是一段很长很长很长很长的文章简介这是一段很长很长很长很长的文章简介
    </p>
  </div>
  <!-- ds 博客卡片 -->
  <div class=" dscard bg-base-100 shadow-md hover:shadow-lg static">
    <div class=" dscard-body">
      <!-- 专栏 -->
      <div class="flex flex-row">
        <span
          class=" px-2 py-1 text-base font-bold text-indigo-100 bg-indigo-600 rounded-md">xiaozzpp的个人专栏</span>
      </div>
      <!-- 标题 -->
      <div class="flex flex-row items-center gap-2">
        <span class=" px-2 py-1 text-base font-bold leading-none text-indigo-100 bg-indigo-600 rounded-md select-none" style="flex-shrink: 0;">置顶</span>
        <a class="text-slate-900 hover:text-pink-500 dark:text-white dark:hover:text-pink-500 text-3xl font-medium tracking-wide leading-relaxed italic" href="#">DjangoRestfulFramework基础教学</a>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-500" fill="none" viewbox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M12 14l9-5-9-5-9 5 9 5z" />
        </svg>
      </div>
      <!-- 附属信息 -->
      <div class="flex flex-row gap-2 items-center">
        <span
          class=" text-sm font-mono">2022/08/30
          created</span>
        <span class=" text-sm font-mono">200
          views</span>
        <span class=" text-sm font-mono">100
          likes</span>
      </div>
      <!-- 标签 -->
      <div class="flex flex-row gap-2 items-center">
        <span
          class=" px-2 py-1 text-xs font-bold leading-none text-indigo-100 bg-indigo-600 rounded-full">DRF</span>
        <span
          class=" px-2 py-1 text-xs font-bold leading-none text-indigo-100 bg-indigo-600 rounded-full">Django</span>
        <span
          class=" px-2 py-1 text-xs font-bold leading-none text-indigo-100 bg-indigo-600 rounded-full">MySQL</span>
      </div>
      <!-- 内容 -->
      <p class=" text-base  italic select-none">
        这是一段很长很长很长很长的文章简介还有数字123456789还有英文imbalich这是一段很长很长很长很长的文章简介这是一段很长很长很长很长的文章简介这是一段很长很长很长很长的文章简介这是一段很长很长很长很长的文章简介这是一段很长很长很长很长的文章简介
      </p>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue'
import {useRoute} from 'vue-router'
import getArticleData from '@/api/article.js'
import pagination from '@/api/pagination.js'

export default {
  name: 'ArticleCard',

  setup() {
    const info = ref('');
    const route = useRoute();
    const kwargs = ref({page: 0, searchText: ''});
    getArticleData(info, route, kwargs);

    const {
      is_page_exists,
      get_page_param,
      get_path
    } = pagination(info, route);

    console.log(info)

    return {
      info,
      is_page_exists,
      get_page_param,
      get_path,
    }
  }
}
</script>

<style scoped>

</style>