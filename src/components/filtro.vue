<template>
  <div class="card w-96 bg-[#FBF8EE] rounded-md font-sans shadow m-auto">
    <div class="card-title text-4xl pl-8 pt-3">Filtro</div>
    <div class="card-body gap-0">
      <div class="collapse collapse-arrow rounded-none rounded-t-3xl border-0 bg-[#662F25]">
        <input type="radio" name="my-accordion-2" />
        <div class="collapse-title text-xl font-medium border-0  text-[#EDDAAB]">Color del Metal</div>
        <div class="collapse-content  text-black bg-white">
          <div class="p-4 ">

            <div class="form-control text-6xl">
              <label class="label cursor-pointer">
                <span class="label-text">Negro</span>
                <input type="checkbox" class="checkbox border-4  border-[#EDDAAB] bg-[#ffff]" />
              </label>
              <label class="label cursor-pointer">
                <span class="label-text">rojo</span>
                <input type="checkbox" class="checkbox border-4 border-[#EDDAAB] bg-[#ffff]" />
              </label>
              <label class="label cursor-pointer">
                <span class="label-text">azul</span>
                <input type="checkbox" class="checkbox border-4 border-[#EDDAAB] bg-[#ffff]" />
              </label>
            </div>


          </div>
        </div>
      </div>
      <div class="collapse collapse-arrow my-0 rounded-none  bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div class="collapse-title text-xl font-medium border-0 bg-[#662F25]   text-[#EDDAAB]">Estilo</div>
        <div class="collapse-content text-black bg-white">
          <div class="p-4 ">

            <div class="form-control text-6xl">
              <label class="label cursor-pointer">
                <span class="label-text">Negro</span>
                <input type="checkbox" class="checkbox border-4  border-[#EDDAAB] bg-[#ffff]" />
              </label>
              <label class="label cursor-pointer">
                <span class="label-text">rojo</span>
                <input type="checkbox" class="checkbox border-4 border-[#EDDAAB] bg-[#ffff]" />
              </label>
              <label class="label cursor-pointer">
                <span class="label-text">azul</span>
                <input type="checkbox" class="checkbox border-4 border-[#EDDAAB] bg-[#ffff]" />
              </label>
            </div>


          </div>
        </div>
      </div>
      <div class="collapse rounded-none rounded-b-3xl mt-0 collapse-arrow  bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div class="collapse-title  bg-[#662F25]  text-xl font-medium text-[#EDDAAB]">Precio</div>
        <div class="collapse-content text-black bg-white">
          <div class="p-4 ">
            <div class="flex items-center justify-between w-64 mx-auto">
              <span>$0</span>
              <input type="range" min="0" max="65" value="0" step="5"
              class="  w-full mx-4 appearance-none h-3 rounded-full  bg-[#5c5031] ">
              <span>$65</span>
            </div>

          </div>
        </div>
      </div>
    </div>

 
    <div class="card-actions justify-end">
      <button
        class="btn  mb-4 mr-4 bg-[#EDDAAB] border-[#662F25] hover:text-[662F25] hover:bg-transparent hover:border-[#662F25]">Aplicar</button>
    </div>
  </div>

  <div>

  </div>


</template>

<style scoped>
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 5px;
  height: 35px;
  border-radius: 10%;
  background: #EDDAAB;
  cursor: pointer;
}
</style>