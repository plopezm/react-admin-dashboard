import {
    API_URL, VALIDATE_PATH, VALIDATE_METHOD, SIGNIN_METHOD, SIGNIN_PATH,
    SIGNOUT_PATH, SIGNOUT_METHOD
} from '../configurations/Config'
import {SIGN_IN, SIGN_OUT, VALIDATE} from './ActionTypes';
import axios from 'axios';


export function validate(token) {
    var request = fetch(`${API_URL}${VALIDATE_PATH}`, {
        method: VALIDATE_METHOD,
        headers: {
            'Authorization': 'Bearer '+token,
        },
    });

    return{
        type: VALIDATE,
        payload: request
    }
}

export function authenticate(user, passwd){
    // var request = fetch(`${API_URL}${SIGNIN_PATH}`, {
    //     method: SIGNIN_METHOD,
    //     headers: {
    //         'Authorization': 'Basic '+btoa(user+":"+passwd)
    //     },
    // });
    var request = axios.get(`${API_URL}${SIGNIN_PATH}`, {
        headers: {
            'Authorization': 'Basic '+btoa(user+":"+passwd),
        },
        withCredentials: true,
    });

    return{
        type: SIGN_IN,
        payload: request
    }
}

export function logout(){
    var request =  fetch(`${API_URL}${SIGNOUT_PATH}`, {
        method: SIGNOUT_METHOD,
        credentials: 'include',
        mode: 'cors'
    });
    return{
        type: SIGN_OUT,
        payload: request
    }
}
