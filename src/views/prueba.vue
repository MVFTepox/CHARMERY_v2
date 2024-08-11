<script lang="ts">
import { defineComponent } from 'vue'
import ProductCard from '@/components/ProductCard.vue'
import WishlistCard from '@/components/WishlistCard.vue'
import Carousel from '@/components/Carousel.vue'
import ReviewCard from '@/components/ReviewCard.vue'
import footer from '@/components/footer.vue'
import productoindividual from '@/components/productoindividual.vue'
import pepe from '@/components/CarruselProducto.vue'
import img1 from '@/assets/img/moño perla zoom editado.png'
import img2 from '@/assets/img/collar corazon realista editado.png'

export default defineComponent({
  components: {
    ProductCard,
    WishlistCard,
    Carousel,
    ReviewCard,
    footer,
    productoindividual,
    pepe

  },
  
})

</script>

<template>
  <h1 class="text-center text-7xl">HOLA MUNDO</h1>
 

  <main>
    <h1 class="text-center tex">preparacion de la App</h1>
    <h2>
      creacioon de compoentes de manera individual en un proyectos individuales antes de pasarlos a
      este archivo :D
    </h2>
  </main>
</template>
