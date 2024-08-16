<template>
    <div class="relative w-full max-w-lg mx-auto">
        <div class="overflow-hidden relative">
            <div class="flex transition-transform duration-500"
                :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
                <div v-for="(image, index) in images" :key="index" class="w-full flex-shrink-0">
                    <img :src="image" class="w-full h-64 object-cover" />
                </div>
            </div>
        </div>
        <button @click="prevSlide"
            class="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
            Prev
        </button>
        <button @click="nextSlide"
            class="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
            Next
        </button>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: 'Carousel',
    props: {
        images: {
            type: Array as () => string[],
            required: true
        }
    },
    setup(props) {
        const currentIndex = ref(0);

        const prevSlide = () => {
            if (currentIndex.value > 0) {
                currentIndex.value -= 1;
            } else {
                currentIndex.value = props.images.length - 1;
            }
        };

        const nextSlide = () => {
            if (currentIndex.value < props.images.length - 1) {
                currentIndex.value += 1;
            } else {
                currentIndex.value = 0;
            }
        };

        return { currentIndex, prevSlide, nextSlide };
    }
});
</script>

<style scoped>
.carousel img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>