<template>
  <div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6   rounded-3xl px-10">
      <div class="flex justify-center items-center">
        <div class="carousel size-5/6 w rounded-3xl shadow-lg shadow-gray-400">
          <div id="slide1" class="carousel-item relative w-full">
            <img :src="img1" class="w-full" />
            <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide2" class="btn btn-circle">❮</a>
              <a href="#slide2" class="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide2" class="carousel-item relative w-full">
            <img :src="img2" class="w-full" />
            <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
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
            <p class="text-4xl text-[#B66141]">Categoría</p>
            <p class="text-4xl text-[#B66141]">Estilo</p>
          </div>
        </div>

        <div>
          <p class="text-4xl text-[#662F25]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
            assumenda
            autem</p>
          <p class="text-7xl font-elmessiri my-4 text-[#CB8844]">{{ precioDelArticulo }}</p>
        </div>
        <div class="my-4">
          sds
        </div>

        <div class="my-4">
          <button
            class="btn rounded-3xl bg-[#B66141] text-white w-full text-2xl hover:text-[#cb8844]">Agregar al carrito</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent, ref } from 'vue';
import img1Src from '@/assets/img/moño perla zoom editado.png';
import img2Src from '@/assets/img/collar corazon realista editado.png';

export default defineComponent({
  name: 'pageVentaProducto',
  setup() {
    const img1 = ref(img1Src);
    const img2 = ref(img2Src);

    const nombreDelArticulo = ref('Collar Corazón Realista');

    const precioDelArticulo = ref('$ 15');

    return {
      img1,
      img2,
      nombreDelArticulo,
      precioDelArticulo
    };
  },
});

</script>
