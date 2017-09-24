import { combineReducers } from 'redux'

import AuthenticationReducer from './AuthenticationReducer';

const allReducers = combineReducers({
    authentication: AuthenticationReducer
});

export default allReducers;