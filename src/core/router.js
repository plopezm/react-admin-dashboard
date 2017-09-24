import React from 'react';
import { Route } from 'react-router-dom';

import Login from '../components/login/Login'
import Home from '../components/home/Home';

export default (
    <Route path="/" component={Login}>
        <Route path="/home" component={Home}/>
    </Route>
);