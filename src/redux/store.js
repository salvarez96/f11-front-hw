import { configureStore } from "@reduxjs/toolkit";
import demoSlice from "./slices/demoSlice";
import contactoComponentSlice from "./slices/contactoComponentSlice";
import clientFormSlice from './slices/clientFormSlice'

export const store = configureStore({
    reducer : {
        demoStore: demoSlice,
        contactoComponentStore: contactoComponentSlice,
        clientFormStore: clientFormSlice,
    }
})