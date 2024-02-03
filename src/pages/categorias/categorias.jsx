import { useEffect, useState } from 'react';
import * as categoriasService from '../../services/categorias/categoriasService'
import { Link } from 'react-router-dom';

const CategoriasPage = () => {

    const [categorias, setCategorias] = useState([])

    useEffect(()=>{
        handleGetCategorias();
    },[])

    const handleGetCategorias = async () => {
        try {
            const result = await categoriasService.GetCagorias();
            setCategorias(result);
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <div className='container'>
            <div className='row'>
                <h2 className='my-5 text-center'>Lista de categorias</h2>
            </div>
            <div className='row'>
                <div className='col-lg-12'>
                <table className='table table-stripped'>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nombre</th>
                                <th>Opciones</th>
                            </tr>
                        </thead>
                        <tbody className='table-group-divider'>
                            {categorias.length > 0 && categorias.map((category, i)=>(
                                <tr key={i}>
                                    <td>{category.id}</td>
                                    <td>{category.nombre}</td>
                                    <td><Link className="btn btn-success" to={"/categorias/"+category.id}>Editar</Link></td>
                                </tr>
                            ))}
                        </tbody>
                        </table>
                        <Link className="btn btn-secondary" to={"/categorias/new"} >Agregar categoría</Link>
                </div>
            </div>

        </div>
    )
}

export default CategoriasPage;