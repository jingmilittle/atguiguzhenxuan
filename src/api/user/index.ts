//统一管理咱们项目用户相关的接口
import request from "@/utils/request";
import type { LoginForm, loginResponseData, userResponseData } from "./type"
//统一管理接口
enum API {
    // 登录接口
    LOING_URL = "/user/login",
    // 获取用户信息
    USERINFO_URL = "/user/info",
    // 退出登录
}
//暴露请求函数
export const reqLogin = (data: LoginForm) => request.post<any, loginResponseData>(API.LOING_URL, data);
//获取用户信息接口
export const reqUserInfo = () => request.get<any, userResponseData>(API.USERINFO_URL);