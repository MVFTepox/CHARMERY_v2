<template>
<<<<<<< HEAD
    <div>
        <Registro/>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import Login from '@/components/Login.vue';
import Registro from '@/components/Registro.vue';
export default {
    components: {
        
        Login
    }

}
</script>
<style scoped>
    
</style>
=======
  <div>
    <Navbarr2 />
    <div class="">

      <Registro />
    </div>
    <footerpage />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import Registro from '@/components/Registro.vue'
import Navbarr from '@/components/Navbarr.vue'
import footerpage from '@/components/footer.vue'
import Navbarr2 from '@/components/Navbarr2.vue';

export default defineComponent({
  name: 'registro',
  components: {
    Registro,
    Navbarr,
    footerpage,
    Navbarr2
  }
})
</script>
<style scoped></style>
>>>>>>> bd5b11b0e6a9fc2722197d5688f79c329075c18c
