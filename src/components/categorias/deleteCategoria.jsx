import { useEffect, useState } from "react"
import AlertMessenger from "../alertMessenger"
import { DeleteCategorias, GetCagoriasById } from "../../services/categorias/categoriasService"

function DeleteCategory(props) {

  const {categoryId, searchCategoryToDelete, setToggleDeleteCategory} = props

  const [apiResponse, setApiResponse] = useState({})
  const [categoryData, setCategoryData] = useState({})

  useEffect(() => {
    if (categoryId > 0)
      getCategoryData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryId, searchCategoryToDelete])

  const getCategoryData = async () => {
    await GetCagoriasById(categoryId)
      .then(category => {
        if (category)
          setCategoryData(category)
      })
  }

  const handleCategorySearch = () => {
    setToggleDeleteCategory(false)
    setApiResponse({})
  }

  const handleCategoryDeletion = async () => {
    await DeleteCategorias(categoryId)
      .then(() => {
        setApiResponse({
          status: 200,
          message: 'Categoría eliminada'
        })
        console.log(categoryData);
      })
      .catch(({response}) => {
        setApiResponse({
          status: response.status ?? 500,
          message: response.data.message ?? 'Error del servidor'
        })
      })
  }

  return (
    <div className="modal" id="deleteCategoryModal" tabIndex="-1" onClick={handleCategorySearch}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title text-center">Eliminar categoría</h4>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleCategorySearch}></button>
          </div>
          <div className="modal-body">
            <h5 className="mb-4">Estás seguro que deseas eliminar la categoría <i>{categoryData.nombre}</i>?</h5>
          </div>
          <div className="modal-footer">
            <AlertMessenger statusCode={apiResponse.status} messageContent={apiResponse.message} />
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleCategorySearch}>Cerrar</button>
            <button type="button" className="btn btn-danger" onClick={handleCategoryDeletion}>Eliminar</button>
          </div>
        </div>
      </div>
    </div>
  )
}

DeleteCategory.propTypes

export default DeleteCategory