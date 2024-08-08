<template>
<div class="body">
  <div class="container">
    <div class="text-section">
      <h1>Charmery</h1>
      <p>
        El encanto<br>
        de la joyería<br>
      </p>
    </div>
    <div class="carousel">
      <div class="card">
        <img src="@/assets/img/corazones estilo bridgerton.jpg" alt="Bracelet">
      </div>
      <div class="card">
        <img src="@/assets/img/colguijo AJAJAJA.jpg" alt="Rings">
      </div>
      <div class="card">
        <img src="@/assets/img/estrellas.jpg" alt="Necklaces">
      </div>
      <div class="card">
        <img src="@/assets/img/corazones pendientes.jpg" alt="Item 4">
      </div>
      <div class="card">
        <img src="@/assets/img/PERLAS Y CORAZONN.jpg" alt="Item 5">
      </div>
    </div>
  </div>
</div>
</template>

<script lang='ts'>
export default {
  name: 'CharmeryPage'
}
</script>

<style scoped>
.body {
  margin: 0;
  padding: 0;
  font-family: 'El Messiri', sans-serif;
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
  overflow: hidden;
}

.container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: stretch;
  justify-content: center;
  position: relative;
}

.text-section h1, .text-section p {
  position: absolute;
  z-index: 2;
  pointer-events: none;
  text-align: center;
  color: #662F25;
}

.text-section h1 {
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 7rem;
  text-shadow: 
    2px 2px 10px rgba(255, 255, 255, 0.8), 
    -2px -2px 10px rgba(255, 255, 255, 0.8),
    2px -2px 10px rgba(255, 255, 255, 0.8),
    -2px 2px 10px rgba(255, 255, 255, 0.8),
    0px 0px 10px rgba(255, 255, 255, 0.8);
}

.text-section p {
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2rem;
  line-height: 1.2;
  color: #000000;
}

.carousel {
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
}

.card {
  flex: 1;
  height: 100%;
  transition: all 1s ease;
  cursor: pointer;
  position: relative;
}

.card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-right: 0px solid #f9f9f9;
  transition: transform 0.5s ease;
}

.card:last-child img {
  border-right: none;
}

.card:hover {
  flex: 3;
}

.carousel:hover .card:not(:hover) img {
  filter: grayscale(100%) opacity(0.5);
}

.carousel:hover .card:not(:hover)::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #f8f2dc 0%, #f7ecc9 100%);
  mix-blend-mode: multiply;
}

@media (max-width: 300px) {
  .carousel {
    flex-direction: column;
  }

  .card {
    flex: 1;
    height: auto;
    margin: 5px;
  }

  .card img {
    width: 100%;
    height: auto;
  }
}
</style>
