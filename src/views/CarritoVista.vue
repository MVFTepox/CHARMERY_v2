<template>
    <div>
      <Navbarr2 />
    </div>
    <div class="mx-10 mb-20">
    <Cart  />
    </div>

    <div>
      <FooterPage />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Cart from '@/components/Cart.vue';
import Navbarr2 from '@/components/Navbarr2.vue';
import FooterPage from '@/components/footer.vue';
export default defineComponent({
  name: 'CarritoVista',
  components: {
    Cart,
    Navbarr2,
    FooterPage
  },
})
</script>