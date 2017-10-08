import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {ALL_MODELS} from "../configurations/DataModels";

import Login from '../containers/login/Login'
import Home from '../containers/home/Home';
import EntityView from "../containers/crud/EntityView";
import FormView from "../containers/crud/FormView";

export class AppRoutes extends React.Component {

    renderDynamicView(){
        return ALL_MODELS.map((value, index) => {
            return <Route exact key={index} path={value.path} render={(props) => <EntityView {...props} datamodel={value}/>} />
        });
    }

    renderDynamicForm(){
        return ALL_MODELS.map((value, index) => {
           return <Route key={index} path={`${value.path}/:${value.primaryKey}`} render={(props) => <FormView {...props} datamodel={value}/> } />
        });
    }

    render(){
        return (
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route path="/home" component={Home}/>
                {this.renderDynamicView()}
                {this.renderDynamicForm()}
            </Switch>
        );
    }

}

