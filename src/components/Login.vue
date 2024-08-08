<template>
  <div>
    <div class="container">
      <h2 class="title">Bienvenido</h2>
      <form @submit="login">
        <div class="form-group">
          <label for="email">Correo electrónico</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <div class="form-group">
          <label for="password">Contraseña</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <div class="linea"></div>
        <a href="../views/registro.vue" class="register-link"
          >¿Aún no tienes cuenta? Regístrate <span>aquí</span></a
        >
        <button type="submit" class="submit-button">Iniciar sesión</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
/* Tus estilos aquí */
body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #fdfaf4;
  margin: 0;
  font-family: Arial, sans-serif;
  padding: 16px;
}

.container {
  background-color: #fff8ec;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;
}

.title {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 16px;
  color: #c1785c;
}

.form-group {
  margin-bottom: 16px;
  text-align: left;
}

.form-group label {
  display: block;
  color: #c1785c;
  margin-bottom: 8px;
}

.form-group input {
  width: 93%;
  padding: 8px 12px;
  border: 1px solid #c1785c;
  border-radius: 20px;
  outline: none;
  transition: border-color 0.2s;
  background-color: #fff8ec;
}

.form-group input:focus {
  border-color: #c1785c;
}

.linea {
  margin: 10px 13px;
  width: calc(100% - 20px);
  border-top: 1px solid #999;
  float: left;
  padding: 0.5px;
  background-color: rgb(182, 97, 65);
}

.register-link {
  display: block;
  margin-bottom: 16px;
  font-size: 14px;
  color: #c1785c;
  text-decoration: none;
}

.register-link span {
  text-decoration: underline;
}

.register-link:hover span {
  color: #a65c46;
}

.submit-button {
  width: 50%;
  background-color: #a65c46;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.submit-button:hover {
  background-color: #8b4a39;
}

@media (max-width: 600px) {
  .container {
    padding: 16px;
  }

  .title {
    font-size: 20px;
  }

  .form-group label {
    font-size: 14px;
  }

  .form-group input {
    padding: 6px 10px;
  }

  .register-link {
    font-size: 12px;
  }

  .submit-button {
    font-size: 14px;
    padding: 10px;
  }
}
</style>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Login',
  setup() {
    const email = ref<string>('')
    const password = ref<string>('')

    const login = (event: Event) => {
      event.preventDefault()
      console.log(email.value, password.value)
    }
    return { email, password, login }
  }
})
</script>
