import React from 'react';
import {connect} from 'react-redux';
import authenticate from '../../components/authentication/JwtAuthenticationWrapper';
import {getObjectById, createObject} from "../../actions/DataModelsActions";
import NavBar from '../../components/navbar/NavBar';
import ObjectFormulary from "../../components/form/ObjectFormulary";
import axios from 'axios';

class CreateView extends React.Component{

    constructor(props){
        super(props);
        this.renderForm = this.renderForm.bind(this);
        this.onFetchModel = this.onFetchModel.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onFetchModel(datamodel){
        let url = `${datamodel.apiserver}${datamodel.path}`;
        return axios({
            method: 'GET',
            url: url,
            headers: {
                'Authorization': `${this.props.authentication.type} ${this.props.authentication.token}`,
            },
            withCredentials: true,
            dataType:'jsonp',
        });
    }

    onSubmit(object){
        this.props.createObject(this.props.authentication, this.props.datamodel, object);
        this.props.history.push(this.props.datamodel.path);
    }

    renderForm() {
        if (this.props.datamodel){
            return (
                <ObjectFormulary title="Create" className="container margin-top-enabled" datamodel={this.props.datamodel} onCancel={() => this.props.history.push(this.props.datamodel.path)} onSubmit={this.onSubmit} onFetchModel={this.onFetchModel}/>
            );
        }else{
            return <p>Data model not found</p>
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

export default authenticate(connect(mapStateToProps, {getObjectById, createObject})(CreateView));