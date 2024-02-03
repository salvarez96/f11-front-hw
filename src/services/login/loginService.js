import apiFetch from "../../utils/apiFetch"

const intentLogin = async (payload) => {

    try {
        const {data} = await apiFetch().post('/usuarios/login', payload);
        localStorage.setItem('jwt_token', JSON.stringify(data.jwt))
        const expirationTime = 20 * 60 * 1000 // min * 60 * 1000 para obtener tiempo en ms
        setTimeout(() => {
            localStorage.removeItem('jwt_token')
            location.pathname = '/'
        }, expirationTime)
        return data;
    } catch (error) {
        return Promise.reject(error)
    }
}

export {
    intentLogin
}