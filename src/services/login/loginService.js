import  apiFetch from "../../utils/apiFetch"

const intentLogin = async (payload) => {    

    try {
        const {data} = await apiFetch().post('/usuarios/login', payload);
        return data;
    } catch (error) {
        return Promise.reject(error)
    }

}

export {
    intentLogin
}