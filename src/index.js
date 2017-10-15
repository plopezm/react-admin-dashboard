import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import { HashRouter } from 'react-router-dom';

import store from "./core/store";
import {AppRoutes} from './core/router';

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <AppRoutes/>
        </HashRouter>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
