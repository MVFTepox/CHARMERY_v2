<template>
  <div>
    <Navbarr2/>
    <Login />
    <footerPAge />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Login from '@/components/Login.vue'
import Navbarr from '@/components/Navbarr.vue'
import footerPAge from '@/components/footer.vue'
import Navbarr2 from '@/components/Navbarr2.vue';

export default defineComponent({
  name: 'pageLogin',
  components: {
    Login,
    Navbarr,
    footerPAge,
    Navbarr2
  },
  setup() {}
})
</script>
