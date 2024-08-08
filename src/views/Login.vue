<template>
  <div>
    <navbarr />
    <Login />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Login from '@/components/Login.vue'
import Navbarr from '@/components/Navbarr.vue'
import footer from '@/components/footer.vue'

export default defineComponent({
  name: 'pageLogin',
  components: {
    Login,
    Navbarr,
    footer
  },
  setup() {}
})
</script>
