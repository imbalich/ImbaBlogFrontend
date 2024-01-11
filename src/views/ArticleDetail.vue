<template>
  <div class="layout">
    <BlogHeader></BlogHeader>
    <ArticleContent></ArticleContent>
    <BlogFooter></BlogFooter>
  </div>
</template>

<script>
import BlogHeader from '@/components/Layout/BlogHeader.vue'
import ArticleContent from '@/components/Article/ArticleContent.vue';
import BlogFooter from '@/components/Layout/BlogFooter.vue'

export default {
  name: 'ArticleDetail',
  components: {
    BlogHeader,
    ArticleContent,
    BlogFooter
},
}
</script>

<style scoped>

</style>