<template>
    <div class="tabbar">

        <div class="tabbar_left">
            <BreadCrumb></BreadCrumb>

        </div>
        <div class="tabbar_right">
            <Setting></Setting>
        </div>

    </div>
</template>

<script setup lang="ts">

import BreadCrumb from '@/layout/tablebar/breadcrumb/index.vue'
import Setting from '@/layout/tablebar/setting/index.vue'
</script>
<script lang="ts">
export default {
    name: 'tablebar'
}
</script>
<style lang='scss' scoped>
.tabbar {
    width: 100%;
    height: 100%;
    //开启弹性
    display: flex;
    //沿着主轴一左一右
    justify-content: space-between;
    background-image: linear-gradient(to right, #3bf8ff, rgb(38, 0, 255), #3b8dff);

    .tabbar_left {
        display: flex;
        //居中对齐
        align-items: center;
        margin-left: 20px;
    }

    .tabbar_right {
        margin-right: 20px;
        display: flex;
        align-items: center;

        img {
            margin-left: 20px;
            margin-right: 20px;
        }

    }

}
</style>