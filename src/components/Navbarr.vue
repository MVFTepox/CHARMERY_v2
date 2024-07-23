<template>
    <nav class="bg-[#eddaab] flex">
      <div class="container mx-auto flex items-center justify-between">
        <a class="navbar-brand" href="#">
          <img src="./src/img/logo.png" alt="Logo" class="w-[80px]" />
        </a>
        <div class="categorias flex items-center relative">
          <p class="mb-0"><b>Categorías</b></p>
          <a href="#" @click.prevent="toggleDropdown">
            <img src="./src/img/down.png" alt="Dropdown Icon" class="w-[25px]" />
          </a>
          <div class="dropdown-menu" :class="{ show: dropdownVisible }">
            <a href="#">Anillos</a>
            <a href="#">Aretes</a>
            <a href="#">Collares</a>
            <a href="#">Pulseras</a>
            <a href="#">Phone Charms</a>
          </div>
        </div>
        <form class="search flex" role="search">
          <input
            class="form-control me-2 border border-[#b66141] rounded-full w-[300px]"
            type="search"
            placeholder="Buscar..."
          />
          <button type="submit">
            <img src="./src/img/search.png" alt="Buscar" class="w-[30px]" />
          </button>
        </form>
        <div class="icons flex items-center space-x-5 relative">
          <a href="#" @click.prevent="toggleAccount">
            <img src="./src/img/perf.png" alt="Cuenta" class="w-[30px]" />
          </a>
          <div class="account-menu" :class="{ show: accountVisible }">
            <p><b>¡Bienvenido usuario!</b></p>
            <a href="#">Mi perfil</a>
            <a href="#">Mis pedidos</a>
            <a href="#">Cerrar sesion</a>
          </div>
          <a href="#"><img src="./src/img/fav.png" alt="Favoritos" class="w-[30px]" /></a>
          <a href="#"><img src="./src/img/bag.png" alt="Carrito" class="w-[30px]" /></a>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    data() {
      return {
        dropdownVisible: false,
        accountVisible: false
      };
    },
    methods: {
      toggleDropdown() {
        this.dropdownVisible = !this.dropdownVisible;
      },
      toggleAccount() {
        this.accountVisible = !this.accountVisible;
      },
      closeMenus(event) {
        if (!event.target.closest('.categorias')) {
          this.dropdownVisible = false;
        }
        if (!event.target.closest('.icons')) {
          this.accountVisible = false;
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
    width: 300px;
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
  