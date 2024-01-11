<template>
  <div class="min-h-screen flex items-center justify-center opacity-75 bg-gradient-to-r from-pink-300 to-rose-500">
    <div class=" bg-white/20 backdrop-blur-2xl shadow-md rounded-md p-8 ">
      <div class="flex justify-center mb-4">
        <button
          :class="{'bg-blue-500 text-white': isLogin, 'bg-gray-300 text-gray-700': !isLogin}"
          class="px-4 py-2 rounded-md mr-2"
          @click="isLogin = true"
        >
          Login
        </button>
        <button
          :class="{'bg-blue-500 text-white': !isLogin, 'bg-gray-300 text-gray-700': isLogin}"
          class="px-4 py-2 rounded-md"
          @click="isLogin = false"
        >
          Register
        </button>
      </div>
      <form v-if="isLogin" class="space-y-4">
        <!-- Login form fields -->
        <div>
          <label for="username" class="block text-gray-700">Username</label>
          <input type="text" id="username" v-model="loginForm.username" class="w-full border-gray-300 rounded-md p-2">
        </div>
        <div>
          <label for="password" class="block text-gray-700">Password</label>
          <input type="password" id="password" v-model="loginForm.password" class="w-full border-gray-300 rounded-md p-2">
        </div>
        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md">Login</button>
      </form>
      <form v-else class="space-y-4">
        <!-- Registration form fields -->
        <div>
          <label for="username" class="block text-gray-700">Username</label>
          <input type="text" id="username" v-model="registerForm.username" class="w-full border-gray-300 rounded-md p-2">
        </div>
        <div>
          <label for="password" class="block text-gray-700">Password</label>
          <input type="password" id="password" v-model="registerForm.password" class="w-full border-gray-300 rounded-md p-2">
        </div>
        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md">Register</button>
      </form>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'

export default {
  name: 'Login',
  setup() {
    const loginForm = reactive({
      username: '',
      password: '',
    })
    const registerForm = reactive({
      username: '',
      password: '',
    })
    const isLogin = reactive(true)

    return {
      loginForm,
      registerForm,
      isLogin,
    }
  },
}
</script>

<style scoped>
button:focus {
  outline: none;
}
</style>
