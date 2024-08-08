<template>
  <div>
    <navbarr />
    <Registro />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import Registro from '@/components/Registro.vue'
import Navbarr from '@/components/Navbarr.vue'

export default defineComponent({
  name: 'registro',
  components: {
    Registro,
    Navbarr
  }
})
</script>
<style scoped></style>
