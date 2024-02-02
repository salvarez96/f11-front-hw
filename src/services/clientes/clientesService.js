import apiFetch from "../../utils/apiFetch";

export const registerClient = async (payload) => {
  try {
    const {data} = await apiFetch().post('/clientes', payload);
    return data;
  } catch (error) {
      return Promise.reject(error)
  }
}

export const getClients = async (payload) => {
  try {
    const {data} = await apiFetch().get('/clientes', payload);
    return data;
  } catch (error) {
      return Promise.reject(error)
  }
}
