<template>
    <div>
        <router-view v-slot="{ Component }">
            <Transition name="fade">
                <!-- 渲染的组件 layout一级路由的子路由 -->
                <component :is="Component" v-if="isfresh"></component>
            </Transition>
        </router-view>
    </div>
</template>

<script setup lang="ts">
import { ref, watch, nextTick } from 'vue'
import useLayOutSettingStor from '@/store/modules/setting'
//获取仓库
let LayOutSettingStore = useLayOutSettingStor()
let isfresh = ref(true)
watch(
    () => LayOutSettingStore.refresh,
    (newValue) => {
        console.log("点击了")
        isfresh.value = false
        nextTick(() => {
            isfresh.value = true
            console.log("isfresh.value", isfresh.value)
        })
    }
)
</script>
<script lang="ts">
export default {
    name: 'mainVue'
}
</script>
<style lang='scss' scoped>
.fade-enter-from {
    opacity: 0;
    transform: scale(0);
}

.fade-enter-active {
    transition: opacity 0.5s;
}

.fade-enter-to {
    opacity: 1;
    transform: scale(1);
}
</style>