import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRoute from './AppRoutes.jsx'
import { Provider } from 'react-redux';
import { RouterProvider } from "react-router-dom";
import { store } from './redux/store'
ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <RouterProvider router={AppRoute} />
    </Provider>
    ,
)
