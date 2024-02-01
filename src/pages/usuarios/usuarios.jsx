import { useEffect, useRef, useState } from "react";
import { Tooltip } from "bootstrap";
import { registerUser } from "../../services/registration/registrationService";
import AlertMessenger from "../../components/alertMessenger.jsx";
import { Link } from "react-router-dom";
import { handleFormService } from "../../services/form/formService.js";

const UsuariosPage = () => {

    const tooltipRef = useRef()
    const [userData, setUserData] = useState({role: 'Client'})
    const [apiResponse, setApiResponse] = useState({})
    const [activateSubmitButton, setActivateSubmitButton] = useState(true)

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

    useEffect(() => {
        setActivateSubmitButton(
            (Object.values(userData).length === 5 && Object.values(userData).every((string) => string.length > 0))
            ? false
            : true
        )
    }, [userData])

    const handleUserInfo = (e) => handleFormService(e, userData, setUserData)

    const handleUserRegistration = async (e) => {
        e.preventDefault()
        if (Object.keys(userData).length === 5) {
            await registerUser(userData)
                .then(() => setApiResponse({
                    status: 201,
                    message: 'Usuario creado satisfactoriamente'
                }))
                .catch(({response}) => setApiResponse({
                    status: response.status,
                    message: response.data.message
                }))
            setUserData({role: 'Client'})
        }
    }

    return(
        <div className='container'>
            <div className='col d-flex justify-content-center align-items-center m-5 flex-column'>
                <h2 className='mb-5'>Crea tu usuario</h2>
                <form action="" className='w-50' style={{minWidth: '300px'}}>
                    <div className='mb-3'>
                        <label htmlFor="nombres" className='form-label'>Nombres: </label>
                        <input type="text" name="nombres" id="nombres" className='form-control mb-3' onChange={(e) => handleUserInfo(e)} required />
                        <label htmlFor="apellidos" className='form-label'>Apellidos: </label>
                        <input type="text" name="apellidos" id="apellidos" className='form-control mb-3' onChange={(e) => handleUserInfo(e)} required />
                        <label htmlFor="correo" className='form-label' ref={tooltipRef}>Correo: </label>
                        <input type="text" name="correo" id="correo" className='form-control mb-3' onChange={(e) => handleUserInfo(e)} required />
                        <label htmlFor="clave" className='form-label'>Password: </label>
                        <input type="password" name="clave" id="clave" className='form-control mb-3' onChange={(e) => handleUserInfo(e)} required />
                    </div>
                    <button className='btn btn-primary' type="submit" onClick={(e) => handleUserRegistration(e)} disabled={activateSubmitButton}>Crear usuario</button>
                </form>
                <AlertMessenger statusCode={apiResponse.status} messageContent={apiResponse.message} />
                {apiResponse.status >= 200 &&
                    <Link to='/' className='btn btn-success' type="button">Ir a inicio de sesión</Link>
                }
            </div>
        </div>
    )
}

export default UsuariosPage;