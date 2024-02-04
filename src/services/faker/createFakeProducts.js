import axios from "axios"

export const createFakeProducts = async (quantity, category, categoryId) => {
  try {
    const createProduct = await axios.get(`https://fakerapi.it/api/v1/products?_quantity=${quantity}&_locale=es_ES&_categories_type=${category}`)
    const {data} = createProduct
    const products = data.data.map(fakeProduct => {
        return {
          nombre: fakeProduct.name,
          precio: parseFloat(Math.random() * (150000 - 5000 + 1)).toFixed(2),
          imagen: 'http://placeimg.com/640/480/any',
          descripcion: fakeProduct.description,
          categoriaId: Number(categoryId)
        }
      })
    return products 
  } catch (error) {
    const apiError = {
      status: error.response?.status ?? 500,
      message: error.response?.data.message ?? 'Error del servidor'
    }
    return apiError
  }
}