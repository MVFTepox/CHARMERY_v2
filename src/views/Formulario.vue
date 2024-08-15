<template>
  <Navbarr2 />
  <div class="px-10 lg:px-20 gap-5 grid grid-cols-1 md:grid-cols-12 my-4 font-DMsans">
    <div class="md:col-span-8 mb-4">
      <div class="border-2 rounded-lg p-4 grid grid-cols-1 border-[#EDDAAB]">
        <p class="text-3xl mb-4 font-elmessiri">Escoje tu metodo de pago</p>
        <div id="metodo">

        </div>
        <button @click="nextStep">
          <div
            class="border-2 rounded-lg p-4 my-4 border-[#EDDAAB] hover:cursor-pointer hover:scale-95 hover:shadow-md">
            <div>
              <span class="material-symbols-rounded text-5xl border-4 rounded-full border-[#B66141]">
                add
              </span>
              <p class="text-3xl  font-elmessiri">Crear un nuevo metodo de Pago</p>
            </div>
          </div>
        </button>
      </div>
      <div :class="{ 'slide-down': step >= 2 }" v-if="step >= 2">
        <p class="text-3xl mb-4 mt-5">Pago</p>
        <div class="border-2 rounded-lg p-4 border-[#EDDAAB] py-8">
          <!-- PRIMER PASO -->
          <div>
            <ul class="steps steps-vertical">
              <li class="step">Primer paso de pago</li>
            </ul>
            <div class="grid grid-cols-1 lg:grid-cols-2 mb-4">
              <!-- Nombre -->
              <div>
                <p class="text-2xl py-0.5 font-sans">Nombre</p>
                <input v-model="nombre"
                  class="form-control border-2 rounded-3xl px-4 pt-0.5 border-[#B66141] w-full lg:w-10/12" type="text"
                  aria-describedby="nombreError" />
                <p v-if="!isNameValid && !confirmacion" id="nombreError" class="text-red-500">
                  El campo de nombre no puede estar vacío.
                </p>
              </div>
              <!-- Apellido -->
              <div>
                <p class="text-2xl py-0.5 font-sans">Apellido</p>
                <input v-model="apellido"
                  class="form-control border-2 rounded-3xl px-4 pt-0.5 border-[#B66141] w-full lg:w-10/12" type="text"
                  aria-describedby="apellidoError" />
                <p v-if="!isapellidoValid" id="apellidoError" class="text-red-500">
                  El campo de apellido no puede estar vacío.
                </p>
              </div>
            </div>
            <!-- Correo -->
            <div class="mb-4">
              <p class="text-2xl py-0.5 font-sans">Correo electrónico</p>
              <input v-model="correo"
                class="form-control border-2 rounded-3xl px-4 pt-0.5 border-[#B66141] w-full lg:w-9/12" type="text"
                aria-describedby="correoError" />
              <p v-if="!isEmailValid" id="correoError" class="text-red-500">
                El correo electrónico no es válido.
              </p>
            </div>
            <div class="mb-4">
              <div>

              </div>
              <p class="text-2xl py-0.5 font-MDsans my-2">Teléfono</p>
              <label class="flex items-center gap-2 border-none focus:aparece-none w-2/5">
                +52
                <input v-model="telefono" class="grow border-2 rounded-3xl px-4 pt-1 border-[#B66141]" type="phone"
                  aria-describedby="telefonoError" />
              </label>
              <p v-if="!isPhoneNumberValid" id="telefonoError" class="text-red-500">
                El campo no puede estar vacío y debe tener minimo 10 digitos
              </p>
            </div>
          </div>
          <button @click="nextStep2" id="btn1" :class="{ 'hidden': !isFormValid1, 'block': isFormValid1 }"
            class="btn bg-[#B66141] text-[#EDDAAB] relative right-12 lg:right-16 w-2/5 lg:w-1/4 rounded-full hover:text-black">
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
                <input v-model="pais" class="form-control border-2 rounded-3xl px-4 pt-0.5 border-[#B66141] w-10/12"
                  type="text" aria-describedby="paisError" />
                <p v-if="!isPaisValid" id="paisError" class="text-red-500">
                  El campo no puede estar vacío.
                </p>
              </div>
              <div class="mb-4">
                <p class="text-2xl py-0.5 font-sans">Estado</p>
                <input v-model="estado" class="form-control border-2 rounded-3xl px-4 pt-0.5 border-[#B66141] w-10/12"
                  type="text" aria-describedby="estadoError" />
                <p v-if="!isEstadoValid" id="estadoError" class="text-red-500">
                  El campo no puede estar vacío.
                </p>
              </div>
              <div class="mb-4">
                <p class="text-2xl py-0.5 font-sans">Ciudad</p>
                <input v-model="ciudad" class="form-control border-2 rounded-3xl px-4 pt-0.5 border-[#B66141] w-10/12"
                  type="text" aria-describedby="ciudadError" />
                <p v-if="!isCiudadValid" id="ciudadError" class="text-red-500">
                  El campo no puede estar vacío.
                </p>
              </div>
              <div class="mb-4">
                <p class="text-2xl py-0.5 font-sans">Código Postal</p>
                <input v-model="cp" class="form-control border-2 rounded-3xl px-4 pt-0.5 border-[#B66141] w-10/12"
                  type="number" aria-describedby="cpError" />
                <p v-if="!isCPValid" id="cpError" class="text-red-500">
                  El campo no puede estar vacío.
                </p>
              </div>
              <div class="mb-4">
                <p class="text-2xl py-0.5 font-sans">Colonia</p>
                <input v-model="colonia" class="form-control border-2 rounded-3xl px-4 pt-0.5 border-[#B66141] w-10/12"
                  type="text" aria-describedby="coloniaError" />
                <p v-if="!isColoniaValid" id="coloniaError" class="text-red-500">
                  El campo no puede estar vacío.
                </p>
              </div>
              <div class="mb-4">
                <p class="text-2xl py-0.5 font-sans">Calle y Número</p>
                <input v-model="calleNumero"
                  class="form-control border-2 rounded-3xl px-4 pt-0.5 border-[#B66141] w-10/12" type="text"
                  aria-describedby="calleNumeroError" />
                <p v-if="!isCalleNumValid" id="calleNumeroError" class="text-red-500">
                  El campo no puede estar vacío.
                </p>
              </div>
              <div class="mb-4">
                <p class="text-2xl py-0.5 font-sans">Apto., suite., unidad, etc. (opcional)</p>
                <input class="form-control border-2 rounded-3xl px-4 pt-0.5 border-[#B66141] w-10/12" type="text" />
              </div>
            </div>
            <div>
              
            </div>
            <button @click="nextStep3" id="btn2" :class="{ 'hidden': !isFormValid2, 'block': isFormValid2 }"
              class="btn bg-[#B66141] text-[#EDDAAB] relative right-12 lg:right-16 w-2/5 lg:w-1/4 rounded-full hover:text-black">
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
              <button class="btn rounded-2xl custom-border text-lg lg:text-3xl text-[#662F25] py-1"
                @click="mostrarComponente('transferencias')" type="button">
                Transferencias
              </button>
              <button class="btn rounded-2xl custom-border text-md md:text-11px lg:text-3xl text-[#662F25] py-1"
                @click="mostrarComponente('credito')" type="button">
                Débito y Crédito
              </button>
              <button class="btn rounded-2xl custom-border text-lg lg:text-3xl text-[#662F25] py-1"
                @click="mostrarComponente('efectivo')" type="button">
                Efectivo
              </button>
            </div>
            <div>
              <transferencias v-if="componenteActual === 'transferencias'" />
              <Credito v-if="componenteActual === 'credito'" :creditoData="creditoData"
                @update:creditoData="updateCreditoData" />
              <efectivo v-if="componenteActual === 'efectivo'" />
            </div>
            <button type="button" @click="nextStep4"
              class="btn bg-[#B66141] text-[#EDDAAB] rounded-full w-2/4 relative top-10 hover:text-black">
              Finalizar
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="md:col-span-4 sm:order-first md:order-last sticky left-0 right-0 top-0">
      <div id="carrito"> <!-- agarrrar para la creacion del componente carrito -->
        <div class="p-4 border-2 rounded-lg border-[#EDDAAB]">
          <p class="text-3xl font-elmessiri">Resmuen de compra</p>
          <div class="my-4 ">
            <!-- cambiar a variable -->
            <div class="grid grid-cols-4 gap-4">
              <div class="p-2 ">
                <img src="../assets/img/collar corazon realista editado.png" class="rounded-lg size-auto" alt="corazon">
              </div>
              <div class="col-span-2  py-3  text-center">
                <p class=" text-2xl font-DMSans">Corazón</p>
                <!-- cantidad -->
                <div class="grid grid-cols-1 lg:grid-cols-2 text-center gap-1 md:gap-2 lg:gap-4">
                  <div>
                    <p class="text-2xl font-DMSans">Cantidad: </p>
                  </div>
                  <div>
                    <p class="text-2xl font-DMSans">1</p>
                  </div>
                </div>
              </div>
              <div class=" text-center flex items-center justify-center">
                <p class="text-2xl font-elmessiri text-[#662F25]">$ 15.00</p>
              </div>
            </div>
            <hr>
            <div class="my-4">
              <p class="text-2xl font-elmessiri text-[#662F25]">Entrega en persona</p>
              <p class="text-2xl font-elmessiri text-[#662F25]">$ 0.00</p>
            </div>
            <div class="flex justify-between my-4">
              <p class="text-2xl font-elmessiri text-[#662F25]">Total</p>
              <p class="text-2xl font-elmessiri text-[#662F25]">$ 15.00</p>
            </div>
          </div>
          <div class="text-center">
            <a :href="PagarMEtodo == 2 || PagarMEtodo == 3 ? '/pedidoConfirm' : '/'">
              <button class="btn bg-[#B66141] text-[#EDDAAB] rounded-full w-3/4 hover:text-black">
                <span class="material-symbols-rounded">shopping_cart</span>Pagar
              </button>
            </a>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import Credito from '@/components/credito.vue'
