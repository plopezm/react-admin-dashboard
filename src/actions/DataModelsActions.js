import axios from 'axios';
import {GET_ALL_FROM_MODEL_PATH, GET_ELEMENT_BY_ID} from "./ActionTypes";
import {APP_API_URL} from "../configurations/Config";


export function getObjectById(authorization, datamodel, id) {
    return function (dispatch, getState) {
        axios({
            method: 'GET',
            url: `${APP_API_URL}${datamodel.path}/${id}`,
            headers: {
                'Authorization': `${authorization.type} ${authorization.token}`,
            },
            withCredentials: true,
            dataType:'jsonp',
        }).then((response) => {
            return dispatch({type: GET_ELEMENT_BY_ID, payload: response.data});
        }).catch((error) => {
            return dispatch({type: GET_ELEMENT_BY_ID});
        });

    }
}

export function getAll(authorization, datamodel) {
    return function (dispatch, getState) {
        axios({
            method: 'GET',
            url: `${APP_API_URL}${datamodel.path}`,
            headers: {
                'Authorization': `${authorization.type} ${authorization.token}`,
            },
            withCredentials: true,
            dataType:'jsonp',
        }).then((response) => {
            return dispatch({type: GET_ALL_FROM_MODEL_PATH, payload: response.data});
        }).catch((error) => {
            return dispatch({type: GET_ALL_FROM_MODEL_PATH, payload: []});
        });

    }
}
