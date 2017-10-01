import React from 'react';
import isAuthenticated from "../authentication/AuthenticationWrapper";

import NavBar from "./navbar/NavBar"

import "./Home.css"

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render(){
        return (
            <NavBar title="ExampleApp" logo="/logo.png"/>
        );
    }
}

export default isAuthenticated(Home);