import axios from 'axios';
import {
    AUTHORIZATION_API_URL, SIGNIN_RESOURCE, VALIDATE_RESOURCE, REFRESH_TOKEN_RESOURCE
} from '../configurations/SecurityConfig'
import {SIGN_IN, SIGN_OUT, VALIDATE, REFRESH_TOKEN} from './ActionTypes';


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

export function refresh(authorizationType, token) {
    return function (dispatch, getState) {
        axios({
            method: REFRESH_TOKEN_RESOURCE.method,
            url: `${AUTHORIZATION_API_URL}${REFRESH_TOKEN_RESOURCE.path}`,
            headers: {
                'Authorization': authorizationType+' '+token,
            },
            withCredentials: true,
            dataType:'jsonp',
        }).then((response) => {
            dispatch({type: REFRESH_TOKEN, payload: {isAuthenticated: true, ...response.data}});
        }).catch((error) => {
            dispatch({type: REFRESH_TOKEN, payload:{isAuthenticated: false}});
        });
    }
}

export function logout(){
    return function (dispatch, getState) {
        dispatch({type: SIGN_OUT, payload:{isAuthenticated: false}});
    }
}
