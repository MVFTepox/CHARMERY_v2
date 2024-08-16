<template>
  <div>
    <Navbarr2 />
    <productoindividual :images="images" :nombreDelArticulo="nombreDelArticulo" :precioDelArticulo="precioDelArticulo"
      :description="description" :Categoría="Categoría.toUpperCase()" :Estilo="Estilo" class="my-5" />
    <div class="mx-10 my-10">
      <CommentSection />
    </div>
    <div class="mx-10">
      <hr style="border-color: #eddaab; border-width: 3px">
      <div>
        <p class="text-7xl font-elmessiri text-center my-10 text-[#CB8844]">Te Puede Gustar</p>
      </div>
      <hr style="border-color: #eddaab; border-width: 3px">
    </div>
    <div class="mx-10 my-10">
      <div>
        <div class="flex justify-between px-10">
          <p class="text-5xl font-elmessiri text-[#B66141]">Aretes</p>
          <input type="button" value="Ver más" class="btn bg-[#B66141] text-[#EDDAAB] rounded-2xl hover:text-black">
        </div>
        <div class="px-5">
          <CarruselProductosdeArticulos />
        </div>
      </div>
    </div>
    <PageFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import Navbarr2 from '@/components/Navbarr2.vue';
import PageFooter from '@/components/footer.vue';
import CommentSection from '@/components/CommentSection.vue';
import productoindividual from '@/components/productoindividual.vue';
import CarruselProductosdeArticulos from '@/components/CarruselProductosdeArticulos.vue';
import { fetchProduct, fetchImage } from '@/Utils/api';
import img1 from '@/assets/img/8d9a208672fc6c6c5565daff623b1ad9.jpg'
import img2 from '@/assets/img/dd26b835117abe2cbda20e2af9380cd1.jpg'

export default defineComponent({
  name: 'pageVistaProducto',

  components: {
    Navbarr2,
    PageFooter,
    CommentSection,
    productoindividual,
    CarruselProductosdeArticulos
  },

  data() {
    return {
      images: [
        img1, img2
      ],
      productQuantity: 1,
      currentFill: 1
    };
  },
  setup() {
    const route = useRoute();
    const productId = route.params.id as string;

    const images = ref<string[]>([]);
    const nombreDelArticulo = ref('');
    const precioDelArticulo = ref('');
    const description = ref('');
    const Categoría = ref('');
    const Estilo = ref('');
    const img1src = ref(img1)
    const img2src = ref(img2)

    onMounted(async () => {
      try {
        // Fetch product details
        const product = await fetchProduct(productId);
        console.log('Product data:', product);

        nombreDelArticulo.value = product.product_name;
        precioDelArticulo.value = `$${product.price}`;

        // Validar y asignar la descripción
        if (product.description) {
          description.value = product.description.substring(0, 200) + '...';
        } else {
          description.value = 'Descripción no disponible';
        }

        Categoría.value = product.category.category_name;
        Estilo.value = product.style.style_name;

      } catch (error) {
        console.error('Error fetching product:', error);
      }


    });



    return {
      img1src,
      img2src,
        nombreDelArticulo,
      precioDelArticulo,
      description,
      Categoría,
      Estilo

    };
  }
});
</script>
