import React from 'react';
import isAuthenticated from "../../components/authentication/AuthenticationWrapper";

import NavBar from "../../components/navbar/NavBar"
import CardTable from "../../components/cardtable/CardTable";
import ResponsiveTable from '../../components/rtable/ResponsiveTable';
import './Home.css';
import ObjectFormulary from "../../components/form/ObjectFormulary";

const exampleObjects = [
    {
        "title": "Row 1",
        "description": "Row 1 desc",
    },
    {
        "title": "Row 2",
        "description": "Row 2 desc",
    },
    {
        "title": "Row 3",
        "description": "Row 3 desc",
    },
    {
        "title": "Row 4",
        "description": "Row 4 desc",
    },
    {
        "title": "Row 5",
        "description": "Row 5 desc",
    }
]

class Home extends React.Component {

    constructor(props) {
        super(props);

        this.edit = this.edit.bind(this);
        this.delete = this.delete.bind(this);
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
                <hr/>
                <ResponsiveTable objects={exampleObjects} className="is-striped is-narrow content_centered" onEdit={this.edit} onDelete={this.delete}/>
                <hr/>
                <ObjectFormulary className="content_centered"/>
            </div>
        );
    }
}

export default isAuthenticated(Home);