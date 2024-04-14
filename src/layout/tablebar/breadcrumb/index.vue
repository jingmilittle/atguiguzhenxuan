<template>
    <div class='tabbar_left'>
        <!-- //全局图标 -->
        <el-icon>
            <!-- <Expand style="margin-right: 10px;" @click="changeIcon"> </Expand> -->
            <component :is="LayOutSettingStore.fold ? 'Expand' : 'Fold'" @click="changeIcon"> </component>
        </el-icon>
        <!-- 面包屑 -->
        <el-breadcrumb :separator-icon="ArrowRight">
            <el-breadcrumb-item v-for="(item, index) in $route.matched" :key="index" v-show="item.meta.title"
                :to="item.path">
                <el-icon>
                    <component :is="item.meta.icon"> </component>
                </el-icon>
                <span style="margin:0px 5px">{{ item.meta.title }}</span>
            </el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script setup lang="ts">
import { ArrowRight } from '@element-plus/icons-vue'
import useLayOutSettingStor from '@/store/modules/setting'
import { useRoute } from 'vue-router'
let $route = useRoute()
//获取仓库
let LayOutSettingStore = useLayOutSettingStor()
const changeIcon = () => {
    LayOutSettingStore.fold = !LayOutSettingStore.fold

}
</script>
<script lang="ts">
export default {
    name: 'breadcrumb'
}
</script>

<style lang='scss' scoped>
.tabbar_left {
    display: flex;
    //居中对齐
    align-items: center;
    margin-left: 20px;
}
</style>