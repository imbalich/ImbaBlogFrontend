<template>
  <main class=" w-full justify-center bg-base-200 border-t-2">
    <div class=" flex flex-row justify-between ">
      <!-- 栏目导航 -->
      <div class=" hidden lg:flex lg:basis-1/6 bg-base-100">
        <div class=" flex-1 justify-center">
          <MdCatalog :editorId="id" :scrollElement="scrollElement" class=" sticky top-0 bg-base-100"/>
        </div>
      </div>
      <!-- 文章标题正文 -->
      <div v-if="article" class=" flex flex-col lg:basis-4/6 w-full bg-base-100 border-x-2">
        <!-- 标题部分 -->
        <div class=" border-b-2 px-5 py-5">
          <div class=" flex flex-row items-center relative">
            <!-- 标题 -->
            <h3 class=" text-3xl font-medium tracking-wide leading-relaxed">{{ article.title }}</h3>
            <!-- 隐藏栏目目录 -->
            <div class=" dsdropdown dsdropdown-end">
              <div tabindex="0" role="button" class="dsbtn dsbtn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </div>
              <ul tabindex="0" class="dsmenu dsmenu-sm dsdropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>Item 1</a></li>
                <li><a>Item 2</a></li>
                <li><a>Item 3</a></li>
              </ul>
            </div>
            <!-- 隐藏目录 -->
            <div class=" dsdropdown dsdropdown-end absolute right-3">
              <div tabindex="1" role="button" class="dsbtn dsbtn-ghost lg:hidden ">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </div>
              <ul tabindex="1" class="dsmenu dsmenu-sm dsdropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>Item 1</a></li>
                <li><a>Item 2</a></li>
                <li><a>Item 3</a></li>
              </ul>
            </div>
          </div>
          <!-- 时间，浏览，点赞 -->
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
        <!-- 正文MarkDown -->
        <div v-if="article" class=" ">
          <MdPreview :editorId="id" :modelValue="article.content" />
        </div>
        <!-- 点赞，打赏 -->
        <div class=" flex justify-center py-5">
          <div class="dsjoin">
            <button class="dsbtn dsjoin-item dsbtn-ghost md:dsbtn-wide">点赞</button>
            <button onclick="tipModal.showModal()" class="dsbtn dsjoin-item dsbtn-ghost md:dsbtn-wide">打赏</button>
            <dialog id="tipModal" class=" dsmodal">
              <div class=" dsmodal-box text-center">
                <img src="@/assets/头像.jpg" alt="" class=" w-2/3 mx-auto">
                <p class="py-4">多谢您的支持,喜欢我的分享可以请我喝杯奶茶呦~</p>
              </div>
              <form method="dialog" class="dsmodal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </div>
        </div>
        <!-- 链接 -->
        <!-- 知识产权署名 -->
        <div class=" flex flex-col mx-5 bg-base-300 gap-1 py-3 px-7 rounded-md">
          <span class=" text-lg/5 font-mono ">
            本文标题: {{ article.title }}
          </span>
          <span class=" text-lg/6 font-mono ">
            本文作者: {{ article.created_by }}
          </span>
          <span class=" text-lg/6 font-mono ">
            发布时间: {{ formattedTime(article.created) }}
          </span>
          <span class=" text-lg/6 font-mono ">
            最后更新: {{ formattedTime(article.updated) }}
          </span>
          <span class=" text-lg/6 font-mono ">
            原始链接: 域名{{route.fullPath}}
          </span>
          <span class=" text-lg/6 font-mono ">
            许可协议: <a href="https://creativecommons.org/licenses/by-nc/4.0/" class=" hover:underline">署名-非商业性使用 4.0 国际许可协议</a>
          </span>
          <p class=" underline text-lg/6 font-mono">转载请保留原文链接及作者</p>
        </div>

      </div>
      <!-- 文章导航 -->
      <div class=" hidden lg:flex flex-col lg:basis-1/6 border-r-2 bg-base-100 justify-start">
        <!-- 目录 -->
        <div class=" flex-1 justify-center ">
          <MdCatalog :editorId="id" :scrollElement="scrollElement" class=" sticky top-0 bg-base-100"/>
        </div> 
      </div>
    </div>
  </main>
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
      route,
      scrollElement
    }
  }
}
</script>

<style scoped>

</style>