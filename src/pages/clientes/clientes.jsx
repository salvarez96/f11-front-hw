import { useEffect, useState } from 'react';
import AddClientes from '../../components/clientes/addClientes';
import { getClients } from '../../services/clientes/clientesService';

const ClientesPage = () => {

    const [clientList, setClientList] = useState([])

    useEffect(() => {
        getClientList()
    }, [])

    const getClientList = async () => {
        setClientList(await getClients())
    }

    return(
        <div className='container'>
            <h2 className='mb-5'>Listado de clientes</h2>
            <table className='table'>
                <thead>
                    <tr>
                        <th scope='col'>#</th>
                        <th scope='col'>Nombres</th>
                        <th scope='col'>Apellidos</th>
                        <th scope='col'>Correo</th>
                        <th scope='col'>Dirección</th>
                        <th scope='col'>Ciudad</th>
                        <th scope='col'>Notas</th>
                    </tr>
                </thead>
                <tbody className='table-group-divider'>
                    {clientList.map((client, i) => {return(
                        <tr key={i}>
                            <th className="scope">{i+1}</th>
                            <td>{client.nombres}</td>
                            <td>{client.apellidos}</td>
                            <td>{client.correo}</td>
                            <td>{client.direccion}</td>
                            <td>{client.ciudad}</td>
                            <td>{client.notas}</td>
                        </tr>
                    )})}
                </tbody>
            </table>
            <AddClientes />
        </div>
    )
}

export default ClientesPage;