//本地存储数据与读取数据
export const SET_TOKEN = (token: string) => {
    localStorage.setItem("TOKEN", token);
}
export const GET_TOKEN = () => {
    return localStorage.getItem("TOKEN");
}