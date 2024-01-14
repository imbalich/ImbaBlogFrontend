<template>
  <div class="dshero min-h-screen bg-base-200">
    <div class="dshero-content flex-col lg:flex-row-reverse">
      <div class="text-center lg:text-left">
        <h1 class="text-5xl font-bold">Login now!</h1>
        <p class="py-6">欢迎来到<span class="inline"> imba_lich </span>的主页，游客用户请使用 QQ 微信 github 第三方登录，该页面仅提供给管理员个人使用，谢谢！</p>
      </div>
      <div class="dscard shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form class="dscard-body">
          <div class="dsform-control">
            <label class="dslabel">
              <span class="dslabel-text">Username</span>
            </label>
            <input v-model="signInName" type="username" placeholder="username" class="dsinput dsinput-bordered" />
          </div>
          <div class="dsform-control">
            <label class="dslabel">
              <span class="dslabel-text">Password</span>
            </label>
            <input v-model="signInPassword" type="password" placeholder="password" class="dsinput dsinput-bordered" autocomplete="new-password" />
            <label class="dslabel">
              <a href="#" class="dslabel-text-alt dslink dslink-hover">Forgot password?</a>
            </label>
          </div>
          <div class="dsform-control mt-6">
            <button v-on:click.prevent="handleSignIn" class="dsbtn dsbtn-primary">登录</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { useLogin } from '@/api/login.js';
import { ref } from 'vue';
import { useRouter } from 'vue-router';


export default {
  name: 'Login',
  setup() {
    const signInName = ref('');
    const signInPassword = ref('');
    const router = useRouter();
    const { signIn } = useLogin();

    const handleSignIn = () => {
      signIn(signInName.value, signInPassword.value, router);
    };

    return {
      signInName,
      signInPassword,
      handleSignIn,
    };
  },
};
</script>

<style scoped>
button:focus {
  outline: none;
}
</style>
