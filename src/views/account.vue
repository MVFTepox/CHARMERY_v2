<template>
    <div>
        <Navbarr />
    </div>
    <div>
        <componetAccount />
    </div>
    <div>
        <Pagefooter />
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import componetAccount from '@/components/MiCuenta.vue';
import Pagefooter from '@/components/footer.vue';
import Navbarr from '@/components/Navbarr.vue';

export default defineComponent({
    name: 'PageAccount',
    component: {
        componetAccount,
        Navbarr,
        Pagefooter
    }
})

</script>