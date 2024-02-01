import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { intentLogin } from '../../services/login/loginService';
import AlertMessenger from '../../components/alertMessenger';
import { handleFormService } from '../../services/form/formService';

const HomePage = () => {

    const [userData, setUserData] = useState({})
    const [activateSubmitButton, setActivateSubmitButton] = useState(true)
    const [showLogOutButton, setShowLogOutButton] = useState(false)
    const [apiResponse, setApiResponse] = useState({})

    useEffect(() => {
        setActivateSubmitButton(
            (Object.values(userData).length === 2 && Object.values(userData).every((string) => string.length > 0))
            ? false
            : true
        )
    }, [userData])

    useEffect(() => {
        handleLogOutButton()
    }, [])

    const handleUserData = (e) => handleFormService(e, userData, setUserData)

    const handleLogIn = async (e) => {
        e.preventDefault()
        if (Object.keys(userData).length === 2) {
            await intentLogin(userData)
                .then((response) => {
                    [...e.target.elements].forEach(node => node.value = '')
                    const nombres = response.userData.nombres
                    const apellidos = response.userData.apellidos
                    setApiResponse({
                        userData: {
                            id: response.userData.id,
                            nombres: nombres,
                            apellidos: apellidos,
                        },
                        status: 200,
                        message: `Sesión iniciada como ${nombres} ${apellidos}`,
                    })
                    setUserData({})
                    handleLogOutButton()
                })
                .catch(({response}) => {
                    setApiResponse({
                        status: response.status,
                        message: response.data.message
                    })
                })
        }
    }

    const handleLogOutButton = () => {
        setShowLogOutButton(
            localStorage.getItem('jwt_token')
            ? true
            : false
        )
    }

    const logout = () => {
        localStorage.removeItem('jwt_token')
        handleLogOutButton()
        setApiResponse({
            status: 200,
            message: 'Sesión finalizada'
        })
    }

    return(
        <div className='container'>
            <div className='col d-flex justify-content-center align-items-center m-5 flex-column'>
                <h2 className='mb-5'>Bienvenido al restaurante</h2>
                <h3 className='mb-4'>Inicia sesión o regístrate</h3>
                <form action="" className='w-50' style={{minWidth: '300px'}} onSubmit={(e) => handleLogIn(e)}>
                    <label htmlFor="correo" className='form-label'>Correo: </label>
                    <input type="text" name='correo' id='correo' className='form-control mb-3' onChange={(e) => handleUserData(e)} required />
                    <label htmlFor="clave" className='form-label'>Clave: </label>
                    <input type="password" name='clave' id='clave' className='form-control mb-3' onChange={(e) => handleUserData(e)} required />

                    <div className='d-flex flex-column justify-content-around align-items-center gap-2'>
                        <button type="submit" className='btn btn-primary' disabled={activateSubmitButton}>Iniciar sesión</button>
                        {showLogOutButton &&
                        <button type="button" className='btn btn-danger' onClick={logout}>Cerrar sesión</button>}
                        ó
                        <Link className='btn btn-info' to="/usuarios">Regístrate para ordenar</Link>
                    </div>
                    <AlertMessenger messageContent={apiResponse.message} statusCode={apiResponse.status} />
                </form>
            </div>
        </div>
    )
}

export default HomePage;