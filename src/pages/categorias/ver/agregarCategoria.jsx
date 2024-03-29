import { useEffect, useRef, useState } from "react";
import { PostCategorias } from "../../../services/categorias/categoriasService"
import AlertMessenger from "../../../components/alertMessenger";
import { Link } from "react-router-dom";
import { handleFormService } from "../../../services/form/formService";
import { createFakeProducts } from "../../../services/faker/createFakeProducts";
import { registerProduct } from "../../../services/productos/productosService";

function AddCategory() {

  const formRef = useRef(null)

  const [newCategory, setNewCategory] = useState({})
  const [apiResponse, setApiResponse] = useState({})
  const [addButton, setAddButton] = useState(false)

  useEffect(() => {
    setAddButton(
      (Object.values(newCategory).length === 1 && Object.values(newCategory).every((string) => string.length > 0))
        ? false
        : true
    )
  }, [newCategory])

  useEffect(() => {
    async function fetchData() {
      if (apiResponse.status === 200)
        await createProducts()
    }
    fetchData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apiResponse])

  const handleCategoryInfo = (e) => {
    handleFormService(e, newCategory, setNewCategory)
  }

  const handleNewCategory = async (e) => {
    e.preventDefault()
    await PostCategorias(newCategory)
      .then((data) => {
        [...e.target.elements].forEach(node => node.value = '')
        setApiResponse({
          status: 200,
          message: 'Categoría creada exitosamente',
          categoryId: data.id
        })
      })
      .catch(({response}) => setApiResponse({
        status: response.status ?? 500,
        message: response.data.message ?? 'Error en el servidor'
      }));
  }

  const createProducts = async () => {
    if (apiResponse.status === 200) {
      const products = await createFakeProducts(4, 'food', apiResponse.categoryId)
      
      products.forEach(async (product) => {
        try {
          registerProduct(product)
          console.log('Productos registrados con éxito');
        } catch (error) {
          console.log(error);
        }
      })
    }
  }

  return (
    <div className="container">
      <div className='col d-flex justify-content-center align-items-center m-5 flex-column'>
        <h2 className="mb-5 text-center">Agregar nueva categoría</h2>
        <form action="" className='w-50' style={{minWidth: '300px'}} ref={formRef} onSubmit={(e) => handleNewCategory(e)}>
          <div className="mb3">
            <label htmlFor="nombre" className='form-label'>Nombre de categoría: </label>
            <input type="text" name="nombre" id="nombre" className='form-control mb-3' onChange={(e) => handleCategoryInfo(e)} required />
          </div>
          <div className='d-flex justify-content-around align-items-center gap-2'>
            <button className='btn btn-primary' type="submit" disabled={addButton}>Agregar categoría</button>
            <Link to="/categorias" className='btn btn-light'>Volver</Link>
          </div>
        </form>
        <AlertMessenger statusCode={apiResponse.status} messageContent={apiResponse.message} />
      </div>
    </div>
  )
}

export default AddCategory