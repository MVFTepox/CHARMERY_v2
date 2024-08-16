<template>
    <div class="rounded-lg border-solid border-[3px] p-3 m-2 flex flex-col justify-between h-[350px] w-[250px] border-[#eddaab] font-DMsans"
        @click="handleClick">
        <div class="flex justify-between">
            <div class="flex flex-col">
                <p>{{ productName }}</p>
                <p>${{ productPrice }}</p>
            </div>
            <span class="material-symbols-rounded filler text-[#b66141]" @click.stop="wishClick"
                :style="{ fontVariationSettings: `'FILL' ${currentFill}` }">
                favorite
            </span>
        </div>
        <div class="flex justify-center">
            <img :src="productImage" class="w-[200px] h-[200px] rounded-lg">
        </div>
        <button
            class="flex rounded-full justify-center h-[30px] bg-[#b66141] border-solid border-[3px] hover:border-[#eddaab] border-[#b66141] hover:bg-white text-[#eddaab]">
            <span class="material-symbols-rounded"> shopping_bag </span>
            Añadir a Bolsa
        </button>
    </div>
</template>

<script lang="ts">
export default {
    name: 'ProductCard',
    props: {
        productName: String,
        productPrice: Number,
        productImage: String,
        productId: String
    },
    data() {
        return {
            currentFill: 0
        }
    },
    methods: {
        wishClick() {
            this.currentFill = this.currentFill === 0 ? 1 : 0;
        },
        handleClick() {
            this.$emit('click', this.productId);
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
