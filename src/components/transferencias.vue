<template>
  <div class="my-4">
    <p class="text-3xl">Transferencias</p>

    <div class="my-3">
      <p class="text-2xl py-0.5 font-DMsans">Nombre del beneficiario</p>
      <input type="text" name="" id=""
        class="form-control border-2 rounded-3xl px-4 pt-0.5 border-[#B66141] w-full lg:w-9/12" />
    </div>

    <div class="my-5">
      <div class="flex justify-center rounded-full">
        <div class="card rounded-tl-3xl bg-[#EDDAAB] w-1/2 md:w-1/3 lg:w-2/3  text-[#662F25] px-0">



          <div
            class="bg-[#B66141] text-white font-elmessiri text-2xl rounded-t-  rounded-b-full grid h-32 place-items-center   ">
            Transferencias</div>
          <br>
          <div class="divider"><span class="material-symbols-rounded  bg-white border-1 border-black p-5 rounded-full">
              credit_card
            </span></div>
          <br>
          <div class="  place-items-center">
            <div class="grid grid-cols-1 gap-1 my-3 text-center">
              <p class="font-DmSans text-3xl ">133180000163517447</p>
              <p>Titular</p>
              <p class="font-DmSans text-xl">Valeria Hernandez</p>
            </div>
          </div>


        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'pageTransferencias',
  setup() { }
})
</script>
