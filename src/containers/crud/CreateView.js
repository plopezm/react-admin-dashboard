import React from 'react';
import {connect} from 'react-redux';
import authenticate from '../../components/authentication/AuthenticationWrapper';
import {getObjectById} from "../../actions/DataModelsActions";
import NavBar from '../../components/navbar/NavBar';
import ObjectFormulary from "../../components/form/ObjectFormulary";
import axios from 'axios';
import {APP_API_URL} from "../../configurations/Config";

class CreateView extends React.Component{

    constructor(props){
        super(props);
        this.renderForm = this.renderForm.bind(this);
        this.onFetchModel = this.onFetchModel.bind(this);
    }

    componentWillMount(){
    }

    componentWillReceiveProps(nextProps){
    }

    onFetchModel(datamodel){
        let url = `${APP_API_URL}${datamodel.path}`;
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


    }

    renderForm() {
        if (this.props.datamodel){
            return (
                <ObjectFormulary title="Create" className="container" datamodel={this.props.datamodel} onSubmit={this.onSubmit} onFetchModel={this.onFetchModel}/>
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

export default authenticate(connect(mapStateToProps, {getObjectById})(CreateView));