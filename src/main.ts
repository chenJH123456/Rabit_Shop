import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router/index'
import { getCategory } from './apis/testAPI'
import { getCategoryAPI } from './apis/layout'
// import '@/styles/element/index.scss'
import '@/styles/common.scss'

getCategory().then((res) => {
	console.log(res)
})
getCategoryAPI().then((res) => {
	console.log(res)
})
// 创建应用
const app = createApp(App)
// 创建pinia
const pinia = createPinia()

// 安装插件
app.use(pinia)
// 安装路由器
app.use(router)
// 挂载应用
app.mount('#app') //使用.mount()方法将应用挂载到id为'app'的元素上
