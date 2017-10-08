import axios from 'axios';
import {
    AUTHORIZATION_API_URL, VALIDATE_PATH, SIGNIN_PATH,
    VALIDATE_METHOD,  SIGNIN_METHOD
} from '../configurations/Config'
import {SIGN_IN, SIGN_OUT, VALIDATE} from './ActionTypes';


export function validate(authorizationType, token) {
    return function (dispatch, getState) {
        axios({
            method: VALIDATE_METHOD,
            url: `${AUTHORIZATION_API_URL}${VALIDATE_PATH}`,
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
            method: SIGNIN_METHOD,
            url: `${AUTHORIZATION_API_URL}${SIGNIN_PATH}`,
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
