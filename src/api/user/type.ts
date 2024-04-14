//登录接口的携带参数
export interface LoginForm {
    username: string;
    password: string;
}
interface dataType {
    token: string;
}
export interface loginResponseData {
    code: number;
    data?: dataType;
    message?: string;
}
interface userInfo {
    userID: number;
    avatar: string;
    username: string;
    password: string;
    desc: string;
    roles: string[];
    buttons: string[];
    routes: string[];
    token: string;
}

interface user {
    checkUser: userInfo
}
export interface userResponseData {
    code: number;
    data: user;
}