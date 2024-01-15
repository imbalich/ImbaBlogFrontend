<template>
  <div class="layout">
    <ArticleHeader></ArticleHeader>
    <ArticleContent></ArticleContent>
    <BlogFooter></BlogFooter>
  </div>
</template>

<script>
import ArticleHeader from '@/components/Article/ArticleHeader.vue'
import ArticleContent from '@/components/Article/ArticleContent.vue';
import BlogFooter from '@/components/Layout/BlogFooter.vue'

export default {
  name: 'ArticleDetail',
  components: {
    ArticleHeader,
    ArticleContent,
    BlogFooter
},
}
</script>

<style scoped>

</style>