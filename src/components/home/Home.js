import React from 'react';
import {connect} from 'react-redux';
import {logout} from '../../actions/AuthenticationActions'
import isAuthenticated from "../authentication/AuthenticationWrapper";

import NavBar from "./navbar/NavBar"

import "./Home.css"

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};

        this.performLogout = this.performLogout.bind(this);
    }

    performLogout(){
        this.props.logout();
    }

    render(){
        return (
            <NavBar title="ExampleApp" logo="/logo.png"/>
        );
    }
}

export default isAuthenticated(connect(null, { logout })(Home));