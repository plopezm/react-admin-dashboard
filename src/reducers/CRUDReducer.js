import { FETCH, CREATE, UPDATE, DELETE } from "../actions/ActionTypes";

const INITIAL_STATE = {
    selectedObject: null,
    selectedObjectName: "",

};

export default function (state = INITIAL_STATE, action) {
    switch (action.type){
        case FETCH:
        case CREATE:
        case UPDATE:
        case DELETE:
        default:
            return state;
    }
}