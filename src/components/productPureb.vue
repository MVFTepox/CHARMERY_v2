<template>
  <div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 rounded-3xl px-10">
      <div class="flex justify-center items-center">
<<<<<<< HEAD
        <div class="carousel size-5/6 rounded-3xl shadow-lg shadow-gray-400">
=======
        <div class="carousel w-full rounded-3xl shadow-lg shadow-gray-400">
>>>>>>> 51a95779429729c6ccd5c0586d75b4c87091d09e
          <div id="slide1" class="carousel-item relative w-full">
            <img :src="img1" class="w-full rounded-3xl" />
            <div
              class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"
            >
              <a href="#slide2" class="btn btn-circle">❮</a>
              <a href="#slide2" class="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide2" class="carousel-item relative w-full">
            <img :src="img2" class="w-full rounded-3xl" />
            <div
              class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"
            >
              <a href="#slide1" class="btn btn-circle">❮</a>
              <a href="#slide1" class="btn btn-circle">❯</a>
            </div>
          </div>
        </div>
      </div>
      <div class="font-DMsans flex flex-col justify-center">
        <div>
          <p class="text-7xl font-elmessiri text-[#CB8844] text-center">{{ nombreDelArticulo }}</p>
        </div>
        <div class="justify-center flex">
          <div class="grid grid-cols-2 my-4 gap-32 md:gap-44 lg:gap-56">
            <p class="text-3xl text-center text-[#B66141]">{{ Categoría }}</p>
            <p class="text-3xl text-center text-[#B66141]">{{ Estilo }}</p>
          </div>
        </div>
        <div>
          <p class="text-4xl text-[#662F25]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci assumenda autem
          </p>
          <p class="text-7xl font-elmessiri my-4 text-[#CB8844]">{{ precioDelArticulo }}</p>
        </div>
        <div class="my-4">sds</div>
        <div class="my-4">
          <button
            class="btn rounded-3xl bg-[#B66141] text-white w-full text-2xl hover:text-[#cb8844]"
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="carousel w-full">
    <div id="item1" class="carousel-item w-full">
      <img
        src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
        class="w-full"
      />
    </div>
    <div id="item2" class="carousel-item w-full">
      <img
        src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
        class="w-full"
      />
    </div>
    <div id="item3" class="carousel-item w-full">
      <img
        src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
        class="w-full"
      />
    </div>
    <div id="item4" class="carousel-item w-full">
      <img
        src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
        class="w-full"
      />
    </div>
  </div>
  <div class="flex w-full justify-center gap-2 py-2">
    <a href="#item1" class="btn btn-xs">1</a>
    <a href="#item2" class="btn btn-xs">2</a>
    <a href="#item3" class="btn btn-xs">3</a>
    <a href="#item4" class="btn btn-xs">4</a>
  </div>
</template>


<script lang="ts">
import { defineComponent, ref } from 'vue'
import img1Src from '@/assets/img/moño perla zoom editado.png'
import img2Src from '@/assets/img/collar corazon realista editado.png'

export default defineComponent({
  name: 'pageVentaProducto',
  setup() {
    const img1 = ref(img1Src)
    const img2 = ref(img2Src)

    const Categoría = ref('Collar')
    const Estilo = ref('Corazón Realista')

    const nombreDelArticulo = ref('Collar Corazón Realista')
    const precioDelArticulo = ref('$ 15')

    return {
      img1,
      img2,
      nombreDelArticulo,
      precioDelArticulo,
      Categoría,
      Estilo
    }
  }
})
</script>
