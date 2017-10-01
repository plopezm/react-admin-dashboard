import React from 'react';
import isAuthenticated from "../authentication/AuthenticationWrapper";

import NavBar from "./navbar/NavBar"
import CardTable from "./cardtable/CardTable";

import "./Home.css"

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render(){
        return (
            <div>
                <NavBar title="ExampleApp" logo="/logo.png"/>
                <CardTable />
            </div>
        );
    }
}

export default isAuthenticated(Home);