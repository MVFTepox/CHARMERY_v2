<template>
  <div>
    <pageVentaProducto />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import pageVentaProducto from '@/components/productPureb.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    pageVentaProducto
  }
})

</script>