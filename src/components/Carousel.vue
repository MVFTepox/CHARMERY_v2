<template>
  <div class="carousel relative w-full overflow-hidden bg-[#FBF8EE] h-[400px] px-2">
    <div
      class="flex transition-transform duration-500 ease-in-out w-full"
      :style="{ transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)` }"
    >
      <div v-for="(slide, index) in slides" :key="index" class="carousel-item mx-1">
        <div class="card card-compact m-4 p-1 text-center">
          <img :src="slide.img" :alt="slide.title" class="object-cover w-full h-full rounded-box" />
          <h2 class="card-title text-[#662f25]">{{ slide.description }}</h2>
        </div>
      </div>
    </div>
    <div
      class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between p-4 m-2"
    >
      <button @click="prevSlide" class="btn btn-circle btn-ghost hover:bg-[#eddaab]">
        <span class="material-symbols-rounded text-[#b66141]"> arrow_back_ios </span>
      </button>
      <button @click="nextSlide" class="btn btn-circle btn-ghost hover:bg-[#eddaab]">
        <span class="material-symbols-rounded text-[#b66141]"> arrow_forward_ios </span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const currentSlide = ref(0)
const slides = [
  {
    img: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
    title: 'Shoes!',
    description: 'If a dog chews shoes whose shoes does he choose?'
  },
  {
    img: 'https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp',
    title: 'Shoes!',
    description: 'If a dog chews shoes whose shoes does he choose?'
  },
  {
    img: 'https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp',
    title: 'Shoes!',
    description: 'If a dog chews shoes whose shoes does he choose?'
  },
  {
    img: 'https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp',
    title: 'Shoes!',
    description: 'If a dog chews shoes whose shoes does he choose?'
  },
  {
    img: 'https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp',
    title: 'Shoes!',
    description: 'If a dog chews shoes whose shoes does he choose?'
  },
  {
    img: 'https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp',
    title: 'Shoes!',
    description: 'If a dog chews shoes whose shoes does he choose?'
  }
]

const slidesToShow = 3

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length
}

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length
}
</script>

<style>
.carousel-item {
  flex: 0 0 calc(100% / 3);
  transition: transform 0.5s ease-in-out;
}
h2 {
  font-family: El Messiri;
}
</style>
