//小仓库
import { defineStore } from 'pinia'
let useLayOutSettingStor = defineStore('settingStore', {

    state: () => {
        return {
            fold: false, //用户控制是否折叠
            refresh: false,
        }
    }
})
export default useLayOutSettingStor; 