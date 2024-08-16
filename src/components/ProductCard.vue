<template>
  <div
    v-for="product in products" :key="product.id"
    class="rounded-lg border-solid border-[3px] p-3 m-2 flex flex-col justify-between h-[250px] w-[200px] border-[#eddaab] font-['DM Sans']"
  >
  <a href="">
    
    <div class="flex justify-between">
      <div class="flex flex-col mb-2">
        <p class="font-bold">{{ product.product_name }}</p>
        <p class="text-[#b66141]">${{ product.price }}</p>
      </div>
      <span
        class="material-symbols-rounded filler text-[#b66141]"
        @click="wishClick"
        :style="{ fontVariationSettings: `'FILL' ${currentFill}` }"
      >
        favorite
      </span>
    </div>
    <img
      :src="product.Images[0]?.image_url"
      alt="Product Image"
      class="w-full h-[150px] object-cover mb-2"
    />
  </a>
    <button
      class="flex rounded-full justify-center h-[30px] bg-[#b66141] border-solid border-[3px] hover:border-[#eddaab] border-[#b66141] hover:bg-white text-[#eddaab]"
    >
      <span class="material-symbols-rounded">shopping_bag</span>
      Añadir a Bolsa
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  name: 'ProductCard',
  methods: {
  wishClick() {
    if (this.currentFill === 0) {
      this.currentFill++
    } else if (this.currentFill === 1) {
      this.currentFill--
    }
  }
},
  setup() {
    const products = ref<any[]>([]);

    onMounted(async () => {
      try {
        const response = await fetch('http://3.134.108.48:3333/api/products');
        products.value = await response.json();
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    });


    return {
      products,
      currentFill: 0
    };
  },
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


