<script setup lang="ts">
import { onMounted } from 'vue'
import userStore from '@/store/modules/user'
let MyuserStore = userStore()
onMounted(() => {
    MyuserStore.userInfo()
})
</script>

<template>
    <div>
        <h1>我是home一级路由</h1>
    </div>
</template>

<style scoped lang="scss"></style>
