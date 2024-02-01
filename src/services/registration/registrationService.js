import apiFetch from "../../utils/apiFetch";

export const registerUser = async (payload) => {
  try {
    const {data} = await apiFetch().post('/usuarios', payload);
    return data;
  } catch (error) {
      return Promise.reject(error)
  }
}
