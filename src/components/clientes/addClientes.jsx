import { useDispatch, useSelector } from "react-redux"
import { setClientFormAction } from "../../redux/slices/clientFormSlice"
import { registerClient } from "../../services/clientes/clientesService"
import AlertMessenger from "../alertMessenger"
import { useState } from "react"

function AddClientes() {

  const state = useSelector((state) => state.clientFormStore)
  const dispatch = useDispatch()
  const [apiResponse, setApiResponse] = useState({})

  const handleClientInfo = (e) => {
    let {name, value} = e.target
    if (name === 'edad') value = Number(value)
    const payload = {[name]: value}
    dispatch(setClientFormAction(payload))
  }

  const handleClientRegistraton = async (e) => {
    e.preventDefault()
    dispatch(setClientFormAction({edad: Number(state.clientData.edad)}))
    dispatch(setClientFormAction({tipoDocumento: 'CC'}))
    await registerClient(state.clientData)
      .then(() => {
        [...e.target.elements].forEach(node => node.value = '')
        setApiResponse({
          status: 200,
          message: 'Cliente agregado exitosamente'
        })
      })
      .catch(({response}) => {
        setApiResponse({
          status: response.status,
          message: response.data.message ?? 'Error en el servidor'
        })
      })
  }

  return (
    <div className='container'>
        <div className='col d-flex justify-content-center align-items-center m-5 flex-column'>
            <h2 className='mb-5'>Agrega un nuevo cliente</h2>
            <form action="" className='w-50' style={{minWidth: '300px'}} onSubmit={(e) => handleClientRegistraton(e)}>
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
                    <input type="number" name="noDocumento" id="noDocumento" className='form-control mb-3' onChange={(e) => handleClientInfo(e)} required />
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
                  <button className='btn btn-primary' type="submit" >Agregar cliente</button>
                  <button className='btn btn-light' type="button" >Volver</button>
                </div>
            </form>
            <AlertMessenger statusCode={apiResponse.status} messageContent={apiResponse.message} />
            {/* {apiResponse.status >= 200 &&
                <Link to='/' className='btn btn-success' type="button">Ir a inicio de sesión</Link>
            } */}
        </div>
    </div>
  )
}

export default AddClientes