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
                <h3>Lista de categorias</h3>
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
                        <tbody>
                            {categorias.length > 0 && categorias.map((data)=>(
                                <tr key={data}>
                                    <td>{data.id}</td>
                                    <td>{data.nombre}</td>
                                    <td><Link className="btn btn-success" to={"/categorias/"+data.id}>Editar</Link></td>
                                </tr>
                            ))}
                        </tbody>
                        </table>
                </div>
            </div>

        </div>
    )
}

export default CategoriasPage;