import Transferencias from '@/components/transferencias.vue'
import Efectivo from '@/components/efectivo.vue'
import Navbarr2 from '@/components/Navbarr2.vue'
import { validateEmail, validateNombre, validateApellido, validateCP, validateCalleNum, validateCiudad, validateColonia, validatePais, validatePhoneNumber, validateEstado } from '@/Utils/validacionForm'


export default defineComponent({
  name: 'pageFormulario',
  components: {
    Credito,
    Transferencias,
    Efectivo,
    Navbarr2
  },
  setup() {

    const creditoData = ref({
      name: '',
      numerotarjeta: '',
      expiracion: '',
      cvv: '',
    });

    const efectivoData = ref({
      address: '',
      time: '',
      meridian: '',
    });

    const step = ref(1)
    const componenteActual = ref<'transferencias' | 'credito' | 'efectivo'>('transferencias')
    const valordelospago1 = ref('Metodo uno')
    const valordelospago2 = ref('Metodo dos')
    const valordelospago3 = ref('Metodo tres')

    const nombre = ref<string>('')
    const apellido = ref<string>('')
    const correo = ref<string>('')
    const calleNumero = ref<string>('')
    const colonia = ref<string>('')
    const cp = ref<number>(0)
    const estado = ref<string>('')
    const ciudad = ref<string>('')
    const pais = ref<string>('')
    const telefono = ref<number>(0)
    const confirmacion = ref(false)

    const isNameValid = computed(() => validateNombre(nombre.value))
    const isEmailValid = computed(() => validateEmail(correo.value))
    const isapellidoValid = computed(() => validateApellido(apellido.value))
    const isCPValid = computed(() => validateCP(cp.value))
    const isCalleNumValid = computed(() => validateCalleNum(calleNumero.value))
    const isColoniaValid = computed(() => validateColonia(colonia.value))
    const isCiudadValid = computed(() => validateCiudad(ciudad.value))
    const isPaisValid = computed(() => validatePais(pais.value))
    const isPhoneNumberValid = computed(() => validatePhoneNumber(telefono.value))
    const isEstadoValid = computed(() => validateEstado(estado.value))
    const isFormValid1 = computed(() => isNameValid.value && isEmailValid.value && isapellidoValid.value && isPhoneNumberValid.value)
    const isFormValid2 = computed(() => isCPValid.value && isCalleNumValid.value && isColoniaValid.value && isCiudadValid.value && isPaisValid.value)

    const updateCreditoData = (data: any) => {
      creditoData.value = data;
    };

   const updateEfectivoData = (data: any) => {
      efectivoData.value = data;
    };

    const PagarMEtodo = ref(0)

    const nextStep4 = () => {

      const div = document.getElementById('metodo') as HTMLDivElement
      const div2 = document.createElement('div')
      if (componenteActual.value === 'transferencias') {
        div.classList.add('border-2', 'rounded-lg', 'p-4', 'my-4', 'border-[#EDDAAB]', 'hover:cursor-pointer', 'hover:scale-95', 'hover:shadow-md')

        div2.innerHTML = `
  <div class="form-control">
    <label class="label cursor-pointer">
      <span class="label-text">${componenteActual.value}</span>
      <input type="radio" value="1" v-model="PagarMEtodo" name="radio-10" class="radio checked:bg-[#B66141]" />
    </label>
  </div>
  

  `
        div.appendChild(div2)

        
      } else if (componenteActual.value === 'credito') {
        div.classList.add('border-2', 'rounded-lg', 'p-4', 'my-4', 'border-[#EDDAAB]', 'hover:cursor-pointer', 'hover:scale-95', 'hover:shadow-md')

        div2.innerHTML = `
  <div class="form-control">
    <label class="label cursor-pointer">
      <span class="label-text">${componenteActual.value}</span>
      <input type="radio" name="radio-10" value="2" v-model="PagarMEtodo" class="radio checked:bg-[#B66141]" />
    </label>
  </div>
          <h1 class="text-lg font-elmessiri">${creditoData.value.name}</h1>
          <h1 class="text-lg font-elmessiri">${creditoData.value.numerotarjeta}</h1>
          <h1 class="text-lg font-elmessiri">${creditoData.value.expiracion}</h1>
          <h1 class="text-lg font-elmessiri">${creditoData.value.cvv}</h1>
  `
        div.appendChild(div2)

        
      } else if (componenteActual.value === 'efectivo') {

        div.classList.add('border-2', 'rounded-lg', 'p-4', 'my-4', 'border-[#EDDAAB]', 'hover:cursor-pointer', 'hover:scale-95', 'hover:shadow-md')

        div2.innerHTML = `
  <div class="form-control">
    <label class="label cursor-pointer">
      <span class="label-text">${componenteActual.value}</span>
      <input type="radio" name="radio-10" value="3" v-model="PagarMEtodo" class="radio checked:bg-[#B66141]" />
    </label>
  </div>
  <p>${efectivoData.value.address}</p><p>${efectivoData.value.time}</p><p>${efectivoData.value.meridian}</p>
  `
        div.appendChild(div2)

        
      }
      resetForm()
    }


    const resetForm = () => {
      nombre.value = ''
      apellido.value = ''
      correo.value = ''
      calleNumero.value = ''
      colonia.value = ''
      cp.value = 0
      estado.value = ''
      ciudad.value = ''
      pais.value = ''
      telefono.value = 0
      confirmacion.value = false
      creditoData.value = {
        name: '',
        numerotarjeta: '',
        expiracion: '',
        cvv: '',
      }
      efectivoData.value = {
        address: '',
        time: '',
        meridian: '',
      }
      
      componenteActual.value = 'transferencias'
      step.value = 1
    }

    const nextStep = () => {
      confirmacion.value = true
      if (step.value <= 1) {
        step.value += 1
      }
    }
    const nextStep2 = () => {
      confirmacion.value = true
      if (step.value < 3 && isFormValid1.value) {
        step.value += 1
      }
    }
    const nextStep3 = () => {
      confirmacion.value = true
      if (step.value < 4 && isFormValid2.value) {
        step.value += 1
      }
    }
    const mostrarComponente = (componente: 'transferencias' | 'credito' | 'efectivo') => {
      componenteActual.value = componente
    }

    // data.data.forEach((element: any) => {

    //   //aqui va estar lo de la api
    // })


    return {
      step,
      nextStep,
      nextStep2,
      nextStep3,
      nextStep4,
      componenteActual,
      mostrarComponente,

      valordelospago1,
      valordelospago2,
      valordelospago3,

      correo,
      isEmailValid,

      nombre,
      isNameValid,

      apellido,
      isapellidoValid,

      calleNumero,
      isCalleNumValid,

      colonia,
      isColoniaValid,

      cp,
      isCPValid,

      estado,
      isEstadoValid,

      pais,
      isPaisValid,
      ciudad,
      isCiudadValid,

      telefono,
      isPhoneNumberValid,

      isFormValid1,
      isFormValid2,

      confirmacion,

      creditoData,
      updateCreditoData,

      efectivoData,
      updateEfectivoData,

      PagarMEtodo,

      

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
</style>
