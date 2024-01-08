<template>
  <div>
    <div class="login-register-box">
      <div class="flex justify-between items-center">
        <h1>Login</h1>
      </div>
      <el-form
        label-width="100px"
        class="login-form"
        :model="loginForm"
        :rules="loginRules"
      >
        <el-form-item label="用户名">
          <el-input 
            placeholder="Username"
            v-model="loginForm.username"
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input placeholder="Password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'

export default {
  name: 'Login',
  
  setup() {
    const loginForm = reactive({
      username: '',
      password: '',
    })
    const loginRules = reactive({
      username: [
        { required: true, message: 'Please input username', trigger: 'blur' },
      ],
      password: [
        { required: true, message: 'Please input password', trigger: 'blur' },
      ],
    })
    return {
      loginForm,
      loginRules,
    }
  },
}
</script>

<style scoped>
.login-register-box {
  width: 30vw;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title {
    font-size: 26px;
    font-weight: 700;
  }
}
</style>
