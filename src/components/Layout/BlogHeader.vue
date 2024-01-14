<template>
  <header
    class=" bg-base-100 text-base-content sticky top-0 flex w-full justify-center bg-opacity-80 backdrop-blur transition-shadow duration-100 shadow-sm">
    <nav class=" dsnavbar w-full justify-between lg:justify-around">
      <div class=" flex-none items-center">
        <div class="dsdropdown">
          <div tabindex="0" role="button" class="dsbtn dsbtn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabindex="0" class="dsmenu dsmenu-sm dsdropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>首页</a></li>
            <li><a>栏目</a></li>
            <li><a>关于</a></li>
          </ul>
        </div>
        <h3 class=" font-bold text-4xl select-none">Imba Blog</h3>
        <!-- <a class="dsbtn dsbtn-ghost text-3xl">Imba Blog</a> -->
      </div>
      <div class=" hidden lg:flex">
        <ul class="dsmenu dsmenu-horizontal px-1">
          <li><a class="text-xl">首页</a></li>
          <li><a class="text-xl">栏目</a></li>
          <li><a class="text-xl">关于</a></li>
        </ul>
      </div>
      <div class="flex-none gap-2">
        <div class="dsform-control">
          <input type="text" placeholder="Search" class="dsinput dsinput-bordered w-24 md:w-auto h-10" />
        </div>
        <!-- 主题 -->
        <div>
          <label class="dsswap dsswap-rotate">
            <input type="checkbox" class="dstheme-controller" value="synthwave" />
            <svg class="dsswap-on fill-current pt-1 size-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>
            <svg class="dsswap-off fill-current pt-1 size-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </div>
        <!-- 头像 -->
        <div v-if="hasLogin" class=" dsdropdown dsdropdown-end">
          <div tabindex="0" role="button" class=" dsbtn dsbtn-ghost dsbtn-circle dsavatar">
            <div class="w-10 rounded-full">
              <img src="@/assets/头像.jpg" />
            </div>
          </div>
          <ul tabindex="0"
            class=" mt-3 z-[1] p-2 shadow dsmenu dsmenu-sm dsdropdown-content bg-base-100 rounded-box w-52">
            <li>
              <a class=" justify-between">
                通知
                <span class="dsbadge">New</span>
              </a>
            </li>
            <li><a>设置</a></li>
            <li><router-link to="/" v-on:click.prevent="logout()">登出</router-link></li>
          </ul>
        </div>
        <div v-else>
          <router-link to="/login" class=" px-4 py-2 rounded mr-4">登录</router-link>
        </div>

      </div>
    </nav>
  </header>
</template>


<script>
import { useThemeStore } from '@/store/themeStore'
import {useAuthorization} from '@/api/useAuthorization';

export default {
  name: 'BlogHeader',
  components: {},

  setup () {
    const themeStore = useThemeStore()
    const { username, hasLogin, isSuperuser, logout, refresh } = useAuthorization();

    return {
      toggleTheme: themeStore.toggleTheme,
      username,
      hasLogin,
      isSuperuser,
      logout,
      refresh
    }
  },
}
</script>


<style scoped>
input[type="checkbox"] {
  opacity: 0;
  position: absolute;
}</style>


