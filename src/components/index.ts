import SvgIcon from '@/components/SvgIcon/index.vue';
//把所有组件放进allGlobalComponent
const allGlobalComponent = { SvgIcon };
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

//对外暴露插件对象
export default {
  install(app: any) {
    Object.keys(allGlobalComponent).forEach(key => {
      app.component(key, allGlobalComponent[key])
    })
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
  }
}