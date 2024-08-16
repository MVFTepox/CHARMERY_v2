<template>
  <div>
    <navbarr />
    <div class="container mx-auto my-10">

      <Registro />
    </div>
    <footer />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import Registro from '@/components/Registro.vue'
import Navbarr from '@/components/Navbarr.vue'
import footer from '@/components/footer.vue'

export default defineComponent({
  name: 'registro',
  components: {
    Registro,
    Navbarr,
    footer
  }
})
</script>
<style scoped></style>
