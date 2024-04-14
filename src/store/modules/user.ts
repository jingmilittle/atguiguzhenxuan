//创建用户相关的小仓库
import { defineStore } from 'pinia'
import type { LoginForm, loginResponseData } from '@/api/user/type'
import { reqLogin, reqUserInfo } from '@/api/user'
import type { UserState } from '@/store/modules/types/type'
import { SET_TOKEN, GET_TOKEN } from '@/utils/token'
//引用路由
import { constantRoute } from '@/router/routes'
//创建用户小仓库
let useUserStore = defineStore('userStore', {
    //小仓库存储数据的地方
    state: (): UserState => {
        return {
            token: GET_TOKEN(),
            menuRoutes: constantRoute,
            userName: '',
            avatar: '',
        }
    },
    //计算属性
    getters: {

    },
    //用户操作数据的方法
    actions: {
        async userLogin(loginForm: LoginForm) {
            console.log('userLogin', loginForm)
            const result: loginResponseData = await reqLogin(loginForm)
            console.log('result', result)
            //success 200 fail 201
            if (result.code == 200) {
                this.token = ((result.data as any).token as string)
                console.log('token', this.token)
                SET_TOKEN((result.data as any).token as string);
                return 'ok'
            } else {
                return Promise.reject(new Error((result.data as any).message))
            }

        },
        //获取用户信息
        async userInfo() {
            //存储用户信息
            const result = await reqUserInfo();
            console.log("Result", result)
            if (result.code == 200) {
                this.userName = result.data.checkUser.username;
                this.avatart = result.data.checkUser.avatar;
                return 'ok'
            } else {
                return Promise.reject(new Error((result.data as any).message))
            }
        },
    }
})
export default useUserStore
