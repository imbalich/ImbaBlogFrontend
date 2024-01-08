<template>
  <div class="layout">
    <BlogHeader></BlogHeader>
    <BlogMain></BlogMain>
    <BlogFooter></BlogFooter>
  </div>
</template>

<script>
import BlogHeader from '@/components/Layout/BlogHeader.vue'
import BlogMain from '@/components/Layout/BlogMain.vue'
import BlogFooter from '@/components/Layout/BlogFooter.vue'

export default {
  name: 'Home',
  components: {
    BlogHeader,
    BlogMain, 
    BlogFooter
},
}
</script>


<style scoped>

</style>
