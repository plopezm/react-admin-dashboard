import { SIGN_IN, SIGN_OUT, VALIDATE } from "../actions/ActionTypes";

const INITIAL_STATE = {
    isAuthenticated: false,
    token: '',
    type: ''
};

function setLocalStorageFromState(state) {
    if(state.isAuthenticated){
        localStorage.setItem("credentials", JSON.stringify(state));
    }else{
        localStorage.setItem("credentials", "");
    }
}

function getStateFromLocalStorage() {
    // console.log(localStorage);
    console.log(localStorage.getItem("credentials"));
    if (localStorage.getItem("credentials") === "") {
        return INITIAL_STATE;
    }
    return Object.assign({}, JSON.parse(localStorage.getItem("credentials")));
}

export default function (state = getStateFromLocalStorage(), action) {
    // console.log("Action received: ",action);
    switch (action.type){
        case VALIDATE:
        case SIGN_IN:
            // console.log("Payload from action: ", action);
            setLocalStorageFromState(action.payload);
            return Object.assign({}, state, action.payload);
        case SIGN_OUT:
            // console.log("SIGN OUT: ",action);
            setLocalStorageFromState(action.payload);
            return INITIAL_STATE;
        default:
            return state;
    }

}