import axios from 'axios';
import {GET_ALL_FROM_MODEL_PATH, GET_ELEMENT_BY_ID, CREATE_OBJECT, UPDATE_OBJECT} from "./ActionTypes";
import {APP_API_URL} from "../configurations/Config";

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

export function createObject(authorization, datamodel, object){
    console.log("Creating: ",object);
    return function (dispatch, getState) {
        axios({
            method: 'POST',
            url: `${APP_API_URL}${datamodel.path}`,
            data: object,
            headers: {
                'Authorization': `${authorization.type} ${authorization.token}`,
            },
            withCredentials: true,
            dataType:'jsonp',
        }).then((response) => {
            return dispatch({type: CREATE_OBJECT, payload: response.data});
        }).catch((error) => {
            return dispatch({type: CREATE_OBJECT});
        });

    }
}

export function updateObject(authorization, datamodel, object){
    console.log("Creating: ",object);
    return function (dispatch, getState) {
        axios({
            method: 'PUT',
            url: `${APP_API_URL}${datamodel.path}`,
            data: object,
            headers: {
                'Authorization': `${authorization.type} ${authorization.token}`,
            },
            withCredentials: true,
            dataType:'jsonp',
        }).then((response) => {
            return dispatch({type: UPDATE_OBJECT, payload: response.data});
        }).catch((error) => {
            return dispatch({type: UPDATE_OBJECT});
        });

    }
}