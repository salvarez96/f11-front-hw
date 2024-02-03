import { useEffect, useState } from 'react';
import AddClientes from '../../components/clientes/addClientes';
import { getClients } from '../../services/clientes/clientesService';
import CustomButton from '../../components/helpers/customButton';
import EditClientes from '../../components/clientes/editClientes';

const ClientesPage = () => {

    const [clientId, setClientId] = useState(0)
    const [clientList, setClientList] = useState([])
    const [addClientesComponent, setAddClientesComponent] = useState(false)
    const [editClientesComponent, setEditClientesComponent] = useState(false)

    useEffect(() => {
        getClientList()
    }, [addClientesComponent, editClientesComponent])

    const getClientList = async () => {
        const clientList = await getClients()
        setClientList(clientList)
    }

    const handleEditButton = (clientId) => {
        setClientId(clientId)
        setEditClientesComponent(true)
    }

    return(
        <div className='container'>
            {(!addClientesComponent && !editClientesComponent) && <>
            <h2 className='my-5 text-center'>Listado de clientes</h2>
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
                        <th scope='col'>Opciones</th>
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
                            <td>
                                <CustomButton
                                    buttonClassVariant="warning"
                                    buttonType="edit"
                                    textAid="Editar cliente"
                                    onClick={() => handleEditButton(client.id)}
                                 />
                                <CustomButton
                                    buttonClassVariant="danger"
                                    buttonType="delete"
                                    textAid="Eliminar cliente"
                                    // onClick
                                />
                            </td>
                        </tr>
                    )})}
                </tbody>
            </table>
            <button type="button" className="btn btn-secondary" onClick={() => setAddClientesComponent(true)}>Agregar cliente</button>
            </>
            }
            {addClientesComponent && <AddClientes setAddClientesComponent={setAddClientesComponent} />}
            {editClientesComponent && <EditClientes setEditClientesComponent={setEditClientesComponent} clientId={clientId} />}
        </div>
    )
}

export default ClientesPage;