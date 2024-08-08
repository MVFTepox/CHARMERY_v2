<template>
    <div>
      <nav>
        <div class="container">
          <a class="navbar-brand" href="#">
            <img src="../assets/img/logo.png" alt="Logo" />
          </a>
          <div class="p-0">
            <label for="toggle" class="categorias cursor-pointer text-xl font-medium" @click="toggleCollapse">
              <p>Categorías</p>
              <img src="../assets/img/down.png" alt="Down">
            </label>
            <div :class="{'collapse-content mt-2': true, 'collapsed': !isCollapsed}">
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
  
  <script>
  export default {
    data() {
      return {
        isCollapsed: false,
        isAccountMenuVisible: false,
      };
    },
    methods: {
      toggleCollapse() {
        this.isCollapsed = !this.isCollapsed;
      },
      toggleAccountMenu() {
        this.isAccountMenuVisible = !this.isAccountMenuVisible;
      },
    },
    mounted() {
      window.addEventListener('click', this.hideAccountMenu);
    },
    beforeUnmount() {
      window.removeEventListener('click', this.hideAccountMenu);
    },
    methods: {
      toggleCollapse() {
        this.isCollapsed = !this.isCollapsed;
      },
      toggleAccountMenu() {
        this.isAccountMenuVisible = !this.isAccountMenuVisible;
      },
      hideAccountMenu(event) {
        if (!event.target.closest('.icons')) {
          this.isAccountMenuVisible = false;
        }
      },
    },
  };
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
  
  .collapse-content {
    display: flex;
    flex-direction: column;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-out;
    margin-left: 150px;
  }
  
  .collapsed {
    max-height: 500px;
  }
  
  .collapse-content a {
    text-decoration: none;
    color: #662f25;
    display: block;
    padding: 5px 0;
    position: relative;
  }
  
  .collapse-content a::after {
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
  
  .collapse-content a:hover::after {
    width: 100%;
  }
  
  .dropdown-menu,
  .account-menu {
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
  
  .account-menu p {
    color: #662f25;
    margin: 0;
    padding-bottom: 5px;
  }
  
  .account-menu a {
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: #662f25;
  }
  
  .dropdown-menu.show,
  .account-menu.show {
    display: block;
  }
  
  .dropdown-menu a:hover,
  .account-menu a:hover {
    background-color: #b66141;
    color: #fff;
    border-radius: 15px;
    padding: 5px;
  }
  
  .search {
    display: flex;
    align-items: center;
    margin: 8px 0;
    flex: 1;
    justify-content: center; /* Centra el contenido en pantallas pequeñas */
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
  