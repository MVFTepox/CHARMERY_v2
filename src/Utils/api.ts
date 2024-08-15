const BaseUrl = 'http://18.191.246.79:3333/api'

export async function fetchProducts() {
  try {
    const response = await fetch(`${BaseUrl}/products`)
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export async function fetchCategories() {
  try {
    const response = await fetch(`${BaseUrl}/categories`)
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export async function fetchFavorites() {
  try {
    const response = await fetch(`${BaseUrl}/favorites`)
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export async function fetchImages() {
  try {
    const response = await fetch(`${BaseUrl}/images`)
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export async function fetchUser() {
  try {
    const response = await fetch(`${BaseUrl}/users`)
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export async function fetchCarts() {
  try {
    const response = await fetch(`${BaseUrl}/carts`)
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export async function fetchDeliveryAddress() {
  try {
    const response = await fetch(`${BaseUrl}/delivery-addresses`)
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export async function fetchDefaultAddress() {
  try {
    const response = await fetch(`${BaseUrl}/default-address`)
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export async function postDataUser(url: string, data: object) {
  try {
    const response = await fetch(url, {
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
    // Manejo de errores
    console.error('Error:', error)
    throw error // Re-lanzar el error para que pueda ser manejado por el llamador
  }
}

export async function postDatadeliveryAddress(url: string, data: object) {
  try {
    const response = await fetch(url, {
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
    // Manejo de errores
    console.error('Error:', error)
    throw error // Re-lanzar el error para que pueda ser manejado por el llamador
  }
}

export async function postDataDefaultAddress(url: string, data: object) {
  try {
    const response = await fetch(url, {
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
    // Manejo de errores
    console.error('Error:', error)
    throw error // Re-lanzar el error para que pueda ser manejado por el llamador
  }
}

export async function postDataCarts(url: string, data: object) {
  try {
    const response = await fetch(url, {
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
    // Manejo de errores
    console.error('Error:', error)
    throw error // Re-lanzar el error para que pueda ser manejado por el llamador
  }
}

export async function postDataFavorites(url: string, data: object) {
  try {
    const response = await fetch(url, {
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
    // Manejo de errores
    console.error('Error:', error)
    throw error // Re-lanzar el error para que pueda ser manejado por el llamador
  }
}
