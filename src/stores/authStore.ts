import { defineStore } from 'pinia'

// Define la tienda de autenticación
export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false
  }),
  actions: {
    setAuthenticated(status: boolean) {
      this.isAuthenticated = status
    }
    // Puedes añadir más acciones aquí si necesitas
  }
})
