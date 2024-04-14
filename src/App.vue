<script setup lang="ts">
import { onMounted } from 'vue';
import { reqLogin } from '@/api/user'
import { useRouter } from 'vue-router';
onMounted(() => {
  reqLogin({ username: 'admin', password: '123456' })
  const router = useRouter();
  router.push('/login');
});
</script>

<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<style scoped lang="scss">
div {}
</style>
