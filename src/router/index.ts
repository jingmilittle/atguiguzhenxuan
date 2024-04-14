//通过createRouter创建路由器
import { createRouter, createWebHashHistory } from 'vue-router'
import { constantRoute } from '@/router/routes'
//创建路由
let router = createRouter({
    //hash模式
    history: createWebHashHistory(),
    routes: constantRoute,
    //滚动行为

    scrollBehavior() {
        return { left: 0, top: 0 }; // 滚动到页面顶部
    },
})
export default router;
