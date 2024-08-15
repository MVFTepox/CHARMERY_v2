<template>
  <Navbar/>
    <div class="container mx-auto sm:px-4 lg:px-16 pt-16 px-4 mb-32">
      <h1 class="text-6xl text-orange mb-6 font-elmessiri">Bolsa de compras</h1>
      <div class="flex flex-col lg:flex-row gap-6">
        <div class="w-full lg:w-2/3">
          <div class="border-2 rounded-3xl p-4" style="border-color: #eddaab;">
            <div class="flex items-center justify-between pb-2 mb-2">
              <div class="flex items-center justify-center">
                <input type="checkbox" v-model="selectAll" @change="toggleSelectAll" id="all"
                class="transition-all hover:scale-105 me-3 border-2 rounded-3xl checkbox border-[#b66141] [--chkbg:#b66141] [--chkfg:#eddaab] checked:border-[#b66141]" />
              </div>
              <div class="flex w-full justify-between font-DMsans">
                <span class="w-1/3 text-left text-orange text-lg">Seleccionar todo</span>
                <span class="w-1/3 text-center text-orange text-lg">Cantidad</span>
                <span class="w-1/3 text-center text-orange text-lg">Total</span>
              </div>
            </div>
            <CartItem v-for="item in items" :key="item.id" :item="item" :update-totals="updateTotals" :remove-item-from-cart="removeItem" />
          </div>
        </div>
  
        <div class="w-full lg:w-1/3" style="font-family: 'El Messiri';">
          <div class="border-2 rounded-3xl p-4" style="border-color: #cb8844;">
            <div class="mb-4 flex justify-between items-end font-elmessiri">
              <p class="text-orange text-3xl">Subtotal</p>
              <p class="text-brown text-4xl">${{ subtotal }}</p>
            </div>
            <div class="mb-4 flex justify-between items-end font-elmessiri">
              <p class="text-orange text-3xl">IVA</p>
              <p class="text-brown text-4xl">${{ iva }}</p>
            </div>
  
            <div class="mb-4 flex flex-col justify-between h-full">
              <p class="text-orange text-3xl font-elmessiri">Envío</p>
              <div>
                <div class="flex mt-4">
                  <button :class="{'active-button': shipping === 'standard'}" class="ps-0 btn w-full justify-between hover:border-2 hover:bg-[#eddaab] bg-transparent" name="shipping" value="standard" @click="updateShipping('standard')" style="border-color: #cb8844;">
                    <img src="../assets/img/deliver.png" alt="" class="max-h-10 min-h-8 w-auto">
                    <p class="text-midbrown text-base xl:text-2xl font-light md:text-2xl sm:text-2xl lg:text-base">Envío estándar</p>
                    <p class="text-brown text-2xl font-normal font-elmessiri">$30</p>
                  </button>
                </div>
                <div class="flex mt-4">
                  <button :class="{'active-button': shipping === 'personal'}" class="btn w-full justify-between hover:border-2 hover:bg-[#eddaab] bg-transparent" name="shipping" value="personal" @click="updateShipping('personal')" style="border-color: #cb8844;">
                    <img src="../assets/img/volunteer.png" alt="" class="max-h-10 min-h-8">
                    <p class="text-midbrown text-base xl:text-2xl font-light md:text-2xl sm:text-2xl lg:text-base">Entrega en persona</p>
                    <p class="text-brown text-2xl font-normal font-elmessiri">$0</p>
                  </button>
                </div>
              </div>
            </div>
  
            <div class="w-full flex justify-center">
              <div class="pt-2 flex justify-between items-end w-4/6 font-elmessiri">
                <p class="text-brown text-3xl">Total</p>
                <p class="text-brown text-4xl">${{ total }}</p>
              </div>
            </div>
  
            <div class="flex justify-center">
              <button class="btn btn-wide mt-4 rounded-3xl text-xl font-medium tracking-wide hover:scale-105 font-DMsans" style="background-color: #b66141; color: #eddaab;">Pagar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <PageFooter/>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, computed } from 'vue';
  import CartItem from '../components/cartCard.vue';
  import Navbar from '@/components/Navbarr2.vue';
  import PageFooter from '@/components/footer.vue'
  
  interface Item {
    id: number;
    name: string;
    price: number;
    quantity: number;
    total: number;
    photo: string;
    checked: boolean;
  }
  
  export default defineComponent({
    components: {
      CartItem,
      Navbar,
      PageFooter
    },
    setup() {
      const selectAll = ref(true);
      const items = ref<Item[]>([
        { id: 1, name: 'Aretes de corazón', price: 32, quantity: 1, total: 32, photo: '../src/assets/img/prod-ex-1.jpg', checked: true },
        { id: 2, name: 'Pulsera de mariposa', price: 26, quantity: 1, total: 26, photo: '../src/assets/img/prod-ex-2.jpg', checked: true },
        { id: 3, name: 'Set anillos cuadrados', price: 54, quantity: 1, total: 54, photo: '../src/assets/img/prod-ex-3.jpg', checked: true },
      ]);
      const shipping = ref('standard');
      const subtotal = computed(() => items.value.reduce((acc, item) => item.checked ? acc + item.total : acc, 0).toFixed(2));
      const iva = computed(() => (parseFloat(subtotal.value) * 0.16).toFixed(2));
      const total = computed(() => (parseFloat(subtotal.value) + parseFloat(iva.value) + (shipping.value === 'standard' ? 30 : 0)).toFixed(2));
  
      function updateTotals() {
        subtotal.value;
        iva.value;
        total.value;
        checkSelectAll();
      }
  
      function toggleSelectAll() {
        const newValue = selectAll.value;
        items.value.forEach(item => {
          item.checked = newValue;
        });
        updateTotals();
      }
  
      function checkSelectAll() {
        selectAll.value = items.value.every(item => item.checked);
      }
  
      function updateShipping(option: string) {
        shipping.value = option;
        updateTotals();
      }
  
      function removeItem(itemId: number) {
        items.value = items.value.filter(item => item.id !== itemId);
        updateTotals();
      }
  
      return {
        items,
        shipping,
        subtotal,
        iva,
        total,
        selectAll,
        updateTotals,
        toggleSelectAll,
        checkSelectAll,
        updateShipping,
        removeItem,
      };
    }
  });
  </script>
  
  <style>
.text-midbrown{
  color: #b66141;
}

  .text-orange {
    color: #cb8844;
  }
  
  .text-brown {
    color: #662f25;
  }
  
  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  
  input[type="number"] {
    appearance: textfield;
  }
  
  .active-button {
    background-color: #eddaab;
  }
  </style>
  