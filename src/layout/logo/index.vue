<script setup lang="ts">
import setting from "@/setting"

</script>
<script lang="ts">
export default {
    name: 'logo'
}
</script>

<template>
    <div class="logo" v-if="setting.logoHidden">
        <img :src="setting.logo">
        <p>{{ setting.title }}</p>

    </div>
</template>

<style scoped lang="scss">
.logo {
    display: flex;
    width: 100%;
    height: $base-menu-logo-height;
    color: white;
    align-items: center;
    padding: 5px;

    img {
        width: 40px;
        height: 40px;
    }

    p {
        margin-left: 10px;
        font-size: $base-logo-title-fontsize;
    }
}
</style>