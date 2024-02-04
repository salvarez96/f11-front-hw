import apiFetch from "../../utils/apiFetch";

export const registerProduct = async (payload) => {
  try {
    const {data} = await apiFetch().post('/productos', payload);
    return data;
  } catch (error) {
      return Promise.reject(error)
  }
}

export const getProducts = async (param) => {
  try {
    const {data} = await apiFetch().get(`/productos${param ? '?' + param : ''}`);
    return data;
  } catch (error) {
      return Promise.reject(error)
  }
}

export const getProduct = async (productId) => {
  try {
    const {data} = await apiFetch().get(`/productos/${productId}`);
    return data;
  } catch (error) {
      return Promise.reject(error)
  }
}

export const editProduct = async (payload, productId) => {
  try {
    const {data} = await apiFetch().put(`/productos/${productId}`, payload);
    return data;
  } catch (error) {
      return Promise.reject(error)
  }
}

export const deleteProduct = async (productId) => {
  try {
    const {data} = await apiFetch().delete(`/productos/${productId}`);
    return data;
  } catch (error) {
      return Promise.reject(error)
  }
}
