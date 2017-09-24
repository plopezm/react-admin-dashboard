import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import {Provider} from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import store from "./core/store";
import Login from './components/login/Login'


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route path="/" component={Login}/>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
