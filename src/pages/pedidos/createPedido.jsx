import { Link } from "react-router-dom";
import Step1 from "../../components/pedidos/step1";
import { useEffect, useState } from "react";
import { handleFormService } from "../../services/form/formService";

const CreatePedido = () => {

  const [step, setStep] = useState(1)
  const [pedidosForm, setPedidosForm] = useState({})

  useEffect(() => {
    console.log(pedidosForm);
  }, [pedidosForm])

  const handlePedidosForm = (e) => {
    e.preventDefault()
    handleFormService(e, pedidosForm, setPedidosForm)
  }

  return(
  <>
  <div className="container" style={{display: 'grid', gridTemplateColumns: '5fr 2fr'}}>
    <div>
      <h2 className="my-5 text-center">Agregar pedido</h2>
      <div className="d-flex justify-content-center">
        <Link to='/pedidos' className="btn btn-primary">Ver pedidos</Link>
      </div>
      <Step1 setStep={setStep} handlePedidosForm={handlePedidosForm} />
    </div>
    <aside className="bg-body-tertiary px-4">
      <h2 className="my-5 text-center">Carrito</h2>
      <h4 className="my-3">Cliente: </h4>
      {/* {step === 2 && 
      } */}
    </aside>
  </div>
  </>
  )
}

export default CreatePedido;