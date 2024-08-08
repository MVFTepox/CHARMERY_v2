<template>
  <div>
    <Navbarr />
    <productPureb class="my-5" />
    <div class="mx-10">
      <CommentSection />
    </div>
    <ProductCard />
    <Carousel />
    <footer />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import productPureb from '@/components/productPureb.vue'
import Navbarr from '@/components/Navbarr.vue'
import footer from '@/components/footer.vue'
import ReviewCard from '@/components/ReviewCard.vue'
import CommentSection from '@/components/CommentSection.vue'
import ProductCard from '@/components/ProductCard.vue'
import Carousel from '@/components/Carousel.vue'

export default defineComponent({
  name: 'pageVistaProducto',

  components: {
    productPureb,
    Navbarr,
    ReviewCard,
    CommentSection,
    ProductCard,
    footer,
    Carousel
  }
})
</script>
