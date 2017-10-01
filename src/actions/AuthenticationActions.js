import axios from 'axios';
import {
    API_URL, VALIDATE_PATH, SIGNIN_PATH,
    SIGNOUT_PATH,
} from '../configurations/Config'
import {SIGN_IN, SIGN_OUT, VALIDATE} from './ActionTypes';


export function validate(token) {
    return function (dispatch, getState) {
        axios.get(`${API_URL}${VALIDATE_PATH}`, {
            headers: {
                'Authorization': 'Bearer '+token,
            },
            withCredentials: true,
        }).then((response) => {
            console.log("Response from http: ", response);
            dispatch({type: VALIDATE, payload: {isAuthenticated: true, type: response.data.type, token: response.data.token}});
        }).catch((error) => {
            dispatch({type: VALIDATE, payload:{isAuthenticated: false, type:'', token:''}});
        });
    }
}

export function authenticate(user, passwd){
    return function (dispatch, getState) {
        axios.get(`${API_URL}${SIGNIN_PATH}`, {
            headers: {
                'Authorization': 'Basic '+btoa(user+":"+passwd),
            },
            withCredentials: true,
        }).then((response) => {
            console.log("Response from http: ", response);
            dispatch({type: SIGN_IN, payload: {isAuthenticated: true, type: response.data.type, token: response.data.token}});
        }).catch((error) => {
            dispatch({type: SIGN_IN, payload:{isAuthenticated: false, type:'', token:''}});
        });
    }
}

export function logout(){
    return function (dispatch, getState) {
        dispatch({type: SIGN_OUT, payload:{isAuthenticated: false, type:'', token:''}});
    }
}
