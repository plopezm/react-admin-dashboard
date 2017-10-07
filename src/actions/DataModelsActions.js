import axios from 'axios';
import {SHOW_DATAMODEL} from "./ActionTypes";
import {APP_API_URL} from "../configurations/Config";


export function showModel(authorization, datamodel) {
    return function (dispatch, getState) {
        axios({
            method: 'GET',
            url: `${APP_API_URL}${datamodel.path}`,
            headers: {
                'Authorization': `${authorization.type} ${authorization.token}`,
            },
            withCredentials: true,
        }).then((response) => {
            return dispatch({type: SHOW_DATAMODEL, payload: response.body});
        }).catch((error) => {
            return dispatch({type: SHOW_DATAMODEL, payload: []});
        });

    }
}
