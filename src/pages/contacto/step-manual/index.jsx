import React, { useState } from 'react';
import Step1ManualComponent from '../../../components/contacto/step1';
import Step2ManualComponent from '../../../components/contacto/step2';
import Step3ManualComponent from '../../../components/contacto/step3';

const ContactoStepManualPage = () => {

    const [step, setStep] = useState(1);

    const [formStep1, setFormStep1] = useState({})
    const [formStep2, setFormStep2] = useState({})
    const [formStep3, setFormStep3] = useState({})

    return(
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    {step == 1 && <Step1ManualComponent setStep={setStep}  formStep1={formStep1} setFormStep1={setFormStep1} />}
                    {step == 2 && <Step2ManualComponent setStep={setStep} formStep2={formStep2} setFormStep2={setFormStep2} />}
                    {step == 3 && <Step3ManualComponent setStep={setStep} formStep3={formStep3} setFormStep3={setFormStep3} />}
                    {step == 4 && 
                    <>
                    {JSON.stringify(formStep1)}
                    {JSON.stringify(formStep2)}
                    {JSON.stringify(formStep3)}
                    </>
                    }
                </div>
            </div>
        
        </div>
    )
}

export default ContactoStepManualPage;