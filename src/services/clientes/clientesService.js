import apiFetch from "../../utils/apiFetch";

export const registerClient = async (payload) => {
  try {
    const {data} = await apiFetch().post('/clientes', payload);
    return data;
  } catch (error) {
      return Promise.reject(error)
  }
}

export const getClients = async () => {
  try {
    const {data} = await apiFetch().get('/clientes');
    return data;
  } catch (error) {
      return Promise.reject(error)
  }
}

export const getClient = async (clientId) => {
  try {
    const {data} = await apiFetch().get(`/clientes/${clientId}`);
    return data;
  } catch (error) {
      return Promise.reject(error)
  }
}

export const editClient = async (payload, clientId) => {
  try {
    const {data} = await apiFetch().put(`/clientes/${clientId}`, payload);
    return data;
  } catch (error) {
      return Promise.reject(error)
  }
}

export const deleteClient = async (clientId) => {
  try {
    const {data} = await apiFetch().delete(`/clientes/${clientId}`);
    return data;
  } catch (error) {
      return Promise.reject(error)
  }
}
