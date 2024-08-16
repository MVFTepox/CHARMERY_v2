<template>
  <div>
    <p class="text-3xl mb-4">Efectivo</p>

    <div>
      <p class="text-2xl py-0.5 font-DMsans">Ubicación de Entrega</p>
      <p class="text-sm py-1.5 font-DMsans">
        Dentro de la universidad Tecnologica De Torreón (UTT)
      </p>
      <input
        @input="updateEfectivoData"
        type="text"
        v-model="address"
        class="form-control border-2 rounded-3xl px-4 pt-0.5 border-[#B66141] w-full lg:w-9/12"
      />
    </div>

    <div>
      <p class="text-2xl py-0.5 font-DMsans">Hora de Entrega</p>
      <div class="flex justify-between gap-2">
        <input
          type="text"
          v-model="time"
          @input="updateEfectivoData"
          class="form-control border-2 rounded-3xl px-4 pt-0.5 border-[#B66141] lg:w-4/5"
        />
        <select
          v-model="meridian"
          @input="updateEfectivoData"
          class="form-control border-2 rounded-3xl px-4 pt-0.5 border-[#B66141] lg:w-2/5"
        >
          <option value="AM">AM</option>
          <option value="PM">PM</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'

export default defineComponent({
  name: 'Efectivo',
  props: {
    efectivoData: {
      type: Object,
      default: () => ({
        address: '',
        time: '',
        meridian: '',
      }),
    }
  },
  emits: ['update:efectivoData'],

  setup(props, { emit }) {
    const address = ref(props.efectivoData.address)
    const time = ref(props.efectivoData.time)
    const meridian = ref(props.efectivoData.meridian)

    watch([address, time, meridian], () => {
      emit('update:efectivoData', {
        address: address.value,
        time: time.value,
        meridian: meridian.value,
      })
    })

    return {
      address,
      time,
      meridian,
    }
  },
})
</script>
