<script lang="ts">
import { defineComponent } from 'vue'
import ProductCard from '@/components/ProductCard.vue'
import WishlistCard from '@/components/WishlistCard.vue'
import Carousel from '@/components/Carousel.vue'
import ReviewCard from '@/components/ReviewCard.vue'
export default defineComponent({
  components: {
    ProductCard,
    WishlistCard,
    Carousel,
    ReviewCard
  }
})
</script>

<template>
  <ProductCard></ProductCard>
  <Carousel></Carousel>
  <WishlistCard></WishlistCard>
  <ReviewCard></ReviewCard>

  <Carousel></Carousel>
  <main>
    <h1 class="text-center tex">preparacion de la App</h1>
    <h2>
      creacioon de compoentes de manera individual en un proyectos individuales antes de pasarlos a
      este archivo :D
    </h2>
  </main>
</template>
