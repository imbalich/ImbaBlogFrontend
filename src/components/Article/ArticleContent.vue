<template>
  <div v-if="article" class=" border-2">
    <article class="prose lg:prose-1">
      {{ article.body }}
    </article>
    <!-- <div v-html="article.body_html" class="article-body"></div> -->
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router'
import axios from 'axios';

export default {
  name: 'ArticleContent',
  components: {},
  setup(){
    const route = useRoute()
    const article = ref(null);
    const formattedTime = (isoDateString) => {
      const date = new Date(isoDateString);
      return date.toLocaleDateString();
    };
    const isSuperuser = computed(() => {
      return localStorage.getItem('is_superuser') === 'true';
    });
    onMounted(() => {
      axios.get('/api/article/' + route.params.id)
        .then(response => {
          article.value = response.data;
        })
        .catch(error => {
          console.error('Failed to fetch article: ', error);
        });
    });

    return{
      article,
      formattedTime,
      isSuperuser,
    }
  }
}
</script>

<style scoped>

</style>