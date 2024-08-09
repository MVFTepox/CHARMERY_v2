<template>
  <div>
    <p class="titulo"><b>Mi Cuenta</b></p>

    <div class="container">
      <div class="buttons-container">
        <div class="flex flex-col gap-3">
          <button type="button" class="btn1 rounded-r-none" @click="showContent('info')">Información de mi cuenta</button>
          <button type="button" class="btn2 rounded-r-none" @click="showContent('orders')">Mis pedidos</button>
        </div>
        <button type="button" class="btn3" id="logout-button" @click="logout">Cerrar Sesión</button>
      </div>

      <div class="content-panels">
        <div id="info" class="content-panel" :class="{ active: activePanel === 'info' }">
          <div class="header-with-button">
            <p class="titulos2"><b>Datos Generales</b></p>
            <button class="header-button" v-if="!isEditing" @click="editInfo">Editar Datos</button>
            <button class="header-button" v-if="isEditing" @click="saveInfo">Guardar</button>
          </div>
          <div class="form">
            <div class="form-group">
              <label for="nombre" class="form-label">Nombre</label>
              <input type="text" class="form-control" id="nombre" v-model="form.nombre" required :disabled="!isEditing">
            </div>
            <div class="form-group">
              <label for="apellido" class="form-label">Apellido</label>
              <input type="text" class="form-control" id="apellido" v-model="form.apellido" required :disabled="!isEditing">
            </div>
          </div>
          <div class="form2">
            <div class="form-group2">
              <label for="correo" class="form-label">Correo electrónico</label>
              <input type="email" class="form-control" id="correo" v-model="form.correo" required :disabled="!isEditing">
            </div>
            <div class="form-group2">
              <label for="telefono" class="form-label">Número de teléfono</label>
              <input type="tel" class="form-control" id="telefono" v-model="form.telefono" pattern="[0-9]{10}" maxlength="10" required :disabled="!isEditing">
            </div>
            <div class="form-group2 password-container">
              <label for="contraseña" class="form-label">Contraseña</label>
              <input type="password" class="form-control" id="contraseña" v-model="form.contraseña" required :disabled="!isEditing">
              <button type="button" class="password-toggle" @click="togglePassword">&#128065;</button>
            </div>
            <div class="header-with-button">
              <p class="titulos2"><b>Dirección de envío</b></p>
              <button type="button" class="header-button" @click="addAddress">Añadir otra dirección</button>
            </div>
            <div class="address-container" id="address-container">
              <div v-for="(address, index) in addresses" :key="index" class="info" :class="{ selected: selectedAddress === index }" @click="selectAddress(index)">
                <div v-if="isEditingAddress !== index">
                  <p v-if="!isEditingAddress">{{ address.nombre }}</p>
                  <p v-if="!isEditingAddress">{{ address.telefono }}</p>
                  <p v-if="!isEditingAddress">{{ address.direccion }}</p>
                </div>
                <div v-if="isEditingAddress === index">
                  <input type="text" v-model="address.nombre" />
                  <input type="text" v-model="address.telefono" />
                  <input type="text" v-model="address.direccion" />
                </div>
                <div class="edit-info" v-if="isEditingAddress !== index">
                  <button class="editar" @click="editAddress(index)"><b>Editar</b></button>
                  <button class="eliminar" @click="removeAddress(index)"><b>Eliminar</b></button>
                </div>
                <div class="save-info" v-if="isEditingAddress === index">
                  <button class="guardar" @click="saveAddress(index)"><b>Guardar</b></button>
                </div>
              </div>
            </div>
            <div class="pred">
              <button class="direccion" @click="setDefaultAddress">Dirección predeterminada</button>
            </div>
          </div>
        </div>

        <div id="orders" class="content-panel" :class="{ active: activePanel === 'orders' }">
          <p class="titulos2"><b>Mis pedidos</b></p>
          <div class="products-list">
            <div v-for="(product, index) in products" :key="index" class="product-item">
              <img :src="product.image" alt="Product Image" class="product-image" />
              <p class="product-name">{{ product.name }}</p>
              <button class="remove-button" @click="removeProduct(index)">Eliminar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface Form {
  nombre: string;
  apellido: string;
  correo: string;
  telefono: string;
  contraseña: string;
}

interface Address {
  nombre: string;
  telefono: string;
  direccion: string;
}

interface Product {
  image: string;
  name: string;
}

