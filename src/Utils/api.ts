

const urlApi = 'http://3.134.108.48:3333/api'

async function apiRequest(endpoint: string, method: string = 'GET', data?: any) {
  try {
    const options: RequestInit = {
      method,
      headers: {
        'Content-Type': 'application/json'
      }
    };

    if (data) {
      options.body = JSON.stringify(data);
    }

    const response = await fetch(`${urlApi}${endpoint}`, options);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

export function fetchUsers() {
  return apiRequest('/user');
}

export function fetchCategory(id: number) {
  return apiRequest(`/categories/${id}`);
}

export function fetchUser(id: number) {
  return apiRequest(`/user/${id}`);
}

export function fetchCart() {
  return apiRequest('/carts');
}

export function fetchProducts() {
  return apiRequest('/products');
}

export function fetchProduct(id: string) {
  return apiRequest(`/products/${id}`);
}

export function fetchWishlist(id: number) {
  return apiRequest('/favorites');
}

export function fetchDetailCart() {
  return apiRequest('/detail-cart');
}


export function fetchProductsByCategory(id:number) {
  return apiRequest(`/products/category/${id}`);
}

export function fetchDeliveryAddress() {
  return apiRequest('/delivery-address');
}

export function fetchImageById(id: string) {
  return apiRequest(`/images/${id}`);
}
export function fetchDefaultAddress() {
  return apiRequest('/default-address');
}

export function postDeliveryAddress(data: any) {
  return apiRequest('/delivery-address', 'POST', data);
}

export function postDefaultAddress(data: any) {
  return apiRequest('/default-address', 'POST', data);
}

export function postCart(data: any) {
  return apiRequest('/carts', 'POST', data);
}

export function postUser(data: any) {
  return apiRequest('/user', 'POST', data);
}

export function postWishlist(data: any) {
  return apiRequest('/favorites', 'POST', data);
}

export function postDetailCart(data: any) {
  return apiRequest('/detail-cart', 'POST', data);
}

export function deletewishlist(data: any) {
  return apiRequest('/favorites', 'DELETE', data);
}

export function deleteCart(data: any) {
  return apiRequest('/carts', 'DELETE', data);
}