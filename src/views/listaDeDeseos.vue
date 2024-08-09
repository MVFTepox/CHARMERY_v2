<template>
  <div>
    <Navbarr2 />
  </div>
  <div class="">
    <div class="container mx-auto p-4">
      <div class="flex justify-between">
        <h1 class="text-[#cb8844] text-4xl">Lista de Deseos</h1>
        <div class="wishlistButtons">
          <button
            class="btn bg-[#cb8844] w-[180px] text-white hover:bg-white hover:border-[#cb8844] hover:border-[2px] hover:text-[#cb8844]">
            Añadir Todo a Bolsa
          </button>
          <button
            class="btn bg-[#cb8844] w-[180px] text-white hover:bg-white hover:border-[#cb8844] hover:border-[2px] hover:text-[#cb8844]">
            Eliminar Todo
          </button>
        </div>
      </div>
      <hr style="border-color: #eddaab" class="m-4" />
    </div>
  </div>
  <div>
    <footerPage class=""/>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Navbarr from '@/components/Navbarr.vue'
import footerPage from '@/components/footer.vue'
import Navbarr2 from '@/components/Navbarr2.vue';

export default defineComponent({
  name: 'listasDeseos',
  components: {
    Navbarr,
    footerPage,
    Navbarr2
  }
})
</script>
<style scoped>
h1 {
  font-family: El Messiri;
}

.wishlistButtons {
  font-family: 'DM Sans', sans-serif;
}
</style>
