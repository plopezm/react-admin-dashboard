import React from 'react';
import {connect} from 'react-redux';
import authenticate from '../../components/authentication/AuthenticationWrapper';
import {getObjectById} from "../../actions/DataModelsActions";
import NavBar from '../../components/navbar/NavBar';
import ObjectFormulary from "../../components/form/ObjectFormulary";

class FormView extends React.Component{

    constructor(props){
        super(props);
        this.renderForm = this.renderForm.bind(this);
    }

    componentWillMount(){
        this.props.getObjectById(this.props.authentication, this.props.datamodel, this.props.match.params[this.props.datamodel.primaryKey]);
    }

    renderForm() {
        if (this.props.object){
            return (
                <ObjectFormulary title="Formulary" className="content_centered" object={this.props.object} datamodel={this.props.datamodel} onSubmit={this.onSubmitForm}/>
            );
        }else{
            return <p>Loading...</p>
        }
    }

    render(){
        return (
            <div>
                <NavBar title="ExampleApp" logo="/logo.png"/>
                {this.renderForm()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {object: state.datamodels.selectedObject};
}

export default authenticate(connect(mapStateToProps, {getObjectById})(FormView));