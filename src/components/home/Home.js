import React from 'react';
import isAuthenticated from "../authentication/AuthenticationWrapper";

import NavBar from "./navbar/NavBar"
import CardTable from "./cardtable/CardTable";

const objects = [
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
                <CardTable objects={objects} onEdit={this.edit} onDelete={this.delete}/>
            </div>
        );
    }
}

export default isAuthenticated(Home);