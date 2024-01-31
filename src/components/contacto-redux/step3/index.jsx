import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFormStepAction, setStepContactoComponentAction } from '../../../redux/slices/contactoComponentSlice';
const Step3ReduxComponent = () => {

    //operacion de escritura
    const dispatch = useDispatch();

    const handleNext = (step)=> {
        dispatch(setStepContactoComponentAction(step))
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        const payload = {[name]:value};
        dispatch(setFormStepAction(payload))
    }
    
    return(
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <h1>Step 3</h1>
                </div>
                <div className='col'>
                    <button type="button" onClick={()=>handleNext(2)} className='btn btn-danger'>Atras</button>
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

export default Step3ReduxComponent;