<template>
    <div>
        <Navbarr />
        <productPureb />


        <div class="mx-10">
            <CommentSection />
            dsds
        </div>

        <ProductCard />
        






    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import productPureb from '@/components/productPureb.vue';
import Navbarr from '@/components/Navbarr.vue';
import ReviewCard from '@/components/ReviewCard.vue';
import CommentSection from '@/components/CommentSection.vue';
import ProductCard from '@/components/ProductCard.vue';

export default defineComponent({
    name: 'pageVistaProducto',


    components: {
        productPureb,
        Navbarr,
        ReviewCard,
        CommentSection,
        ProductCard
    }
})
</script>