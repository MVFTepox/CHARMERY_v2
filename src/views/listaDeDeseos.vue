<template>
  <div>
    <Navbarr2 />
  </div>
  <div class="">
    <div class="container mx-auto p-4">
      <div class="flex justify-between">
        <h1 class="text-[#cb8844] text-4xl">Lista de Deseos</h1>
        <div class="wishlistButtons">
          <button
            class="btn bg-[#cb8844] w-[180px] text-white hover:bg-white hover:border-[#cb8844] hover:border-[2px] hover:text-[#cb8844]">
            Añadir Todo a Bolsa
          </button>
          <button
            class="btn bg-[#cb8844] w-[180px] text-white hover:bg-white hover:border-[#cb8844] hover:border-[2px] hover:text-[#cb8844]">
            Eliminar Todo
          </button>
        </div>
      </div>
      <hr style="border-color: #eddaab" class="m-4" />
      <div class="flex flex-wrap">
        <div v-for""></div>
        <h3>{{ blocked }}</h3>
      </div>
    </div>
  </div>
  <div>
    <footerPage class=""/>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Navbarr from '@/components/Navbarr.vue'
import footerPage from '@/components/footer.vue'
import Navbarr2 from '@/components/Navbarr2.vue';
import { fetchWishlist } from '@/Utils/api';
import { useUserStore } from '@/stores/authStore';
import { mapState } from 'pinia';

export default defineComponent({
  name: 'listasDeseos',
  components: {
    Navbarr,
    footerPage,
    Navbarr2
  },
  data() {
    return {
      wishlist: [],
      loading: false,
      blocked : ''
    }
  },
  computed:{
    ...mapState(useUserStore, ['userId'])
  },
  methods: {
    async loadWishlist() {
      if (this.userId !== null) {
        this.loading = true;
        try {
          this.wishlist = await fetchWishlist(this.userId); // Fetch wishlist using userId
        } catch (err) {
          console.error('Failed to load Wishlist');
        } finally {
          this.loading = false;
        }
      } else {
        this.blocked = 'Inicie sesión en el ícono de perfil'
      }
    },
  },
})
</script>
<style scoped>
h1 {
  font-family: El Messiri;
}

.wishlistButtons {
  font-family: 'DM Sans', sans-serif;
}
</style>
