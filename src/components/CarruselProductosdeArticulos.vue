<template>
    <div class="carousel-container w-full overflow-x-auto py-4">
        <div class="carousel flex gap-4">
            <ProductCard v-for="(product, index) in products" :key="index" :productName="product.name"
                :productPrice="product.price" />
        </div>
    </div>
</template>

<script lang="ts">
import ProductCard from './ProductCard.vue';

export default {
    name: 'ProductCarousel',
    components: {
        ProductCard,
    },
    data() {
        return {
            products: [
                { name: 'Producto 1', price: 29.99 },
                { name: 'Producto 2', price: 39.99 },
                { name: 'Producto 3', price: 49.99 },
                { name: 'Producto 4', price: 59.99 },
                { name: 'Producto 5', price: 69.99 },
            ],
        };
    },
};
</script>

<style scoped>
.carousel::-webkit-scrollbar {
    @apply h-2;
}

.carousel::-webkit-scrollbar-thumb {
    @apply bg-[#b66141] rounded-md;
}

.carousel::-webkit-scrollbar-track {
    @apply bg-[#f7ecc9];
}
</style>