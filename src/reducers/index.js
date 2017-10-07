import { combineReducers } from 'redux'

import AuthenticationReducer from './AuthenticationReducer';
import CRUDReducer from "./CRUDReducer";

const allReducers = combineReducers({
    authentication: AuthenticationReducer,
    app: CRUDReducer
});

export default allReducers;