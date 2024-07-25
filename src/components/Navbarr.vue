<template>
  <nav class="bg-[#eddaab] flex">
    <div class="container mx-auto flex flex-wrap items-center justify-between p-4">
      <a class="navbar-brand" href="#">
        <img src="../assets/img/logo.png" alt="Logo" class="w-[80px]" />
      </a>
      <div class="categorias flex items-center relative">
        <p class="mb-0"><b>Categorías</b></p>
        <a href="#" id="dropdown-toggle" @click="toggleDropdown">
          <img src="../assets/img/down.png" alt="Dropdown Icon" class="w-[25px]" />
        </a>
        <div class="dropdown-menu" v-if="showDropdown">
          <a href="#">Anillos</a>
          <a href="#">Aretes</a>
          <a href="#">Collares</a>
          <a href="#">Pulseras</a>
          <a href="#">Phone Charms</a>
        </div>
      </div>
      <form class="search flex items-center my-2 sm:my-0" role="search">
        <input
          class="form-control border border-[#b66141] rounded-full px-4 py-2 w-full sm:w-[300px]"
          type="search"
          placeholder="Buscar..."
        />
        <button type="submit">
          <img src="../assets/img/search.png" alt="Buscar" class="w-[30px]" />
        </button>
      </form>
      <div class="icons flex items-center space-x-5 relative">
        <a href="#" id="account-toggle" @click="toggleAccountMenu">
          <img src="../assets/img/perf.png" alt="Cuenta" class="w-[30px]" />
        </a>
        <div class="account-menu" v-if="showAccountMenu">
          <p><b>¡Bienvenido usuario!</b></p>
          <a href="#">Mi perfil</a>
          <a href="#">Mis pedidos</a>
          <a href="#">Cerrar sesion</a>
        </div>
        <a href="#"><img src="../assets/img/fav.png" alt="Favoritos" class="w-[30px]" /></a>
        <a href="#"><img src="../assets/img/bag.png" alt="Carrito" class="w-[30px]" /></a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      showDropdown: false,
      showAccountMenu: false
    };
  },
  methods: {
    toggleDropdown(event) {
      event.preventDefault();
      this.showDropdown = !this.showDropdown;
    },
    toggleAccountMenu(event) {
      event.preventDefault();
      this.showAccountMenu = !this.showAccountMenu;
    },
    closeMenus(event) {
      if (!event.target.closest('#dropdown-toggle')) {
        this.showDropdown = false;
      }
      if (!event.target.closest('#account-toggle')) {
        this.showAccountMenu = false;
      }
    }
  },
  mounted() {
    window.addEventListener('click', this.closeMenus);
  },
  beforeDestroy() {
    window.removeEventListener('click', this.closeMenus);
  }
};
</script>

<style scoped>
.categorias p {
  font-size: 1.1rem;
  color: #b66141;
}
.search input {
  background: transparent;
  border-radius: 20px;
  border-color: #b66141;
}
.search button {
  background: transparent;
  border: none;
}
.dropdown-menu, .account-menu {
  display: none;
  position: absolute;
  top: 50px;
  left: 0;
  background-color: #fff;
  border: 1px solid #b66141;
  padding: 10px;
  z-index: 1000;
  width: 150px;
  border-radius: 15px;
}
.dropdown-menu a, .account-menu a {
  display: flex;
  flex-direction: column;
}
.account-menu p {
  color: #662f25;
}
.dropdown-menu.show, .account-menu.show {
  display: block;
}
.dropdown-menu a:hover, .account-menu a:hover {
  background-color: #b66141; 
  color: #fff; 
  padding: 5px; 
  border-radius: 15px;
}
.icons a img:hover, .search button img:hover, .categorias a img:hover {
  background-color: #662f25; 
  border-radius: 50%; 
  padding: 5px; 
  transition: background-color 0.7s; 
}
</style>
