import { createSlice } from "@reduxjs/toolkit";

const clientFormSlice = createSlice({
  name: 'clientFormSlice',
  initialState: {
    clientData: {
      tipoDocumento: 'CC',
      noDocumento: null,
      edad: null,
      nombres: null,
      apellidos: null,
      correo: null,
      telefono: null,
      direccion: null,
      ciudad: null,
      notas: null
    }
  },
  reducers: {
    setClientFormAction : (state, action) => {
      return {
        ...state,
        clientData: {...state.clientData, ...action.payload}
      }
    }
  }
})

export const { setClientFormAction } = clientFormSlice.actions
export default clientFormSlice.reducer