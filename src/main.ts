import { createApp } from 'vue'
//import './style.css'
import App from '@/App.vue'
//引入饿了么ui
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//@ts-ignore 忽略ts类型检查
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
//svg 插件
import 'virtual:svg-icons-register'
//全局插件
import gloalComponent from '@/components';
//导入全局css样式
import '@/styles/index.scss'
//路由注册
import router from '@/router'
//仓库
// import pinia from '@/store'
import { createPinia } from 'pinia'
//创建实例
const app = createApp(App);
//使用插件
//use 会触发组件里的install方法
app.use(createPinia())
app.use(router)
app.use(gloalComponent)
app.use(ElementPlus, {
  locale: zhCn,
})
//挂载到index.html    <div id="app"></div>
app.mount('#app')


