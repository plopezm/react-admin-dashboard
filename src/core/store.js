import {createStore, applyMiddleware } from 'redux'
import reducers from '../reducers/index'
import promise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

const store = createStoreWithMiddleware(reducers);

export default store;