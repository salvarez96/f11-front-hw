import axios from 'axios';
import { BASE_URL } from '../config';


const apiFetch = () => {

    const token = JSON.parse(localStorage.getItem('jwt_token'))
    const instance = axios.create({
        baseURL : BASE_URL,
        headers : {
            'Content-Type': 'application/json'    
        }
    })

    if(token){
        instance.defaults.headers['Authorization'] = `Bearer ${token}`;
    }
    
    return instance;

}

export default apiFetch;