import { useEffect, useState } from "react"
import { getClients } from "../../services/clientes/clientesService"
import { Link } from "react-router-dom"

function Step1(props) {

  const {setStep} = props

  const [clients, setClients] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const loadClients = await getClients()
        setClients(loadClients)
        console.log(clients);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleSubmitForm = (e) => {
    e.preventDefault()
    setStep(2)
  }

  return (
    <div className="container">
      <form action="" className='w-50 mt-5' style={{minWidth: '300px', margin: '0 auto'}} onSubmit={(e) => handleSubmitForm(e)}>
        <h5 className='text-center'>1. Elige el cliente para agregar al pedido: </h5>
        <select className="form-select my-5" aria-label="Elegir cliente para pedido">
          {clients && clients.map(client => (
            <option key={client.id} value={client.id}>{client.correo}</option>
          ))}
        </select>
        <div className='d-flex justify-content-around align-items-center gap-2'>
          <Link to='/pedidos' className='btn btn-secondary' type="submit">Volver</Link>
          <button className='btn btn-primary' type="submit">Siguiente</button>
        </div>
      </form>
    </div>
  )
}

export default Step1