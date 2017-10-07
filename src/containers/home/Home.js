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
        "valid": true,
        "number": 93.7,
        "description": "Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo \"Contenido aquí, contenido aquí\". Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de \"Lorem Ipsum\" va a dar por resultado muchos sitios web que usan este texto si se encuentran en estado de desarrollo. Muchas versiones han evolucionado a través de los años, algunas veces por accidente, otras veces a propósito (por ejemplo insertándole humor y cosas por el estilo)."
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

    onSubmitForm(object){
        alert("Object: "+JSON.stringify(object));
    }

    render(){
        return (
            <div>
                <NavBar title="ExampleApp" logo="/logo.png"/>
                <CardTable objects={exampleObjects} onEdit={this.edit} onDelete={this.delete}/>
                <hr/>
                <ResponsiveTable objects={exampleObjects} className="is-striped is-narrow content_centered" onEdit={this.edit} onDelete={this.delete}/>
                <hr/>
                <ObjectFormulary title="Formulary" className="content_centered" object={exampleObjects[0]} onSubmit={this.onSubmitForm}/>
            </div>
        );
    }
}

export default isAuthenticated(Home);