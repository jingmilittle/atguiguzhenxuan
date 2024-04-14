<script setup lang="ts">
import { useRoute } from 'vue-router'
import Logo from '@/layout/logo/index.vue'
import Menu from '@/layout/menu/index.vue'
import useUserStore from '@/store/modules/user';
import tablebar from '@/layout/tablebar/index.vue'
import useLayOutSettingStor from '@/store/modules/setting'
//获取仓库
let LayOutSettingStore = useLayOutSettingStor()
//右侧内容展示区
import Main from '@/layout/main/index.vue'
let userStore = useUserStore();
let $route = useRoute();


</script>
<script lang="ts">
export default {
    name: 'layout'
}
</script>
<template>
    <div class="layout_container">

        <div class="layout_slider" :class="{ fold: LayOutSettingStore.fold ? true : false }">
            <!-- //logo -->
            <Logo />
            <!-- //滚动组件 -->
            <el-scrollbar class="scrollbar">
                <!-- //菜单组件 -->
                <el-menu :collapse="LayOutSettingStore.fold ? true : false" :default-active="$route.path"
                    background-color="#001529" text-color="white">
                    <Menu :menuList="userStore.menuRoutes"></Menu>
                </el-menu>
            </el-scrollbar>
        </div>

        <div class="layout_tabbar" :class="{ fold: LayOutSettingStore.fold ? true : false }">
            <tablebar></tablebar>
        </div>

        <!-- 内容区 -->
        <div class="layout_main" :class="{ fold: LayOutSettingStore.fold ? true : false }">
            <Main></Main>
        </div>
    </div>
</template>

<style scoped lang="scss">
.layout_container {
    width: 100%;
    height: 100vh;

    .layout_slider {
        &.fold {
            width: $base-menu-min-withd;
        }

        width: $base-menu-width;
        height: 100%;
        background-color: $base-menu-background;
        color: white;
        transition: all 0.3s;

        .scrollbar {
            width: 100%;
            height: calc(100% - $base-menu-logo-height);

            .el-menu {
                border-right: none;
            }
        }
    }

    .layout_tabbar {
        position: fixed;
        width: calc(100% - $base-menu-width);
        height: $base-tabbar-height;
        top: 0;
        left: $base-menu-width;
        transition: all 0.3s;

        &.fold {
            width: calc(100% - $base-menu-min-withd);
            left: $base-menu-min-withd
        }
    }

    .layout_main {
        position: absolute;
        width: calc(100% - $base-menu-width);
        height: calc(100% - $base-tabbar-height - 23px);
        background-color: white;
        left: $base-menu-width;
        top: $base-tabbar-height ;
        padding: 20px;
        overflow: auto;
        transition: all 0.3s;

        &.fold {
            width: calc(100% - $base-menu-min-withd);
            left: $base-menu-min-withd
        }
    }
}
</style>
