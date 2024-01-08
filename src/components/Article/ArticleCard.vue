<template>

  <!-- 博客卡片 -->
  <div class=" bg-white dark:bg-slate-700 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-md hover:shadow-lg">
    <!-- 专栏 -->
    <div class="flex flex-row mb-2 gap-2">
      <span
        class="inline-flex items-center justify-center px-2 py-1 text-base font-bold text-indigo-100 bg-indigo-600 dark:bg-rose-500 rounded-lg">xiaozzpp的个人专栏</span>
    </div>
    <!-- 标题 -->
    <a class="text-slate-900 hover:text-sky-500 dark:text-white dark:hover:text-rose-500 mb-3 text-3xl font-medium tracking-wide leading-relaxed italic"
      href="#">DjangoRestfulFramework基础教学</a>
    <!-- 附属信息 -->
    <div class="flex flex-row mb-2 gap-2 mt-2">
      <span
        class="inline-flex items-center justify-center text-sm text-slate-500 dark:text-slate-400 font-mono">2022/08/30
        created</span>
      <span class="inline-flex items-center justify-center text-sm text-slate-500 dark:text-slate-400 font-mono">200
        views</span>
      <span class="inline-flex items-center justify-center text-sm text-slate-500 dark:text-slate-400 font-mono">100
        likes</span>
    </div>
    <!-- 标签 -->
    <div class="flex flex-row gap-2">
      <span
        class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-indigo-100 bg-indigo-600 rounded-full">DRF</span>
      <span
        class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-indigo-100 bg-indigo-600 rounded-full">Django</span>
      <span
        class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-indigo-100 bg-indigo-600 rounded-full">MySQL</span>
    </div>
    <!-- 内容 -->
    <p class="text-slate-500 dark:text-slate-400 mt-2 text-base mb-2 italic">
      这是一段很长很长很长很长的文章简介还有数字123456789还有英文imbalich这是一段很长很长很长很长的文章简介这是一段很长很长很长很长的文章简介这是一段很长很长很长很长的文章简介这是一段很长很长很长很长的文章简介这是一段很长很长很长很长的文章简介
    </p>
  </div>

</template>

<script>
export default {
  name: 'ArticleCard',
}
</script>

<style scoped></style>