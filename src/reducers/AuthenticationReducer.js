import { SIGN_IN, SIGN_OUT, VALIDATE } from "../actions/ActionTypes";

const INITIAL_STATE = {
    isAuthenticated: false,
    token: '',
    type: ''
};

export default function (state = INITIAL_STATE, action) {
    // console.log("Action received: ",action);
    switch (action.type){
        case VALIDATE:
        case SIGN_IN:
            console.log("Payload from action: ", action);
            return Object.assign({}, state, action.payload);
        case SIGN_OUT:
            return INITIAL_STATE;
        default:
            return state;
    }

}