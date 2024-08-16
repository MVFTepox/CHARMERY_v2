<template>
    <div>
        <Navbarr2 />
    </div>
    <div>
        <componentAccount  class=" mx-auto my-5"/>
    </div>
    <div>
        <Pagefooter />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import componentAccount from '@/components/MiCuenta.vue';
import Pagefooter from '@/components/footer.vue';
import Navbarr from '@/components/Navbarr.vue';
import Navbarr2 from '@/components/Navbarr2.vue';

export default defineComponent({
    name: 'PageAccount',
    components: {  
        componentAccount,
        Navbarr,
        Pagefooter,
        Navbarr2

    }
})
</script>
