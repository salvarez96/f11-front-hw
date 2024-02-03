import { useEffect, useState } from 'react';
import * as categoriasService from '../../../services/categorias/categoriasService'
import { Link, useParams } from 'react-router-dom';
import { handleFormService } from '../../../services/form/formService';
import AlertMessenger from '../../../components/alertMessenger';

const VerCategoriasPage = () => {

    const {id} = useParams();

    const [categoriaData, setCategoriaData] = useState({});
    const [apiResponse, setApiResponse] = useState({});

    useEffect(()=>{
        getCategoriaById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const getCategoriaById = async () => {
        try {
            const result = await categoriasService.GetCagoriasById(id)
            setCategoriaData(result);
        } catch (error) {
            console.log(error)
        }
    }

    const handleCategoryInfo = (e) => {
        handleFormService(e, categoriaData, setCategoriaData)
    }

    const handleEditCategory = async (e) => {
        e.preventDefault()
        await categoriasService.PutCategorias(id, categoriaData)
            .then(() => setApiResponse({
                status: 200,
                message: 'Categoría modificada'
            }))
            .catch(({response}) => setApiResponse({
                status: response.status ?? 500,
                message: response.data.message ?? 'Error en el servidor'
            }))
    }

    return(
        <>
        {categoriaData &&
        <div className='container'>
            <div className="row">
                <div className='col d-flex justify-content-center align-items-center m-5 flex-column'>
                    <h2 className="mb-5 text-center">Editar categoría</h2>
                    <form className="w-50 mb-3" style={{minWidth: '300px'}} onSubmit={(e) => handleEditCategory(e)}>
                        <label htmlFor="nombre" className='form-label'>Nombre: </label>
                        <input type="text" className='form-control mb-3' name="nombre" value={categoriaData.nombre} onChange={(e) => handleCategoryInfo(e)}/>
                        <div className='d-flex justify-content-around align-items-center gap-2'>
                            <button className='btn btn-primary' type="submit">Editar categoría</button>
                            <Link to="/categorias" className='btn btn-light'>Volver</Link>
                        </div>
                    </form>
                    <AlertMessenger statusCode={apiResponse.status} messageContent={apiResponse.message} />
                </div>
            </div>
        </div>
        }
        </>
    )
}

export default VerCategoriasPage;