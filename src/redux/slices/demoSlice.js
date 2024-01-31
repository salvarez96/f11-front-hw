import { createSlice } from "@reduxjs/toolkit";

const demoSlice = createSlice({
    name: 'demoSlice',
    initialState: {
        name: null,
        phone:null,
        email: null
    },
    reducers : {
        setDemoAction : (state, action) => {
            return {
                ...state,
                email: action.payload.email,
                phone: action.payload.phone,
                name: action.payload.name,
            }
        }
    }
});

export const {setDemoAction} = demoSlice.actions;

export default demoSlice.reducer;