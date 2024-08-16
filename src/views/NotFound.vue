<template>
  <div>
    <Navbarr2 />
  </div>
  <div>
    <div class="confirmation-page">
      <h1 class="font-elmessiri">Página no encontrada</h1>
      <div class="error-code">
        <span class="number">4</span>
        <img src="@/assets/img/logo.png" alt="0" class="number-img">
        <span class="number">4</span>
      </div>
      <a href="/">
      <input type="button" class="font-DMsans" value="Volver" />
      </a>
    </div>
  </div>
  <div>
    <footerPAge />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navbarr from '@/components/Navbarr.vue';
import footerPAge from '@/components/footer.vue';
import Navbarr2 from '@/components/Navbarr2.vue';

export default defineComponent({
  name: 'ConfirmationPage',
  components: {
    Navbarr,
    footerPAge,
    Navbarr2
  }
});
</script>

<style scoped>
.confirmation-page {
  font-family: 'El Messiri', sans-serif;
  background-color: #F5F5F5;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
  color: #cb8844;
}

h1 {
  font-size: 4em;
  margin: 20px;
}

.error-code {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10rem; /* Ajusta el tamaño de la letra según sea necesario */
}

.number {
  font-size: inherit;
  margin: 0 1rem; /* Espacio entre el número y la imagen */
}

.number-img {
  width: 150px; /* Ajusta el tamaño del logo según sea necesario */
  height: 150px;
  object-fit: contain; /* Asegura que la imagen mantenga sus proporciones */
}

input[type="button"] {
  background-color: #cb8844;
  color: #FFFFFF;
  border: none;
  padding: 10px 30px;
  font-size: 1.2em;
  cursor: pointer;
  border-radius: 15px;
  margin-top: 20px;
  width: 200px;
  text-align: center;
}

/* Responsivo para dispositivos móviles */
@media (max-width: 600px) {
  h1 {
    font-size: 1.5em;
  }

  .error-code {
    font-size: 5rem;
  }

  .number-img {
    width: 80px;
    height: 80px;
  }
}

/* Responsivo para tabletas */
@media (min-width: 601px) and (max-width: 1024px) {
  h1 {
    font-size: 1.75em;
  }

  .error-code {
    font-size: 7rem;
  }

  .number-img {
    width: 100px;
    height: 100px;
  }
}
</style>
