import React, { useState } from 'react';

const Step3ManualComponent = (props) => {

    const {setStep,formStep3,setFormStep3} = props;

    

    const handleChange = (e) => {
        const {value, name} = e.target;
        setFormStep3({...formStep3, [name]:value})
    }
    
    return(
        <div className="container">
            <div className='row'>
                <div className='col'>
                    <h1>Step 3</h1>
                </div>
                <div className='col'>
                    <button type="button" onClick={()=>setStep(2)} className='btn btn-danger'>Atras</button>
                </div>
                <div className='col'>
                    <button type="button" onClick={()=>setStep(4)} className='btn btn-success'>Siguiente</button>
                </div>
            </div>
            <div className="row">
            <div className="col-lg-6">
                <div className="mb-3">
                    <label>Direccion</label>
                    <input type="text" className='form-control' name="direccion" onBlur={(e)=>handleChange(e)}/>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="mb-3">
                    <label>Notas</label>
                    <input type="text" className='form-control' name="notas" onBlur={(e)=>handleChange(e)} />
                </div>
            </div>
        </div>
        </div>
    )
}

export default Step3ManualComponent;