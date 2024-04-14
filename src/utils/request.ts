//对axios的二次封装使用请求与响应拦截器

import axios from 'axios';
import { ElMessage } from 'element-plus';
import useUserStore from '@/store/modules/user'
import store from '@/store'

// // //用户仓库
const userStore = useUserStore(store);
//利用 axios.create 创建一个axios实例
let request = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API,//基础路径会携带/api
    timeout: 5000,//超时时间
});
//请求拦截器
request.interceptors.request.use((config) => {
    if (userStore.token) {
        config.headers.token = userStore.token;
    }
    return config;
}),
    request.interceptors.response.use(
        (response) => {
            return response.data
        },
        (err) => {
            let mes = '';
            let status = err.response.status;
            switch (status) {
                case 401:
                    mes = 'token过期';
                    break;
                case 403:
                    mes = '无权访问';
                    break;
                case 404:
                    mes = '请求地址错误';
                    break;
                case 500:
                    mes = '服务器故障';
                    break;
                default:
                    mes = '网络连接故障';
                    break;
            }
            ElMessage({
                type: 'error',
                message: mes
            });
            return Promise.reject(err);

        }
    )

export default request;