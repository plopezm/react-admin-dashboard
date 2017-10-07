import {User, Role} from "../configurations/DataModels";
import {SHOW_DATAMODEL} from "../actions/ActionTypes";

const INITIAL_STATE = {
    models: [Role, User]
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type){
        case SHOW_DATAMODEL:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}









