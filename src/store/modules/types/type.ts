//定义小仓库state类型
import type { RouteRecorRaw } from 'vue-router'
export interface UserState {
    token: string | null,
    menuRoutes: RouteRecorRaw[],
    userName: string,
    avatar: string,
}