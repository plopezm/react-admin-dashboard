import { SIGN_IN, SIGN_OUT, VALIDATE } from "../actions/ActionTypes";

const INITIAL_STATE = {
    isAuthenticated: false,
    token: ''
};

export default function (state = INITIAL_STATE, action) {
    console.log("Reducer: ",action);
    switch (action.type){
        case VALIDATE:
        case SIGN_IN:
            console.log(action.payload);
            return {...state, isAuthenticated: false, token:''};
        case SIGN_OUT:
            return INITIAL_STATE;
        default:
            return state;
    }

}