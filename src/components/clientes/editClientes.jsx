import { useDispatch, useSelector } from "react-redux"
import { setClientFormAction } from "../../redux/slices/clientFormSlice"
import { editClient, getClient } from "../../services/clientes/clientesService"
import AlertMessenger from "../alertMessenger"
import { useEffect, useRef, useState } from "react"

function EditClientes(props) {

  const {setEditClientesComponent, clientId} = props

  const formRef = useRef(null)
  const state = useSelector((state) => state.clientFormStore)
  const dispatch = useDispatch()
  const [apiResponse, setApiResponse] = useState({})

  useEffect(() => {
    getClientInfo()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getClientInfo = async () => {
    await getClient(clientId)
      .then(clientData => {
        [...formRef.current.elements].forEach((node) => {
          if (clientData[node.name]) {
            node.type !== 'radio'
              ? node.value = clientData[node.name]
              : node.id === clientData[node.name] ? node.checked = true : ''
          }
          dispatch(setClientFormAction({id: clientData.id, ...clientData}))
        })
      })
      .catch(({response}) => {
        setApiResponse({
          status: response.status ?? 500,
          message: response.data.message ?? 'Error del servidor'
        })
      })
  }

  const handleClientInfo = (e) => {
    let {name, value} = e.target
    if (name === 'edad') value = Number(value)
    const payload = {[name]: value}
    dispatch(setClientFormAction(payload))
  }

  const handleClientUpdate = async (e) => {
    e.preventDefault()
    dispatch(setClientFormAction({edad: Number(state.clientData.edad)}))
    await editClient(state.clientData, state.clientData.id)
      .then(() => {
        setApiResponse({
          status: 200,
          message: 'Cliente editado exitosamente'
        })
      })
      .catch(({response}) => {
        setApiResponse({
          status: response.status ?? 500,
          message: response.data.message ?? 'Error en el servidor'
        })
      })
  }

  return (
    <div className='container'>
        <div className='col d-flex justify-content-center align-items-center m-5 flex-column'>
            <h2 className='mb-5'>Edita los datos del cliente</h2>
            <form action="" className='w-50' style={{minWidth: '300px'}} ref={formRef} onSubmit={(e) => handleClientUpdate(e)}>
                <div className='mb-3'>
                    <label htmlFor="nombres" className='form-label'>Nombres: </label>
                    <input type="text" name="nombres" id="nombres" className='form-control mb-3' onChange={(e) => handleClientInfo(e)} required />

                    <label htmlFor="apellidos" className='form-label'>Apellidos: </label>
                    <input type="text" name="apellidos" id="apellidos" className='form-control mb-3' onChange={(e) => handleClientInfo(e)} required />

                    <label htmlFor="correo" className='form-label'>Correo: </label>
                    <input type="text" name="correo" id="correo" className='form-control mb-3' onChange={(e) => handleClientInfo(e)} required />

                    <label htmlFor="telefono" className='form-label'>Telefono: </label>
                    <input type="number" name="telefono" id="telefono" className='form-control mb-3' onChange={(e) => handleClientInfo(e)} required />

                    <label htmlFor="noDocumento" className='form-label'>Documento: </label>
                    <input type="number" name="noDocumento" id="noDocumento" minLength={6} maxLength={10} className='form-control mb-3' onChange={(e) => handleClientInfo(e)} required />

                    <p>Tipo documento: </p>
                    <div className="d-flex mb-3">
                      <div className="form-check">
                        <label htmlFor="CC" className='form-check-label'>CC</label>
                        <input type="radio" name="tipoDocumento" id="CC" value="CC" className="form-check-input" onClick={(e) => handleClientInfo(e)} defaultChecked />
                      </div>
                      <div className="form-check mx-3">
                        <label htmlFor="TI" className='form-check-label'>TI</label>
                        <input type="radio" name="tipoDocumento" id="TI" value="TI" className="form-check-input" onClick={(e) => handleClientInfo(e)} />
                      </div>
                    </div>

                    <label htmlFor="edad" className='form-label'>Edad: </label>
                    <input type="number" name="edad" id="edad" className='form-control mb-3' onChange={(e) => handleClientInfo(e)} required />

                    <label htmlFor="direccion" className='form-label'>Dirección: </label>
                    <input type="text" name="direccion" id="direccion" className='form-control mb-3' onChange={(e) => handleClientInfo(e)} required />

                    <label htmlFor="ciudad" className='form-label'>Ciudad: </label>
                    <input type="text" name="ciudad" id="ciudad" className='form-control mb-3' onChange={(e) => handleClientInfo(e)} required />

                    <label htmlFor="notas" className='form-label'>Notas: </label>
                    <input type="text" name="notas" id="notas" className='form-control mb-3' onChange={(e) => handleClientInfo(e)} required />
                </div>
                <div className='d-flex justify-content-around align-items-center gap-2'>
                  <button className='btn btn-primary' type="submit">Editar cliente</button>
                  <button className='btn btn-light' type="button" onClick={() => setEditClientesComponent(false)}>Volver</button>
                </div>
            </form>
            <AlertMessenger statusCode={apiResponse.status} messageContent={apiResponse.message} />
        </div>
    </div>
  )
}

EditClientes.propTypes

export default EditClientes