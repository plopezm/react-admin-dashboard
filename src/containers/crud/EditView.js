import React from 'react';
import {connect} from 'react-redux';
import authenticate from '../../components/authentication/JwtAuthenticationWrapper';
import {getObjectById, updateObject} from "../../actions/DataModelsActions";
import NavBar from '../../components/navbar/NavBar';
import ObjectFormulary from "../../components/form/ObjectFormulary";
import axios from 'axios';

class EditView extends React.Component{

    constructor(props){
        super(props);
        this.renderForm = this.renderForm.bind(this);
        this.onFetchModel = this.onFetchModel.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
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
        this.props.updateObject(this.props.authentication, this.props.datamodel, object);
        this.props.history.push(this.props.datamodel.path);
    }

    renderForm() {
        if (this.props.object){
            return (
                <ObjectFormulary title="Edit" className="container margin-top-enabled" object={this.props.object} datamodel={this.props.datamodel} onSubmit={this.onSubmit} onFetchModel={this.onFetchModel}/>
            );
        }else{
            return <p>Object not set as props</p>
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

export default authenticate(connect(mapStateToProps, {getObjectById, updateObject})(EditView));