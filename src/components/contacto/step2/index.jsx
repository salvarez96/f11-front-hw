import React, { useState } from 'react';

const Step2ManualComponent = (props) => {

    const {setStep,formStep2,setFormStep2} = props;
    

    const handleChange = (e) => {
        const {value, name} = e.target;
        setFormStep2({...formStep2, [name]:value})
    }

    return(
        <div className="container">
            <div className='row'>
                <div className='col'>
                    <h1>Step 2</h1>
                </div>
                <div className='col'>
                    <button type="button" onClick={()=>setStep(1)} className='btn btn-danger'>Atras</button>
                </div>
                <div className='col'>
                    <button type="button" onClick={()=>setStep(3)} className='btn btn-success'>Siguiente</button>
                </div>
                
            </div>
            <div className="row">
            <div className="col-lg-6">
                <div className="mb-3">
                    <label>Correo</label>
                    <input type="text" className='form-control' name="correo" onBlur={(e)=>handleChange(e)}/>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="mb-3">
                    <label>Telefono</label>
                    <input type="text" className='form-control' name="telefono" onBlur={(e)=>handleChange(e)} />
                </div>
            </div>
        </div>
        </div>
    )
}

export default Step2ManualComponent;