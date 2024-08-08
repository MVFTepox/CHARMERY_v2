<template>
  <Navbarr />
  <div class="px-10 lg:px-20 gap-5 grid grid-cols-1 md:grid-cols-12 my-4">
    <div class="md:col-span-8 mb-4">
      <div class="border-2 rounded-lg p-4 grid grid-cols-1 border-[#EDDAAB]">
        <p>Escoje tu metodo de pago</p>

        <div
          class="border-2 rounded-lg p-4 my-4 border-[#EDDAAB] hover:cursor-pointer hover:scale-95 hover:shadow-md"
        >
          <div class="form-control">
            <label class="label cursor-pointer">
              <span class="label-text">Metodo uno</span>
              <input type="radio" name="radio-10" class="radio checked:bg-[#B66141]" />
            </label>
          </div>
          <p>{{ valordelospago1 }}</p>
        </div>

        <div
          class="border-2 rounded-lg p-4 my-4 border-[#EDDAAB] hover:cursor-pointer hover:scale-95 hover:shadow-md"
        >
          <div class="form-control">
            <label class="label cursor-pointer">
              <span class="label-text">Metodo dos</span>
              <input type="radio" name="radio-10" class="radio border-3 checked:bg-[#B66141]" />
            </label>
          </div>
          <p>{{ valordelospago2 }}</p>
        </div>

        <div
          class="border-2 rounded-lg p-4 my-4 border-[#EDDAAB] hover:cursor-pointer hover:scale-95 hover:shadow-md"
        >
          <div class="form-control">
            <label class="label cursor-pointer">
              <span class="label-text">Metodo tres</span>
              <input type="radio" name="radio-10" class="radio checked:bg-[#B66141]" />
            </label>
          </div>

          <p>{{ valordelospago3 }}</p>
        </div>

        <div class="flex gap-4 flex-row-reverse">
          <input
            class="btn bg-[#B66141] text-[#EDDAAB] rounded-2xl hover:text-black"
            type="button"
            value="Pagar"
          />
          <input
            @click="nextStep"
            class="btn bg-[#B66141] text-[#EDDAAB] rounded-2xl hover:text-black"
            type="button"
            value="Crear Nuevo Metodo de Pago"
          />
        </div>
      </div>

      <div :class="{ 'slide-down': step >= 2 }" v-if="step >= 2">
        <p class="text-3xl mb-4 mt-5">Pago</p>
        <div class="border-2 rounded-lg p-4 border-[#EDDAAB]">
          <!-- PRIMER PASO -->
          <div>
            <ul class="steps steps-vertical">
              <li class="step">Primer paso de pago</li>
            </ul>
            <div class="grid grid-cols-1 lg:grid-cols-2 mb-4">
              <div>
                <p class="text-2xl py-0.5 font-sans">Nombre</p>
                <input
                  v-model="nombre"
                  :class="[
                    'form-control',
                    'border-2',
                    'rounded-3xl',
                    'px-4',
                    'pt-0.5',
                    'border-[#B66141]',
                    'w-full',
                    'lg:w-10/12',
                    { 'border-red-500': showError && isFieldEmpty(nombre) }
                  ]"
                  type="text"
                />
              </div>
              <div>
                <p class="text-2xl py-0.5 font-sans">Apellido</p>
                <input
                  v-model="apellido"
                  :class="[
                    'form-control',
                    'border-2',
                    'rounded-3xl',
                    'px-4',
                    'pt-0.5',
                    'border-[#B66141]',
                    'w-full',
                    'lg:w-10/12',
                    { 'border-red-500': showError && isFieldEmpty(apellido) }
                  ]"
                  type="text"
                />
              </div>
            </div>
            <div class="mb-4">
              <p class="text-2xl py-0.5 font-sans">Correo electrónico</p>
              <input
                v-model="correo"
                :class="[
                  'form-control',
                  'border-2',
                  'rounded-3xl',
                  'px-4',
                  'pt-0.5',
                  'border-[#B66141]',
                  'w-full',
                  'lg:w-9/12',
                  { 'border-red-500': showError && isFieldEmpty(correo) }
                ]"
                type="text"
              />
            </div>
            <div class="mb-4">
              <div>
                <div class="form-control text-left my-4">
                  <label class="cursor-pointer flex items-center">
                    <input type="checkbox" class="checkbox checkbox-warning mr-2" />
                    <span class="label-text">Remember me</span>
                  </label>
                </div>
              </div>
              <p class="text-2xl py-0.5 font-MDsans my-2">Teléfono</p>
              <label class="flex items-center gap-2 border-none focus:aparece-none w-2/5">
                +52
                <input
                  v-model="telefono"
                  :class="[
                    'grow',
                    'border-2',
                    'rounded-3xl',
                    'px-4',
                    'pt-0.5',
                    'border-[#B66141]',
                    { 'border-red-500': showError && isFieldEmpty(telefono) }
                  ]"
                  type="number"
                  placeholder=""
                />
              </label>
            </div>
          </div>
          <button
            @click="nextStep"
            class="btn bg-[#B66141] text-[#EDDAAB] relative right-12 lg:right-16 w-2/5 lg:w-1/4 rounded-full hover:text-black"
          >
            Siguiente
          </button>

          <!-- Segundo paso -->
          <div :class="{ 'slide-down': step >= 2 }" v-if="step >= 3">
            <div>
              <ul class="steps steps-vertical">
                <li class="step" data-content="2">Segundo paso de pago</li>
              </ul>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-2 mb-4">
              <div class="mb-4">
                <p class="text-2xl py-0.5 font-sans">País</p>
                <input
                  v-model="pais"
                  :class="[
                    'form-control',
                    'border-2',
                    'rounded-3xl',
                    'px-4',
                    'pt-0.5',
                    'border-[#B66141]',
                    'w-10/12',
                    { 'border-red-500': showError && isFieldEmpty(pais) }
                  ]"
                  type="text"
                />
              </div>
              <div class="mb-4">
                <p class="text-2xl py-0.5 font-sans">Estado</p>
                <input
                  v-model="estado"
                  :class="[
                    'form-control',
                    'border-2',
                    'rounded-3xl',
                    'px-4',
                    'pt-0.5',
                    'border-[#B66141]',
                    'w-10/12',
                    { 'border-red-500': showError && isFieldEmpty(estado) }
                  ]"
                  type="text"
                />
              </div>
              <div class="mb-4">
                <p class="text-2xl py-0.5 font-sans">Ciudad</p>
                <input
                  v-model="ciudad"
                  :class="[
                    'form-control',
                    'border-2',
                    'rounded-3xl',
                    'px-4',
                    'pt-0.5',
                    'border-[#B66141]',
                    'w-10/12',
                    { 'border-red-500': showError && isFieldEmpty(ciudad) }
                  ]"
                  type="text"
                />
              </div>
              <div class="mb-4">
                <p class="text-2xl py-0.5 font-sans">Código Postal</p>
                <input
                  v-model="codigoPostal"
                  :class="[
                    'form-control',
                    'border-2',
                    'rounded-3xl',
                    'px-4',
                    'pt-0.5',
                    'border-[#B66141]',
                    'w-10/12',
                    { 'border-red-500': showError && isFieldEmpty(codigoPostal) }
                  ]"
                  type="text"
                />
              </div>
              <div class="mb-4">
                <p class="text-2xl py-0.5 font-sans">Colonia</p>
                <input
                  v-model="colonia"
                  :class="[
                    'form-control',
                    'border-2',
                    'rounded-3xl',
                    'px-4',
                    'pt-0.5',
                    'border-[#B66141]',
                    'w-10/12',
                    { 'border-red-500': showError && isFieldEmpty(colonia) }
                  ]"
                  type="text"
                />
              </div>
              <div class="mb-4">
                <p class="text-2xl py-0.5 font-sans">Calle y Número</p>
                <input
                  v-model="calleNumero"
                  :class="[
                    'form-control',
                    'border-2',
                    'rounded-3xl',
                    'px-4',
                    'pt-0.5',
                    'border-[#B66141]',
                    'w-10/12',
                    { 'border-red-500': showError && isFieldEmpty(calleNumero) }
                  ]"
                  type="text"
                />
              </div>
              <div class="mb-4">
                <p class="text-2xl py-0.5 font-sans">Apto., suite., unidad, etc.</p>
                <input
                  v-model="apto"
                  :class="[
                    'form-control',
                    'border-2',
                    'rounded-3xl',
                    'px-4',
                    'pt-0.5',
                    'border-[#B66141]',
                    'w-10/12',
                    { 'border-red-500': showError && isFieldEmpty(apto) }
                  ]"
                  type="text"
                />
              </div>
            </div>
            <div>
              <div class="form-control text-left my-4">
                <label class="cursor-pointer flex items-center">
                  <input type="checkbox" class="checkbox checkbox-warning mr-2" />
                  <span class="label-text">Remember me</span>
                </label>
              </div>
            </div>
            <button
              @click="nextStep"
              class="btn bg-[#B66141] text-[#EDDAAB] relative right-12 lg:right-16 w-2/5 lg:w-1/4 rounded-full hover:text-black"
            >
              Siguiente
            </button>
          </div>

          <!-- Tercer paso -->
          <div :class="{ 'slide-down': step >= 3 }" v-if="step >= 4">
            <ul class="steps steps-vertical">
              <li class="step" data-content="3">Tercer paso de pago</li>
            </ul>
            <!-- Muestra los componentes de los tipos de pago -->
            <div class="grid grid-cols-3 gap-4 my">
              <button
                class="btn rounded-2xl custom-border text-lg lg:text-3xl text-[#662F25] py-1"
                @click="mostrarComponente('transferencias')"
                type="button"
              >
                Transferencias
              </button>
              <button
                class="btn rounded-2xl custom-border text-md md:text-11px lg:text-3xl text-[#662F25] py-1"
                @click="mostrarComponente('credito')"
                type="button"
              >
                Débito y Crédito
              </button>
              <button
                class="btn rounded-2xl custom-border text-lg lg:text-3xl text-[#662F25] py-1"
                @click="mostrarComponente('efectivo')"
                type="button"
              >
                Efectivo
              </button>
            </div>
            <div>
              <transferencias v-if="componenteActual === 'transferencias'" />
              <credito v-if="componenteActual === 'credito'" />
              <efectivo v-if="componenteActual === 'efectivo'" />
            </div>
            <button
              type="button"
              class="btn bg-[#B66141] text-[#EDDAAB] rounded-full w-2/4 relative top-10 hover:text-black"
            >
              Finalizar
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="md:col-span-4 sticky left-0 right-0 top-0">
      <p class="text-3xl mb-4">Productos</p>
      <div class="border-2 rounded-lg border-[#EDDAAB]">
        <!-- Aquí van los productos -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import Credito from '@/components/credito.vue'
