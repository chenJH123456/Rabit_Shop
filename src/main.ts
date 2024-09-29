import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
// import { createPersistedState } from 'pinia-plugin-persistedstate'
import router from './router/index'
// import '@/styles/element/index.scss'
import '@/styles/common.scss'

// 创建应用
const app = createApp(App)
// 创建pinia
const pinia = createPinia()
// pinia.use(createPersistedState)

// 安装插件
app.use(pinia)
// 安装路由器
app.use(router)
// 挂载应用
app.mount('#app') //使用.mount()方法将应用挂载到id为'app'的元素上
