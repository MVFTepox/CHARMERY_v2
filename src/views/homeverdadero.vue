<template>
    <div>
        <carouselHome />
    </div>
</template>
<script lang='ts'>

import {defineComponent, ref} from 'vue';
import carouselHome from '@/components/Home.vue'


export default defineComponent({
    name: 'Home',
    components:{
      carouselHome,  
    }

})



</script>