<template>
  <div>
    <navbarr />
    <div class="">

      <Registro />
    </div>
    <footerpage />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import Registro from '@/components/Registro.vue'
import Navbarr from '@/components/Navbarr.vue'
import footerpage from '@/components/footer.vue'

export default defineComponent({
  name: 'registro',
  components: {
    Registro,
    Navbarr,
    footerpage
  }
})
</script>
<style scoped></style>
