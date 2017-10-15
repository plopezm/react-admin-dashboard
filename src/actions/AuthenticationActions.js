import axios from 'axios';
import {
    AUTHORIZATION_API_URL, SIGNIN_RESOURCE, VALIDATE_RESOURCE, SIGNOUT_RESOURCE
} from '../configurations/SecurityConfig'
import {SIGN_IN, SIGN_OUT, VALIDATE} from './ActionTypes';


export function validate(authorizationType, token) {
    return function (dispatch, getState) {
        axios({
            method: VALIDATE_RESOURCE.method,
            url: `${AUTHORIZATION_API_URL}${VALIDATE_RESOURCE.path}`,
            headers: {
                'Authorization': authorizationType+' '+token,
            },
            withCredentials: true,
            dataType:'jsonp',
        }).then((response) => {
                dispatch({type: VALIDATE, payload: {isAuthenticated: true, ...response.data}});
            }).catch((error) => {
                dispatch({type: VALIDATE, payload:{isAuthenticated: false}});
            });
        }
}

export function authenticate(user, passwd){
    return function (dispatch, getState) {
        axios({
            method: SIGNIN_RESOURCE.method,
            url: `${AUTHORIZATION_API_URL}${SIGNIN_RESOURCE.path}`,
            headers: {
                'Authorization': 'Basic '+btoa(user+":"+passwd),
            },
            withCredentials: true,
            dataType:'jsonp',
        }).then((response) => {
            dispatch({type: SIGN_IN, payload: {isAuthenticated: true, ...response.data}});
        }).catch((error) => {
            dispatch({type: SIGN_IN, payload:{isAuthenticated: false}});
        });
    }
}

export function logout(){
    return function (dispatch, getState) {
        dispatch({type: SIGN_OUT, payload:{isAuthenticated: false}});
    }
}
