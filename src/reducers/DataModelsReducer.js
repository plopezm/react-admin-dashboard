import {ALL_MODELS} from "../configurations/DataModels";
import {GET_ALL_FROM_MODEL_PATH, GET_ELEMENT_BY_ID} from "../actions/ActionTypes";

const INITIAL_STATE = {
    models: ALL_MODELS,
    data:[]
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type){
        case GET_ELEMENT_BY_ID:
            return Object.assign({}, state, {selectedObject: action.payload});
        case GET_ALL_FROM_MODEL_PATH:
            return Object.assign({}, state, {data: action.payload});
        default:
            return state;
    }
}









