import {createStore, applyMiddleware } from 'redux'
import reducers from '../reducers/index'
import promise from 'redux-promise';
import thunk from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

const store = createStoreWithMiddleware(reducers);

export default store;