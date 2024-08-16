<template>
<<<<<<< HEAD
  <div>
    <Login />
  </div>
=======
  <RouterView />
>>>>>>> bd5b11b0e6a9fc2722197d5688f79c329075c18c
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Login from '@/components/Login.vue';

export default defineComponent({
  name: 'App',
  components: {
    Login
  }
});
</script>

<style scoped>
</style>
