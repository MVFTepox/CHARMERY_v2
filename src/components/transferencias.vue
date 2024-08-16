<template>
  <div class="my-4">
    <p class="text-3xl">Transferencias</p>

    <div class="my-3">
      <p class="text-2xl py-0.5 font-DMsans">Nombre del beneficiario</p>
      <input
        type="text"
        name=""
        id=""
        class="form-control border-2 rounded-3xl px-4 pt-0.5 border-[#B66141] w-full lg:w-9/12"
      />
    </div>

    <div class="my-5">
      <button type="button" class="btn bg-[#EDDAAB] rounded-full w-64">
        pasos de transferencia
      </button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'pageTransferencias',
  setup() {}
})
</script>
