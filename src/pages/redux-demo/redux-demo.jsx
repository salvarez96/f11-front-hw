import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDemoAction } from '../../redux/slices/demoSlice';

const ReduxDemoPage = () => {

    const [form, setForm] = React.useState({});

    //Operaciones de lectura
    const {name, email, phone} = useSelector(state => state.demoStore)

    //Operaciones de escritura
    const dispatch = useDispatch();

    const handleChangeInputValue = (e) => {
        const {name, value} = e.target;
        setForm({...form, [name]:value});
    }

    React.useEffect(()=>{
        dispatch(setDemoAction(form));
    },[form])

    return(
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6'>
                    <div className='card'>
                        <div className='card-body'>
                            <div className='card-title mb-3'>
                                Lectura
                            </div>
                                <p>Name: {name}</p>
                                <p>Phone: {phone}</p>
                                <p>Email: {email}</p>
                        </div>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='card'>
                        <div className='card-body'>
                            <div className='card-title'>
                                Escritura
                            </div>

                            <div className='mb-3'>
                                <label>Name</label>
                                <input type="text" name="name" className='form-control' onChange={(e)=>handleChangeInputValue(e)}/>
                            </div>

                            <div className='mb-3'>
                                <label>Phone</label>
                                <input type="text" name="phone" className='form-control' onChange={(e)=>handleChangeInputValue(e)}/>
                            </div>

                            <div className='mb-3'>
                                <label>Email</label>
                                <input type="text" name="email" className='form-control' onChange={(e)=>handleChangeInputValue(e)}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReduxDemoPage;