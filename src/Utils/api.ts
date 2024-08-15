// src/utils/api.ts

const BaseUrl = 'http://18.191.246.79:3333/api'

// Función auxiliar para realizar solicitudes GET
async function fetchFromApi(endpoint: string) {
  try {
    const response = await fetch(`${BaseUrl}${endpoint}`)
    if (!response.ok) {
      const errorText = await response.text()
      throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorText}`)
    }
    return await response.json()
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

// Función auxiliar para realizar solicitudes POST
async function postToApi(endpoint: string, data: object) {
  try {
    const response = await fetch(`${BaseUrl}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    if (!response.ok) {
      const errorText = await response.text()
      throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorText}`)
    }
    return await response.json()
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

// Funciones para obtener datos
export function fetchProducts() {
  return fetchFromApi('/products')
}

export function fetchCategories() {
  return fetchFromApi('/categories')
}

export function fetchFavorites() {
  return fetchFromApi('/favorites')
}

export function fetchUser() {
  return fetchFromApi('/users')
}

export function fetchCarts() {
  return fetchFromApi('/carts')
}

export function fetchDeliveryAddress() {
  return fetchFromApi('/delivery-addresses')
}

export function fetchDefaultAddress() {
  return fetchFromApi('/default-address')
}

// Función para obtener un producto específico por ID
export async function fetchProductById(productId: string) {
  try {
    const response = await fetch(`${BaseUrl}/products/${productId}`)
    if (!response.ok) {
      const errorText = await response.text()
      throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorText}`)
    }
    return await response.json()
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

// Función para obtener los productos por categoría
export async function fetchProductsByCategory(categoryId: string) {
  return fetchFromApi(`/products?category=${categoryId}`)
}

// Funciones para manejar datos de usuario

// Registro de usuario
export function registerUser(userData: { nombre: string; correo: string; contraseña: string }) {
  return postToApi('/users', userData)
}

// Inicio de sesión de usuario
export async function loginUser(correo: string, contraseña: string) {
  const endpoint = `/users?correo=${encodeURIComponent(correo)}&contraseña=${encodeURIComponent(contraseña)}`
  try {
    const users = await fetchFromApi(endpoint)
    const user = users.find((u: any) => u.contraseña === contraseña)
    if (user) {
      return user
    } else {
      throw new Error('Credenciales incorrectas')
    }
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

// Funciones para enviar datos

// Crear un nuevo favorito
export function createFavorite(favoriteData: { userId: string; productId: string }) {
  return postToApi('/favorites', favoriteData)
}

// Crear un nuevo carrito
export function createCart(cartData: { userId: string; productoId: string; cantidad: number }) {
  return postToApi('/carts', cartData)
}

// Crear una nueva dirección de entrega
export function createDeliveryAddress(addressData: {
  userId: string
  direccion: string
  ciudad: string
  estado: string
  codigoPostal: string
}) {
  return postToApi('/delivery-addresses', addressData)
}

// Crear una nueva dirección por defecto
export function createDefaultAddress(defaultAddressData: { userId: string; addressId: string }) {
  return postToApi('/default-address', defaultAddressData)
}
