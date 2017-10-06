import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from '../containers/login/Login'
import Home from '../containers/home/Home';

export const App = () => (
    <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/home" component={Home}/>
    </Switch>
);

