<template>
  <main class=" w-full justify-center bg-base-200 border-t-2">
    <div class=" flex flex-row justify-between ">
      <div class=" flex basis-1/6 bg-base-100">
        <MdCatalog :editorId="id" :scrollElement="scrollElement" class=" bg-base-100"/>
      </div>
      <div class=" flex flex-col basis-4/6 bg-base-100 border-x-2">
        <div class=" border-b-2 px-5 py-5">
          <h3 class=" text-3xl font-medium tracking-wide leading-relaxed">{{ article.title }}</h3>
          <div class="flex flex-row gap-2 items-center">
            <span
              class=" text-sm text-slate-500 dark:text-slate-400 font-mono">2022/08/30
              created</span>
            <span class=" text-sm text-slate-500 dark:text-slate-400 font-mono">200
              views</span>
            <span class=" text-sm text-slate-500 dark:text-slate-400 font-mono">100
              likes</span>
          </div>
        </div>
        <div v-if="article">
          <MdPreview :editorId="id" :modelValue="article.body" />
        </div>
      </div>
      <div class=" flex flex-col basis-1/6 border-r-2 bg-base-100">
        <MdCatalog :editorId="id" :scrollElement="scrollElement" class=" bg-base-100"/>
      </div>
    </div>


  </main>
  <div v-if="article" class=" border-2">
    <article class="prose lg:prose-1">
      <!-- {{ article.body }} -->

    </article>
    
    

  </div>
</template>

<script>
import { MdEditor } from 'md-editor-v3';
import { MdPreview, MdCatalog } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router'
import axios from 'axios';

export default {
  name: 'ArticleContent',
  components: { MdEditor, MdPreview, MdCatalog },
  setup() {
    const route = useRoute()
    const article = ref(null);

    const id = 'preview-only'
    const scrollElement = document.documentElement;

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

    console.log(article);

    return {
      article,
      formattedTime,
      isSuperuser,
      id,
      scrollElement
    }
  }
}
</script>

<style scoped></style>