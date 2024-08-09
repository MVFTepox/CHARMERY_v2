<template>
  <div>
    <navbarr />
    <Login />
    <footerPAge />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Login from '@/components/Login.vue'
import Navbarr from '@/components/Navbarr.vue'
import footerPAge from '@/components/footer.vue'

export default defineComponent({
  name: 'pageLogin',
  components: {
    Login,
    Navbarr,
    footerPAge
  },
  setup() {}
})
</script>