import Transferencias from '@/components/transferencias.vue'
import Efectivo from '@/components/efectivo.vue'
import Navbarr from '@/components/Navbarr.vue'

export default defineComponent({
  name: 'pageFormulario',
  components: {
    Credito,
    Transferencias,
    Efectivo,
    Navbarr
  },
  setup() {
    const step = ref(1)
    const componenteActual = ref<'transferencias' | 'credito' | 'efectivo'>('transferencias')
    const valordelospago1 = ref('Metodo uno')
    const valordelospago2 = ref('Metodo dos')
    const valordelospago3 = ref('Metodo tres')

    const nombre = ref('')
    const apellido = ref('')
    const correo = ref('')
    const telefono = ref('')
    const pais = ref('')
    const estado = ref('')
    const ciudad = ref('')
    const codigoPostal = ref('')
    const colonia = ref('')
    const calleNumero = ref('')
    const apto = ref('')

    const showError = ref(false)

    const isFieldEmpty = (field: string) => field.trim() === ''

    const validateStep1 = () => {
      return !(
        isFieldEmpty(nombre.value) ||
        isFieldEmpty(apellido.value) ||
        isFieldEmpty(correo.value) ||
        isFieldEmpty(telefono.value)
      )
    }

    const validateStep2 = () => {
      return !(
        isFieldEmpty(pais.value) ||
        isFieldEmpty(estado.value) ||
        isFieldEmpty(ciudad.value) ||
        isFieldEmpty(codigoPostal.value) ||
        isFieldEmpty(colonia.value) ||
        isFieldEmpty(calleNumero.value) ||
        isFieldEmpty(apto.value)
      )
    }

    const nextStep = () => {
      if (step.value < 4) {
        step.value += 1
        showError.value = false
      }
    }

    const mostrarComponente = (componente: 'transferencias' | 'credito' | 'efectivo') => {
      componenteActual.value = componente
    }

    return {
      step,
      nextStep,
      componenteActual,
      mostrarComponente,
      nombre,
      apellido,
      correo,
      telefono,
      pais,
      estado,
      ciudad,
      codigoPostal,
      colonia,
      calleNumero,
      apto,
      isFieldEmpty,
      showError
    }
  }
})
</script>

<style scoped>
input[type='number'] {
  -moz-appearance: textfield;
}

input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.custom-border {
  border: 4px double black;
}

.custom-border:hover {
  border: 4px double black;
}

.slide-down {
  animation: slide-down 0.5s ease-out;
}

@keyframes slide-down {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }

  50% {
    transform: translateY(-70%);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.border-red-500 {
  border-color: red;
}
</style>
