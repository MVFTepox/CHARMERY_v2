<script  lang="ts">
  import { defineComponent } from 'vue';
  import ProductCard from '@/components/ProductCard.vue';
  import WishlistCard from '@/components/WishlistCard.vue';
  export default defineComponent({
    components: {
      ProductCard,
      WishlistCard
    }
  })
</script>

<template >
  <ProductCard></ProductCard>

  <WishlistCard></WishlistCard>
  <main>
    <h1 class=" text-center tex ">preparacion de la App</h1>
    <h2>creacioon de compoentes de manera individual en un proyectos individuales antes de pasarlos a este archivo :D</h2>
  </main>
  
</template>
