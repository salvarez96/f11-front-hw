import { useEffect, useState } from "react"
import { deleteClient, getClient } from "../../services/clientes/clientesService"
import AlertMessenger from "../alertMessenger"

function DeleteClientes(props) {

  const {clientId, searchClientToDelete, setToggleDeleteClient} = props
  const [clientData, setClientData] = useState({})
  const [apiResponse, setApiResponse] = useState({})

  useEffect(() => {
    if (clientId > 0)
      getClientData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clientId, searchClientToDelete])

  const getClientData = async () => {
    await getClient(clientId)
      .then(client => {
        if (client)
          setClientData(client)
      })
  }

  const handleClientSearch = () => {
    setToggleDeleteClient(false)
    setApiResponse({})
  }

  const handleClientDeletion = async () => {
    await deleteClient(clientId)
      .then(() => {
        setApiResponse({
          status: 200,
          message: 'Cliente eliminado'
        })
        console.log(clientData);
      })
      .catch(({response}) => {
        setApiResponse({
          status: response.status ?? 500,
          message: response.data.message ?? 'Error del servidor'
        })
      })
  }

  return (
    <div className="modal" id="deleteClientModal" tabIndex="-1" onClick={handleClientSearch}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title text-center">Eliminar cliente</h4>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleClientSearch}></button>
          </div>
          <div className="modal-body">
            <h5 className="mb-4">Estás seguro que deseas eliminar el cliente:</h5>
            <p><span className="fw-bold">Nombre:</span> {clientData.nombres} {clientData.apellidos}</p>
            <p><span className="fw-bold">Correo:</span> {clientData.correo}</p>
            <p><span className="fw-bold">Documento:</span> {clientData.noDocumento}</p>
          </div>
          <div className="modal-footer">
            <AlertMessenger statusCode={apiResponse.status} messageContent={apiResponse.message} />
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleClientSearch}>Cerrar</button>
            <button type="button" className="btn btn-danger" onClick={handleClientDeletion}>Eliminar</button>
          </div>
        </div>
      </div>
    </div>
  )
}

DeleteClientes.propTypes

export default DeleteClientes