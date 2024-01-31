import { createSlice } from "@reduxjs/toolkit";

const contactoComponentSlice = createSlice({
    name: 'contactoComponentSlice',
    initialState: {
        step: 1,
        formData: {
            nombres : "",
            apellido : "",
            correo : "",
            direccion : "",
            notas : ""
        }        
    },
    reducers : {
        setStepContactoComponentAction : (state, action) => {
            return {
                ...state,
                step: action.payload
            }
        },
        setFormStepAction : (state, action) => {            
            return {
                ...state,
                formData: {...state.formData, ...action.payload}
            }
        }
    }
});

export const {setStepContactoComponentAction,setFormStepAction} = contactoComponentSlice.actions;

export default contactoComponentSlice.reducer;