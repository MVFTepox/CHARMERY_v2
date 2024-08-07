<template>
    <div>
        
        <productPureb  />

        



    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import productPureb  from '@/components/productPureb.vue';

export default defineComponent({
    name: 'pageVistaProducto',
    components: {
        productPureb
    }
})
</script>