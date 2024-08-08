<template>
    <div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 rounded-3xl px-10">
            <div class="flex justify-center items-center">
                <CarouselProduct :images="images" />
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
                    <button class="btn rounded-3xl bg-[#B66141] text-white w-full text-2xl hover:text-[#cb8844]">
                        Agregar al carrito
                    </button>
                </div>
            </div>
        </div>

    </div>



</template>


<script lang="ts">
import { defineComponent, ref } from 'vue'
import img1Src from '@/assets/img/moño perla zoom editado.png'
import img2Src from '@/assets/img/collar corazon realista editado.png'
import CarouselProduct from '@/components/CarruselProducto.vue'

export default defineComponent({
    name: 'pageVentaProducto',

    components: {
        CarouselProduct
    },

    data() {
        return {
            images: [
                img1Src, img2Src
            ],
        };
    },

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