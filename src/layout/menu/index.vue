<template>
    <div>
        <template v-for="(item, index) in menuList" :key="item.path">
            <template v-if="!item.meta.hidden">
                <!-- 没有子项 -->
                <el-menu-item v-if="!item.children" :index="item.path" @click="goRoute">
                    <el-icon>

                        <component :is="item.meta.icon" />
                    </el-icon>
                    <template #title>
                        <span>{{ item.meta.title }}</span>

                    </template>
                </el-menu-item>
            </template>
            <!-- 只有一个子项 -->
            <template v-if="item.children && item.children.length == 1">
                <el-menu-item v-if="!item.children[0].meta.hidden" :index="item.children[0].path" @click="goRoute">
                    <el-icon>
                        <component :is="item.meta.icon" />
                    </el-icon>
                    <template #title>
                        <span>{{ item.children[0].meta.title }}</span>
                    </template>
                </el-menu-item>
            </template>
            <!-- 多个子项 -->
            <el-sub-menu v-if="item.children && item.children.length > 1" :index="item.path">
                <template #title>
                    <el-icon>
                        <component :is="item.meta.icon" />
                    </el-icon>
                    <span>{{ item.meta.title }}</span>
                </template>
                <!-- 递归存储 -->
                <Menu :menuList="item.children"></Menu>
            </el-sub-menu>
        </template>
    </div>
</template>

<script setup lang="ts">
//导入
import { useRouter } from 'vue-router'
//创建
let $router = useRouter();
//获取父组件传递的路由数据
defineProps(['menuList'])
const goRoute = (vc: any) => {
    console.log("vc", vc)
    $router.push(vc.index)
}

</script>
<script lang="ts">
export default {
    // 递归组件必须要有名字
    name: 'Menu'
}
</script>

<style lang='scss' scoped></style>