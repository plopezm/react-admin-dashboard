import {ALL_MODELS} from "../configurations/DataModels";
import {
    CREATE_OBJECT, DELETE_OBJECT, GET_ALL_FROM_MODEL_PATH, GET_ELEMENT_BY_ID,
    UPDATE_OBJECT
} from "../actions/ActionTypes";

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
        case CREATE_OBJECT:
        case UPDATE_OBJECT:
        case DELETE_OBJECT:
        default:
            return state;
    }
}









