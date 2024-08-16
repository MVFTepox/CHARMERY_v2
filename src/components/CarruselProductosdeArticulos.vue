<template>
    <div class="carousel-container carousel w-full overflow-x-auto py-4">
        <div class="  flex gap-4">
            <ProductCard v-for="(product, index) in products" :key="index" :productName="product.name"
                :productPrice="product.price" />
        </div>
    </div>
    
</template>

<script lang="ts">
import ProductCard from '@/components/ProductCardCArrusel.vue';

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
                { name: 'Producto 6', price: 69.99 },
                { name: 'Producto 7', price: 69.99 },
                
            ],
        };
    },
};
</script>

<style scoped>
.carousel-container::-webkit-scrollbar {
    height: 2px; /* Usando CSS puro */
}

.carousel-container::-webkit-scrollbar-thumb {
    background-color: #b66141;
    border-radius: 0.25rem;
}

.carousel-container::-webkit-scrollbar-track {
    background-color: #f7ecc9;
}

</style>