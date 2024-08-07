<template>
    <div>
        <Navbarr />
        <productPureb  />

        



    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import productPureb  from '@/components/productPureb.vue';
import Navbarr from '@/components/Navbarr.vue';

export default defineComponent({
    name: 'pageVistaProducto',
    components: {
        productPureb,
        Navbarr 
    }
})
</script>