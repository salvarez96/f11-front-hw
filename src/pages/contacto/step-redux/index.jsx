import React from 'react';
import { useSelector } from 'react-redux';

import Step1ReduxComponent from '../../../components/contacto-redux/step1';
import Step2ReduxComponent from '../../../components/contacto-redux/step2';
import Step3ReduxComponent from '../../../components/contacto-redux/step3';

const ContactoStepReduxPage = (props) => {

    //operacion de lectura 
    const {step} = useSelector(state => state.contactoComponentStore)

    return(
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    {step == 1 && <Step1ReduxComponent />}
                    {step == 2 && <Step2ReduxComponent />}
                    {step == 3 && <Step3ReduxComponent />}
                </div>
            </div>
        </div>
    )
}

export default ContactoStepReduxPage;