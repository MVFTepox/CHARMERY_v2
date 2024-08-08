<template>
    <div>
      <Navbarr />
      <Registro />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import Registro from '@/components/Registro.vue'; 
  import Navbarr from '@/components/Navbarr.vue';   
  
  export default defineComponent({
    name: 'App',
    components: {
      Registro,
      Navbarr
    }
  });
  </script>