export default defineComponent({
  name: 'PageAccount',

  data() {
    return {
      activePanel: 'info',
      isEditing: false,
      form: {
        nombre: '',
        apellido: '',
        correo: '',
        telefono: '',
        contraseña: ''
      } as Form,
      addresses: [
        {
          nombre: 'Nombre',
          telefono: '000-000-0000',
          direccion: 'Calle #0, Colonia, 00000, Ciudad, Estado, Pais'
        }
      ] as Address[],
      selectedAddress: 0 as number | null,
      isEditingAddress: null as number | null,
      products: [
        { image: 'https://via.placeholder.com/100', name: 'Collar de corazón' },
        { image: 'https://via.placeholder.com/100', name: 'Aretes de piedra brillates' },
        { image: 'https://via.placeholder.com/100', name: 'Aretes de estrella' },
        { image: 'https://via.placeholder.com/100', name: 'Collar de corazón plateado' },
        { image: 'https://via.placeholder.com/100', name: 'Aretes dorados' },
      ] as Product[]
    };
  },
  methods: {
    showContent(panelId: string) {
      this.activePanel = panelId;
    },
    editInfo() {
      this.isEditing = true;
    },
    saveInfo() {
      this.isEditing = false;
    },
    addAddress() {
      this.addresses.push({
        nombre: 'Nombre',
        telefono: '000-000-0000',
        direccion: 'Calle #0, Colonia, 00000, Ciudad, Estado, Pais'
      });
    },
    selectAddress(index: number) {
      this.selectedAddress = index;
    },
    setDefaultAddress() {
      this.selectedAddress = 0;
    },
    editAddress(index: number) {
      this.isEditingAddress = index;
    },
    saveAddress(index: number) {
      this.isEditingAddress = null;
    },
    removeAddress(index: number) {
      this.addresses.splice(index, 1);
      if (this.selectedAddress === index) {
        this.selectedAddress = null;
      }
    },
    togglePassword() {
      const passwordInput = document.getElementById('contraseña') as HTMLInputElement;
      passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
    },
    logout() {
      this.form = {
        nombre: '',
        apellido: '',
        correo: '',
        telefono: '',
        contraseña: ''
      };
      this.addresses = [
        {
          nombre: 'Nombre',
          telefono: '000-000-0000',
          direccion: 'Calle #0, Colonia, 00000, Ciudad, Estado, Pais'
        }
      ];
      this.products = [
        { image: 'https://via.placeholder.com/100', name: 'Producto 1' },
        { image: 'https://via.placeholder.com/100', name: 'Producto 2' },
        { image: 'https://via.placeholder.com/100', name: 'Producto 3' },
        { image: 'https://via.placeholder.com/100', name: 'Producto 4' },
        { image: 'https://via.placeholder.com/100', name: 'Producto 5' },
      ];
      this.selectedAddress = 0;
      this.showContent('info');
    },
    removeProduct(index: number) {
      this.products.splice(index, 1);
    }
  },
  mounted() {
    this.selectedAddress = 0;
  }
});
</script>

<style scoped>
body {
  font-family: 'DM Sans', sans-serif;
}

.titulo {
  color: #cb8844;
  font-size: 200%;
  margin: 10px;
}

.titulos2 {
  color: #cb8844;
  margin: 5px;
  font-size: 150%;
}

.container {
  display: flex;
}

.buttons-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
}

.btn1,
.btn2 {
  padding: 15px;
  border-radius: 20px 0 0 20px;
  border: 2px solid #eddaab;
  background-color: white;
  color: #662f25;
  cursor: pointer;
  text-align: center;
  margin-bottom: 0;
}

.btn3 {
  background-color: #a8350a;
  color: white;
  margin-top: auto;
  width: 200px;
  border-radius: 40px;
  padding: 15px;
}

.content-panels {
  flex: 1;
}

.content-panel {
  display: none;
  padding: 20px;
  border: 2px solid #eddaab;
  background-color: white;
  border-radius: 5px;
  width: 100%;
  max-width: 600px;
  position: relative;
  margin: 0;
}

.active {
  display: block;
}

.header-with-button {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-button {
  padding: 10px;
  border-radius: 40px;
  border: none;
  background-color: #b66141;
  color: white;
  cursor: pointer;
}

.form {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.form-group,
.form-group2 {
  display: flex;
  flex-direction: column;
  flex: 1 1 45%;
  margin-bottom: 20px;
  color: #c27a60;
}

.form-group input,
.form-group2 input {
  padding: 5px;
  border-radius: 40px;
  border: 2px solid #c27a60;
  outline: none;
}

.info {
  background-color: #eddaab;
  padding: 20px;
  border-radius: 10px;
  border: 2px solid #b66141;
  color: #662f25;
  width: 200px;
  margin-right: 20px;
  margin-top: 10px;
  display: inline-block;
  position: relative;
  cursor: pointer;
}

.info.selected {
  border: 3px solid #662f25;
}

.edit-info,
.save-info {
  display: flex;
  gap: 10px;
}

.editar,
.guardar,
.eliminar {
  background-color: #cb8844;
  border: none;
  padding: 5px;
  border-radius: 5px;
  color: white;
  cursor: pointer;
}

.password-container {
  position: relative;
}

.password-toggle {
  position: absolute;
  right: 10px;
  top: 70%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
}

.direccion {
  background-color: #cb8844;
  border: none;
  padding: 5px;
  border-radius: 5px;
  color: white;
  cursor: pointer;
}


.info input {
  border-radius: 5px;
  border: 2px solid #b66141;
  background-color: transparent;
  color: #662f25;
  font-size: 14px;
  margin-bottom: 10px;
  width: 100%;
  box-sizing: border-box;
}


.info input:focus {
  border-color: #cb8844;
  outline: none;
}

.editar,
.guardar,
.eliminar {
  background-color: transparent;
  border: none;
  color: #662f25;
  cursor: pointer;
}

.direccion {
  background-color: transparent;
  border: none;
  color: #b66141;
}

.products-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.product-item {
  display: flex;
  align-items: center;
  border: 1px solid #eddaab;
  padding: 10px;
  border-radius: 5px;
}

.product-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-right: 10px;
}

.product-name {
  flex: 1;
  margin: 0;
}

.remove-button {
  background-color: #b66141;
  border: none;
  padding: 5px 10px;
  border-radius: 20px;
  color: white;
  cursor: pointer;
}


@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }

  .buttons-container {
    align-items: center;
  }

  .btn3 {
    width: 100%;
  }

  .form-group,
  .form-group2 {
    flex: 1 1 100%;
  }

  .info {
    flex: 1 1 100%;
    margin-right: 0;
  }

  .password-toggle {
    right: 5px;
  }
}
</style>
