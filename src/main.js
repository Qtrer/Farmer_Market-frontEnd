import { createApp } from 'vue'
import App from './App.vue'
import ElementUI from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import './assets/Global.css'
import router from "./router"
import axios from 'axios'
import './mock/mock'

const app = createApp(App)
app.config.globalProperties.$http=axios
app.use(router).use(ElementUI).mount('#app')
