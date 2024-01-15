import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import piniaPluginPersist from "pinia-plugin-persistedstate"
// tailwind.css  https://www.tailwindcss.cn/docs
import "./styles/tailwind.css";
import '@/utils/extension.js'


const app = createApp(App)
const pinia = createPinia()
app.use(router)
app.use(pinia.use(piniaPluginPersist))
app.mount('#app')