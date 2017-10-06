import React from 'react';
import isAuthenticated from "../../components/authentication/AuthenticationWrapper";

import NavBar from "../../components/navbar/NavBar"
import CardTable from "../../components/cardtable/CardTable";
import ResponsiveTable from '../../components/rtable/ResponsiveTable';
import './Home.css';

const exampleObjects = [
    {
        "title": "Table 1",
        "description": "Table 1",
    },
    {
        "title": "Table 2",
        "description": "Table 2",
    },
    {
        "title": "Table 3",
        "description": "Table 3",
    },
    {
        "title": "Table 4",
        "description": "Table 4",
    },
    {
        "title": "Table 5",
        "description": "Table 5",
    }
]

class Home extends React.Component {

    constructor(props) {
        super(props);
    }


    edit(data){
        alert("EDIT: " + JSON.stringify(data));
    }

    delete(data){
        alert("DELETED: " + JSON.stringify(data));
    }

    render(){
        return (
            <div>
                <NavBar title="ExampleApp" logo="/logo.png"/>
                <CardTable objects={exampleObjects} onEdit={this.edit} onDelete={this.delete}/>
                <ResponsiveTable objects={exampleObjects} className="is-striped is-narrow table_centered"/>
            </div>
        );
    }
}

export default isAuthenticated(Home);