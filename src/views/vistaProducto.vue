<template>
  <div>
    <Navbarr2 />
    <productoindividual :images="images" :nombreDelArticulo="nombreDelArticulo" :precioDelArticulo="precioDelArticulo"
      :description="description" :Categoría="Categoría" :Estilo="Estilo" class="my-5" />
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
import { fetchProduct, fetchImageById } from '@/Utils/api';
import { idText } from 'typescript';

export default defineComponent({
  name: 'pageVistaProducto',

  components: {
    Navbarr2,
    PageFooter,
    CommentSection,
    productoindividual,
    CarruselProductosdeArticulos
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

        // Fetch images associated with the product
        const imagesResponse = await fetchImageById(productId);
        images.value = imagesResponse.map((image: any) => image.image_url);

        console.log('Image data:', imagesResponse);

      } catch (error) {
        console.error('Error fetching product or image details:', error);
      }
    });


    return {
      images,
      nombreDelArticulo,
      precioDelArticulo,
      description,
      Categoría,
      Estilo
    };
  }
});
</script>
