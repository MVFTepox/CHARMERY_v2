<template>
  <div>
    <h1>Débito y Crédito</h1>

    <div>
      <p class="text-2xl py-0.5 font-DMsans">Nombre del titular de la tarjeta</p>
      <input
        type="text"
        v-model="name"
        class="form-control border-2 rounded-3xl px-4 pt-0.5 border-[#B66141] w-full lg:w-9/12"
        @input="updateCreditoData"
      />
    </div>

    <div>
      <p class="text-2xl py-0.5 font-DMsans">Número de la tarjeta</p>
      <input
        type="text"
        v-model="numerotarjeta"
        class="form-control border-2 rounded-3xl px-4 pt-0.5 border-[#B66141] w-full lg:w-9/12"
        @input="updateCreditoData"
      />
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2">
      <div>
        <p class="text-2xl py-0.5 font-DMsans">Fecha de expiración</p>
        <input
          type="text"
          v-model="expiracion"
          class="form-control border-2 rounded-3xl px-4 pt-0.5 border-[#B66141] w-full lg:w-9/12"
          @input="updateCreditoData"
        />
      </div>

      <div>
        <p class="text-2xl py-0.5 font-DMsans">CVV</p>
        <input
          type="text"
          v-model="cvv"
          class="form-control border-2 rounded-3xl px-4 pt-0.5 border-[#B66141] w-full lg:w-9/12"
          @input="updateCreditoData"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';

export default defineComponent({
  name: 'Credito',
  props: {
    creditoData: {
      type: Object,
      default: () => ({
        name: '',
        numerotarjeta: '',
        expiracion: '',
        cvv: '',
      }),
    },
  },
  emits: ['update:creditoData'],
  setup(props, { emit }) {
    const name = ref(props.creditoData.name);
    const numerotarjeta = ref(props.creditoData.numerotarjeta);
    const expiracion = ref(props.creditoData.expiracion);
    const cvv = ref(props.creditoData.cvv);

    watch([name, numerotarjeta, expiracion, cvv], () => {
      emit('update:creditoData', {
        name: name.value,
        numerotarjeta: numerotarjeta.value,
        expiracion: expiracion.value,
        cvv: cvv.value,
      });
    });

    return {
      name,
      numerotarjeta,
      expiracion,
      cvv,
    };
  },
});
</script>
