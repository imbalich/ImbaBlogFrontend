<template>
  <header class=" header sticky top-0 bg-gray-100 dark:bg-slate-800 backdrop-filter backdrop-blur-md bg-opacity-90 shadow-md hover:shadow-lg">
    <!-- 新header -->
    <div
      class=" w-full py-5">
      <div class=" flex justify-between lg:justify-around">
        <div class=" flex justify-evenly items-center">
          <!-- 图和网站名 -->
          <h1 class="font-bold text-4xl text-slate-900 dark:text-white select-none">Imba Blog</h1>
        </div>
        <!-- 导航，搜索，登录，切换明暗 -->
        <div class=" flex justify-between">
          <nav class="flex items-center mx-auto text-slate-900 dark:text-white">
            <a href="/" class="mr-4 hover:text-pink-500">首页</a>
            <a href="#" class="mr-4 hover:text-pink-500">专栏</a>
            <a href="#" class="mr-4 hover:text-pink-500">关于</a>
          </nav>
          <div class="flex items-center ">
            <input type="text" placeholder="Search" class="mr-4 px-2 py-1 border border-gray-300 rounded dark:bg-slate-600">
          </div>
          <div class="flex items-center text-slate-900 dark:text-white">
            <a href="/login" class=" px-4 py-2 rounded mr-4 hover:text-pink-500">登录</a>
          </div>
          <div class="flex items-center text-slate-900 dark:text-white">
            <button @click="toggleTheme" class=" hover:text-pink-500">切换主题</button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>


<script>
import { useThemeStore } from '@/store/themeStore'

export default {
  setup () {
    const themeStore = useThemeStore()

    return {
      toggleTheme: themeStore.toggleTheme,
    }
  },
}
</script>


<style scoped></style>


