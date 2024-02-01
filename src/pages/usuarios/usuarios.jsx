import { useEffect, useRef, useState } from "react";
import { Tooltip } from "bootstrap";
import { registerUser } from "../../services/registration/registrationService";

const UsuariosPage = () => {

    const tooltipRef = useRef()
    const [userData, setUserData] = useState({role: 'Client'})
    const [apiResponse, setApiResponse] = useState({})

    useEffect(() => {
        // eslint-disable-next-line no-unused-vars
        const tooltip = new Tooltip(tooltipRef.current, {
            title: 'Trata de NO utilizar tus datos reales, esta es una app de prueba',
            placement: 'auto',
            trigger: 'hover'
        })
    })

    useEffect(() => {
        Object.keys(apiResponse).length > 0 ? console.log(apiResponse) : ''
    }, [apiResponse])

    const getUserInfo = (e) => {
        const {name, value} = e.target

        setUserData({
            ...userData,
            ...{[name]: value}
        })
    }

    const handleUserRegistration = async () => {
        await registerUser(userData)
            .then(() => setApiResponse({
                status: 201,
                message: 'Usuario creado satisfactoriamente'
            }))
            .catch((data) => setApiResponse({
                status: data.response.status,
                message: data.response.data.message
            }))
    }

    return(
        <div className='container'>
            <div className='col d-flex justify-content-center align-items-center m-5 flex-column'>
                <h2 className='mb-5'>Crea tu usuario</h2>
                <form action="" className='w-50' style={{minWidth: '300px'}}>
                    <div className='mb-3'>
                        <label htmlFor="nombres" className='form-label'>Nombres: </label>
                        <input type="text" name="nombres" id="nombres" className='form-control mb-3' onBlur={(e) => getUserInfo(e)} required />
                        <label htmlFor="apellidos" className='form-label'>Apellidos: </label>
                        <input type="text" name="apellidos" id="apellidos" className='form-control mb-3' onBlur={(e) => getUserInfo(e)} required />
                        <label htmlFor="correo" className='form-label' ref={tooltipRef}>Correo: </label>
                        <input type="text" name="correo" id="correo" className='form-control mb-3' onBlur={(e) => getUserInfo(e)} required />
                        <label htmlFor="clave" className='form-label'>Password: </label>
                        <input type="password" name="clave" id="clave" className='form-control mb-3' onBlur={(e) => getUserInfo(e)} required />
                    </div>
                    <button className='btn btn-primary' type="button" onClick={handleUserRegistration}>Crear usuario</button>
                </form>
            </div>
        </div>
    )
}

export default UsuariosPage;