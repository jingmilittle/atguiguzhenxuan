<template>
    <div class='tabbar_right'>
        <el-button type="primary" icon="Refresh" size="small" circle @click="Refresh">

        </el-button>
        <el-button type="primary" icon="FullScreen" size="small" circle @click="FullScreen"></el-button>
        <el-button type="primary" icon="Setting" size="small" circle></el-button>
        <img :src="avatar" style="width: 24px ;height: 24px;" alt="">
        <!-- 下拉菜单 -->
        {{ userName }}
        <el-dropdown>
            <span class="el-dropdown-link">
                <el-icon class="el-icon--right">
                    <arrow-down />
                </el-icon>
            </span>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item>退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>
</template>

<script setup lang="ts">
import useLayOutSettingStor from '@/store/modules/setting'
import useUserStore from '@/store/modules/user'
import { ref, watch } from 'vue';
const userStore = useUserStore();
console.log("setting", userStore.avatart);
console.log("setting", userStore.userName);
let LayOutSettingStore = useLayOutSettingStor()
const avatar = ref('');
const userName = ref('');
watch(() => userStore.avatart, (newValue, oldValue) => {
    console.log("avatar", newValue);
    avatar.value = newValue;
});

watch(() => userStore.userName, (newValue, oldValue) => {
    console.log("userStore", userStore);
    console.log("userStore", userStore.avatart);
    console.log("userName", newValue);
    userName.value = newValue;
});
let Refresh = () => {
    LayOutSettingStore.refresh = !LayOutSettingStore.refresh
}
let FullScreen = () => {
    let isFullScreen = document.fullscreenElement
    if (!isFullScreen) {
        document.documentElement.requestFullscreen()
    } else {
        document.exitFullscreen()
    }
}

</script>
<script lang="ts">
export default {
    name: 'setting'
}
</script>

<style lang='scss' scoped>
.tabbar_right {
    margin-right: 20px;
    display: flex;
    align-items: center;

    img {
        margin-left: 20px;
        margin-right: 20px;
    }

}
</style>