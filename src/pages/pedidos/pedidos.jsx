import { Link } from "react-router-dom";

const PedidosPage = () => {

    return(
    <>
    <div className="container">
        <h2 className="my-5 text-center">Pedidos</h2>
        <div className="d-flex justify-content-center">
            <Link to='/pedidos/agregar' className="btn btn-primary">Agregar pedidos</Link>
        </div>
    </div>
    </>
    )
}

export default PedidosPage;