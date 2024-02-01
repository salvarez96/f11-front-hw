import { useEffect, useState } from 'react';
import * as categoriasService from '../../../services/categorias/categoriasService'
import { useParams } from 'react-router-dom';
const VerCategoriasPage = (props) => {

    const {id} = useParams();

    const [categoriaData, setCategoriaData] = useState(null);

    useEffect(()=>{
        getCategoriaById();
    },[])

    const getCategoriaById = async () => {
        try {
            const result = await categoriasService.GetCagoriasById(id)
            setCategoriaData(result);
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <>
        {categoriaData &&
        <div className='container'>
            <div className="row">
                <div className="col-lg-12">
                    <div className="mb-3">
                        <label>Nombre</label>
                        <input type="text" className='form-control' name="nombre" value={categoriaData.nombre}/>
                    </div>
                </div>
            </div>
        </div>
        }
        </>
    )
}

export default VerCategoriasPage;