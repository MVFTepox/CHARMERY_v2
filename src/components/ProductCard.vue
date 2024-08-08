<template>
  <div
    class="rounded-lg border-solid border-[3px] p-3 m-2 flex flex-col justify-between h-[250px] w-[200px] border-[#eddaab] font-['DM Sans']"
  >
    <div class="flex justify-between">
      <div class="flex flex-col">
        <p>productName</p>
        <p>$productPrice</p>
      </div>
      <span
        class="material-symbols-rounded filler text-[#b66141]"
        @click="wishClick"
        :style="{ fontVariationSettings: `'FILL' ${currentFill}` }"
      >
        favorite
      </span>
    </div>
    <button
      class="flex rounded-full justify-center h-[30px] bg-[#b66141] border-solid border-[3px] hover:border-[#eddaab] border-[#b66141] hover:bg-white text-[#eddaab] text-[#eddaab]"
    >
      <span class="material-symbols-rounded"> shopping_bag </span>
      Añadir a Bolsa
    </button>
  </div>
</template>
<script lang="ts">
export default {
  name: 'ProductCard',
  data() {
    return {
      currentFill: 0
    }
  },
  methods: {
    wishClick() {
      if (this.currentFill === 0) {
        this.currentFill++
      } else if (this.currentFill === 1) {
        this.currentFill--
      }
    }
  }
}
</script>
<style scoped>
p {
  color: #662f25;
}
.filler:hover {
  font-variation-settings: 'FILL' 1;
  cursor: pointer;
}
</style>
