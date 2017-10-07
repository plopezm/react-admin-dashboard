import React from 'react';
import {connect} from 'react-redux';
import authenticate from '../../components/authentication/AuthenticationWrapper';
import ObjectFormulary from "../../components/form/ObjectFormulary";

class CRUDPanel extends React.Component {

    onSubmitForm(object){
        alert("Object: "+JSON.stringify(object));
    }

    render(){
        return (
            <div>
                <ObjectFormulary title={`Formulary '${this.props.title}'`} className="content_centered" object={this.props.object} onSubmit={this.onSubmitForm}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {object: state.app.selectedObject,
            title: state.app.selectedObjectName};
}

export default authenticate(connect(nil,nil)(CRUDPanel));