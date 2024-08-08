<template>
  <div>
    <Navbarr />
    <productoindividual class="my-5" />
    <div class="mx-10 my-10">
      <CommentSection />
    </div>
    <div class="mx-10">
      <hr style="border-color: #eddaab ;border-width: 3px">
      <div>
        <p class="text-7xl font-elmessiri text-center my-10 text-[#CB8844]">Te Puede Gustar</p>
      </div>
      <hr style="border-color: #eddaab ;border-width: 3px">
    </div>
    <div  class="mx-10 my-10">
      <Carousel />

    </div>
    <PageFooter />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import productPureb from '@/components/productPureb.vue'
import Navbarr from '@/components/Navbarr.vue'
import PageFooter from '@/components/footer.vue'
import ReviewCard from '@/components/ReviewCard.vue'
import CommentSection from '@/components/CommentSection.vue'
import Carousel from '@/components/Carousel.vue'
import productoindividual from '@/components/productoindividual.vue'

export default defineComponent({
  name: 'pageVistaProducto',

  components: {
    productPureb,
    Navbarr,
    ReviewCard,
    CommentSection,
    PageFooter,
    Carousel,
    productoindividual

  }
})
</script>
