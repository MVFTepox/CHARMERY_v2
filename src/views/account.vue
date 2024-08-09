<template>
    <div>
        <Navbarr />
    </div>
    <div>
        <componentAccount />
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

export default defineComponent({
    name: 'PageAccount',
    components: {  
        componentAccount,
        Navbarr,
        Pagefooter
    }
})
</script>
