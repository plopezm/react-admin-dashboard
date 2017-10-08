import {User, Role} from "../configurations/DataModels";
import {GET_ALL_FROM_MODEL_PATH} from "../actions/ActionTypes";

const INITIAL_STATE = {
    models: [Role, User],
    data:[]
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type){
        case GET_ALL_FROM_MODEL_PATH:
            return Object.assign({}, state, {data: action.payload});
        default:
            return state;
    }
}









