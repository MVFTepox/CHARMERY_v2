<template>
  <div>
    <nav>
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src="../assets/img/logo.png" alt="Logo" />
        </a>
        <div class="categorias">
          <p><b>Categorías</b></p>
          <a href="#" @click="toggleCategorias">
            <img src="../assets/img/down.png" alt="Cuenta">
          </a>
          <div :class="{'categorias-menu': true, 'show': isCategorias}" @click.stop>
            <a href="#">Anillos</a>
            <a href="#">Aretes</a>
            <a href="#">Collares</a>
            <a href="#">Pulseras</a>
            <a href="#">Phone Charms</a>
          </div>
        </div>
        <form class="search" role="search">
          <input type="search" placeholder="Buscar..." class="placeholder:text-[#662f25]" />
          <button type="submit">
            <img src="../assets/img/search.png" alt="Search">
          </button>
        </form>
        <div class="icons">
          <a href="#"><img src="../assets/img/fav.png" alt="Favorite"></a>
          <a href="#" @click="toggleAccountMenu">
            <img src="../assets/img/perf.png" alt="Cuenta">
          </a>
          <div :class="{'account-menu': true, 'show': isAccountMenuVisible}" @click.stop>
            <a href="#">Iniciar sesión</a>
            <a href="#">Regístrate</a>
          </div>
          <a href="#"><img src="../assets/img/bag.png" alt="Bolsa"></a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onBeforeUnmount, ref } from 'vue';

export default defineComponent({
  setup() {
    const isCategorias = ref(false);
    const isAccountMenuVisible = ref(false);

    const toggleCategorias = () => {
      isCategorias.value = !isCategorias.value;
    };

    const toggleAccountMenu = () => {
      isAccountMenuVisible.value = !isAccountMenuVisible.value;
    };

    const hideCategorias = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.categorias')) {
        isCategorias.value = false;
      }
    };

    const hideAccountMenu = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.icons')) {
        isAccountMenuVisible.value = false;
      }
    };

    onMounted(() => {
      window.addEventListener('click', hideCategorias);
      window.addEventListener('click', hideAccountMenu);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('click', hideCategorias);
      window.removeEventListener('click', hideAccountMenu);
    });

    return {
      isCategorias,
      isAccountMenuVisible,
      toggleCategorias,
      toggleAccountMenu,
    };
  }
});
</script>

<style scoped>
body {
  margin: 0;
  font-family: Arial, sans-serif;
}

nav {
  background-color: #fbf8ee;
  display: flex;
  padding: 16px;
  flex-wrap: wrap;
}

.container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.navbar-brand img {
  width: 60px;
  max-width: 100%;
  height: auto;
}

.categorias {
  display: flex;
  align-items: center;
  position: relative;
  margin-left: 150px;
}

.categorias p {
  margin: 0;
  font-size: 1.1rem;
  color: #b66141;
}

.search img, .icons img, .categorias img {
  width: 40px;
}

.account-menu,
.categorias-menu {
  display: none;
  position: absolute;
  top: 50px;
  left: 0;
  background-color: #fff;
  border: 1px solid #b66141;
  padding: 10px;
  z-index: 1000;
  width: 200px;
  border-radius: 15px;
}

.account-menu p {
  color: #662f25;
  margin: 0;
  padding-bottom: 5px;
}

.account-menu a,
.categorias-menu a {
  text-decoration: none;
  color: #662f25;
  display: block;
  padding: 5px 0;
  position: relative;
  overflow: hidden; 
  transition: color 0.3s ease; 
}

.account-menu a::after,
.categorias-menu a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0; 
  height: 5px; 
  border-radius: 5px;
  background-color: #b66141;
  transition: width 0.3s ease; 
}

.account-menu a:hover::after,
.categorias-menu a:hover::after {
  width: 100%;
}

.account-menu.show,
.categorias-menu.show {
  display: block;
}

.search {
  display: flex;
  align-items: center;
  margin: 8px 0;
  flex: 1;
  justify-content: center;
}

.search input {
  background: transparent;
  border-radius: 20px;
  border: 1px solid #b66141;
  padding: 8px 16px;
  outline: none;
  width: 100%;
  max-width: 300px;
}

.search button {
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
}

.icons {
  display: flex;
  align-items: center;
  gap: 20px;
  position: relative;
}

/* Media queries para pantallas pequeñas */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
    align-items: flex-start;
  }
  .search input {
    width: 100%;
  }
  .icons {
    gap: 10px;
  }
  .categorias {
    width: 100%;
    justify-content: space-between;
    margin-left: 0;
  }
}
</style>
