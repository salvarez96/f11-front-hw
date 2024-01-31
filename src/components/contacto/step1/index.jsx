import React, { useState } from 'react';

const Step1ManualComponent = (props) => {

    const {formStep1,setFormStep1} = props;
    
    const handleChange = (e) => {
        const {value, name} = e.target;
        setFormStep1({...formStep1, [name]:value})
    }

    const {setStep} = props;
    return(
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <h1>Step 1</h1>
                </div>
                <div className='col'>
                    <button type="button" onClick={()=>setStep(2)} className='btn btn-success'>Siguiente</button>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <div className="mb-3">
                        <label>Nombre</label>
                        <input type="text" className='form-control' name="nombres" onBlur={(e)=>handleChange(e)}/>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="mb-3">
                        <label>Apellido</label>
                        <input type="text" className='form-control' name="apellido" onBlur={(e)=>handleChange(e)} />
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Step1ManualComponent;