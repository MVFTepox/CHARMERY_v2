<template>
    <div v-for="product in products" :key="product.id"
        class="rounded-lg border-solid border-[3px] p-3 m-2 flex flex-col justify-between h-[275px] w-[225px] border-[#eddaab] font-['DM Sans']">
        <a :href="`/vistaproducto/${product.id}`">
            <div class="flex justify-between">
                <div class="flex flex-col mb-2">
                    <p class="font-bold">{{ product.product_name }}</p>
                    <p class="text-[#b66141]">${{ product.price }}</p>
                </div>
                <span class="material-symbols-rounded filler text-[#b66141]" @click="wishClick"
                    :style="{ fontVariationSettings: `'FILL' ${currentFill}` }">
                    favorite
                </span>
            </div>
            <img :src="product.Images[0]?.image_url" alt="Product Image" class="w-full h-[150px] object-cover mb-2" />
        </a>
        <button @click="() => addToCart(product.id)"
            class="flex rounded-full justify-center h-[30px] bg-[#b66141] border-solid border-[3px] hover:border-[#eddaab] border-[#b66141] hover:bg-white text-[#eddaab]">
            <span class="material-symbols-rounded">shopping_bag</span>
            Añadir a Bolsa
        </button>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { postCart } from '@/Utils/api';

export default defineComponent({
    name: 'CardDeProducto',
    setup() {
        const products = ref<any[]>([]);
        const currentFill = ref(0);

        onMounted(async () => {
            try {
                const response = await fetch('http://3.134.108.48:3333/api/products');
                products.value = await response.json();
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        });

        const addToCart = async (productId: number) => {
            try {
                const response = await postCart(productId);
                console.log('Product added to cart:', response);
            } catch (error) {
                console.error('Error adding product to cart:', error);
            }
        };

        const wishClick = () => {
            if (currentFill.value === 0) {
                currentFill.value++;
            } else if (currentFill.value === 1) {
                currentFill.value--;
            }
        };

        return {
            products,
            wishClick,
            addToCart,
            currentFill
        };
    }
});
</script>

<style scoped>
p {
    color: #662f25;
}

.filler:hover {
    font-variation-settings: 'FILL' 1;
    cursor: pointer;
}
</style>
