<template>
    <div class="bg-[#fbf8ee] gap-0 rounded-t-3xl rounded-b-3xl">
      <div class="collapse collapse-arrow rounded-none rounded-t-3xl border-0 bg-[#662F25]">
        <input type="radio" name="my-accordion-2" />
        <div class="collapse-title text-xl font-medium border-0 text-[#EDDAAB]">
          Color del metal
        </div>
        <div class="collapse-content text-black bg-white">
          <div class="p-4">
            <div class="form-control font-DMsans">
              <label class="label cursor-pointer">
                <span class="label-text text-base ">Negro</span>
                <input type="checkbox" class="checkbox border-4 border-[#EDDAAB] bg-[#ffff]" />
              </label>
              <label class="label cursor-pointer">
                <span class="label-text text-base">Rojo</span>
                <input type="checkbox" class="checkbox border-4 border-[#EDDAAB] bg-[#ffff]" />
              </label>
              <label class="label cursor-pointer">
                <span class="label-text text-base">Azul</span>
                <input type="checkbox" class="checkbox border-4 border-[#EDDAAB] bg-[#ffff]" />
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="collapse collapse-arrow my-0 rounded-none bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div class="collapse-title text-xl font-medium border-0 bg-[#662F25] text-[#EDDAAB]">
          Estilo
        </div>
        <div class="collapse-content text-black bg-white">
          <div class="p-4">
            <div class="form-control text-6xl">
              <label class="label cursor-pointer">
                <span class="label-text text-base text-[#662F25]">Coquette</span>
                <input type="checkbox" class="checkbox border-4 border-[#EDDAAB] bg-[#ffff]" />
              </label>
              <label class="label cursor-pointer">
                <span class="label-text text-base text-[#662F25]">Grunge</span>
                <input type="checkbox" class="checkbox border-4 border-[#EDDAAB] bg-[#ffff]" />
              </label>
              <label class="label cursor-pointer">
                <span class="label-text text-base text-[#662F25]">Y2K</span>
                <input type="checkbox" class="checkbox border-4 border-[#EDDAAB] bg-[#ffff]" />
              </label>
              <label class="label cursor-pointer">
                <span class="label-text text-base text-[#662F25]">Minimalista</span>
                <input type="checkbox" class="checkbox border-4 border-[#EDDAAB] bg-[#ffff]" />
              </label>
              <label class="label cursor-pointer">
                <span class="label-text text-base text-[#662F25]">Inspirado en películas</span>
                <input type="checkbox" class="checkbox border-4 border-[#EDDAAB] bg-[#ffff]" />
              </label>
              <label class="label cursor-pointer">
                <span class="label-text text-base text-[#662F25]">Acubi</span>
                <input type="checkbox" class="checkbox border-4 border-[#EDDAAB] bg-[#ffff]" />
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="collapse rounded-none rounded-b-3xl mt-0 collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div class="collapse-title bg-[#662F25] text-xl font-medium text-[#EDDAAB]">Precio</div>
        <div class="collapse-content text-black bg-white">
          <div class="p-4">
            <div class="flex items-center justify-between w-64 mx-auto">
              <span>$0</span>
              <input
                type="range"
                min="0"
                max="65"
                value="0"
                step="5"
                class="w-full mx-4 appearance-none h-3 rounded-full bg-[#5c5031]"
              />
              <span>$65</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-[#fbf8ee] pt-3 rounded-b-3xl card-actions justify-center">
      <button
        class="btn w-auto mb-4 font-DMsans mr-4 border-0 text-[#EDDAAB] bg-[#662F25] border-[#662F25] hover:text-[#662F25] hover:bg-[#EDDAAB] hover:border-2 hover:border-[#662F25]">
        Aplicar
      </button>
    </div>
</template>

<script>
export default {
  name: 'filtro',
};
</script>

<style scoped>
input[type='range']::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 5px;
  height: 35px;
  border-radius: 10%;
  background: #eddaab;
  cursor: pointer;
}
</style>
