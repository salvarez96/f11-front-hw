import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = (props) => {

    const {emailProp} = props;

    return(
        <div className='container'>
            <div className='col d-flex justify-content-center align-items-center m-5 flex-column'>
                <h2 className='mb-5'>Bienvenido al restaurante</h2>
                <Link className='btn btn-primary d-block' to="/usuarios">Regístrate para ordenar</Link>
            </div>
        </div>
    )
}

export default HomePage;