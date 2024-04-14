<script setup lang="ts">
//接受父组件的参数
defineProps({
    prefix: {
        prefix: String,
        default: '#icon-',
    },
        name: String,
        width:{
            type: String,
            default:'16px'
        },
        height: {
        type: String,
        default: '16px'
    }
    
})

</script>

<template>
    <svg :style="{ width, height }">
        <use :xlink:href="`${prefix}${name}`"></use>
    </svg>
</template>

<style scoped></style>
