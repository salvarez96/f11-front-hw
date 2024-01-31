import apiFetch from "../../utils/apiFetch"

const GetCagorias = async () => {
    try {
        const {data} = await apiFetch().get('/categorias');
        return data;
    } catch (error) {
        return Promise.reject(error)
    }
}

const GetCagoriasById = async (id) => {
    try {
        const {data} = await apiFetch().get('/categorias/'+id);
        return data;
    } catch (error) {
        return Promise.reject(error)
    }
}

const PostCategorias = async (payload) => {
    try {
        const {data} = await apiFetch().post('/categorias', payload);
        return data;
    } catch (error) {
        return Promise.reject(error)
    }
}

const PutCategorias = async (id, payload) => {
    try {
        const {data} = await apiFetch().put('/categorias/'+id, payload);
        return data;
    } catch (error) {
        return Promise.reject(error)
    }
}

const DeleteCategorias = async (id) => {
    try {
        const {data} = await apiFetch().delete('/categorias/'+id);
        return data;
    } catch (error) {
        return Promise.reject(error)
    }
}

export {
    GetCagorias,
    GetCagoriasById,
    PostCategorias,
    PutCategorias,
    DeleteCategorias
}