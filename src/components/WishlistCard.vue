<template lang="ts">
    <div class="flex justify-between" style="width: 500px; height: 280px;">
        <div class="rounded-lg border-solid  border-[#eddaab] m-3" id="wishlistImage" style="border-width: 3px;width: 200px;height: 250px;"></div>
        <div class="flex flex-col justify-between h-full w-1/2 p-3">
            <div class="flex justify-between">
                <div>
                    <p>{{productName}}</p>
                    <p>${{productPrice}}</p>
                </div>
                <span class="material-symbols-rounded" style="color: #b66141;">
                    favorite
                </span>
            </div>
            <div>
                <div class="rounded-full bg-[#eddaab]  m-1 flex  justify-between w-24" style="height:30px ;">
                    <button type="button" id="decrement-button" class="hover:bg-[#cb8844] rounded-s-full flex items-center px-1" data-input-counter-decrement="quantity-input">
                        <span class="material-symbols-rounded" style="color: #b66141;">
                            remove
                        </span>
                    </button>
                    <input type="text" id="quantity-input" data-input-counter  class="caret-[#662f25] bg-[#eddaab] placeholder:text-[#662f25] text-center" placeholder="1" />
                    <button type="button" id="increment-button" class="hover:bg-[#cb8844] rounded-e-full flex items-center px-1" data-input-counter-increment="quantity-input" class="">
                        <span class="material-symbols-rounded" style="color: #b66141;">
                            add
                        </span>
                    </button>
                </div>
                <div class="flex justify-between">
                    <button class="flex rounded-full justify-center  bg-[#b66141] m-1 border-2 border-[#b66141] text-[#eddaab] h-[30px] w-[170px] hover:border-[#eddaab] hover:bg-white" id="">
                        <span class="material-symbols-rounded" >
                            shopping_bag
                        </span>
                        Añadir a Bolsa
                    </button>
                    <button>
                        <span class="material-symbols-rounded align-middle" style="color: #b66141; ">
                        delete
                        </span>
                    </button>

                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
export default {
    name: 'WishlistCard'
}
</script>
<style scoped lang="">
    p{
        color: #662f25;
    }
    #quantity-input{
            outline: none;
            width: 30px;
    }
</style>