import React from 'react';
import {connect} from 'react-redux';
import authenticate from '../../components/authentication/AuthenticationWrapper';
import {getObjectById} from "../../actions/DataModelsActions";
import NavBar from '../../components/navbar/NavBar';
import ObjectFormulary from "../../components/form/ObjectFormulary";
import axios from 'axios';
import {APP_API_URL} from "../../configurations/Config";

class FormView extends React.Component{

    constructor(props){
        super(props);
        this.renderForm = this.renderForm.bind(this);
        this.onFetchModel = this.onFetchModel.bind(this);
    }

    componentWillMount(){
        this.props.getObjectById(this.props.authentication,  this.props.datamodel,  this.props.match.params[this.props.datamodel.primaryKey]);
    }

    componentWillReceiveProps(nextProps){
        if(this.props.match.params[this.props.datamodel.primaryKey] !== nextProps.match.params[this.props.datamodel.primaryKey]){
            this.props.getObjectById(nextProps.authentication, nextProps.datamodel, nextProps.match.params[this.props.datamodel.primaryKey]);
        }
    }

    onFetchModel(datamodel){
        let url = `${APP_API_URL}${datamodel.model.path}`;
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

    renderForm() {
        if (this.props.object){
            return (
                <ObjectFormulary title="Formulary" className="content_centered" object={this.props.object} datamodel={this.props.datamodel} onSubmit={this.onSubmitForm} onFetchModel={this.onFetchModel}/>
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