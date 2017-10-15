import { combineReducers } from 'redux'

import AuthenticationReducer from './AuthenticationReducer';
import DataModelReducer from './DataModelsReducer';

const allReducers = combineReducers({
    authentication: AuthenticationReducer,
    datamodels: DataModelReducer
});

export default allReducers;