<template>
    <div>
        <Navbarr1 />
    </div>
    <div>
        <carouselHome />
    </div>
    <div class="  my-1  ">
        <div class="divider"></div>
        <div class=" w-full my-auto ">
            <carruselprincipalPage :images="images" class="" />
        </div>
        <div class="mt-10">
            <p class="py-2 divider text-5xl font-elmessiri text-center text-[#B66141]">Y2K</p>
        </div>
    </div>
    <div class="px-10 my-4">
        <div class="flex  justify-between px-10 my-5">
            <p class="text-5xl font-elmessiri text-[#B66141] ">Aretes</p>
            <input type="button" value="Ver mas" class="btn bg-[#B66141] text-[#EDDAAB] rounded-2xl w-1/3 md:w-1/6 lg:w-2/12 hover:text-black">
        </div>
        <hr style="border-color: #eddaab ;border-width: 2px">

        <div class="px-5">

            <p></p>
            <CarruselProductosdeArticulos />
        </div>
    </div>
    <div class="px-10 my-4">
        <div class="flex  justify-between px-10 my-5">
            <p class="text-5xl font-elmessiri text-[#B66141] ">Collares</p>
            <input type="button" value="Ver mas" class="btn bg-[#B66141] text-[#EDDAAB] rounded-2xl w-1/3 md:w-1/6 lg:w-2/12 hover:text-black">
        </div>
        <hr style="border-color: #eddaab ;border-width: 2px">

        <div class="px-5">

            <p></p>
            <CarruselProductosdeArticulos />
        </div>
    </div>

    <div>
        <Pagefooter />
    </div>


</template>

<script lang="ts">

import { defineComponent, ref } from 'vue';
import carouselHome from '@/components/Home.vue';
import Pagefooter from '@/components/footer.vue';
import Navbarr1 from '@/components/Navbarr.vue';
import Navbarr2 from '@/components/Navbarr2.vue';
import carruselprincipalPage from '@/components/carruselprincipalPage.vue';
import img1Src from '@/assets/img/Fedi_Nuziali.jpg'
import img2Src from '@/assets/img/anillos_1.jpg'
import CarruselProductosdeArticulos from '@/components/CarruselProductosdeArticulos.vue';

export default defineComponent({
    name: 'pageHome',
    components: {
        carouselHome,
        Pagefooter,
        Navbarr1,
        Navbarr2,
        carruselprincipalPage,
        CarruselProductosdeArticulos

    },

    setup() {
        const registrado = ref(false);

        return { registrado }


    },

    data() {
        return {
            images: [
                img1Src, img2Src
            ],
        };
    },

})
</script>