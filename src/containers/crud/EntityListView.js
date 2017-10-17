import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import authenticate from '../../components/authentication/JwtAuthenticationWrapper';
import {getAll, deleteObjectById} from "../../actions/DataModelsActions";
import NavBar from '../../components/navbar/NavBar';
import ResponsiveTable from "../../components/rtable/ResponsiveTable";

class EntityListView extends React.Component {
    static contextTypes = {
        router: PropTypes.object.isRequired
    };

    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);
        this.onCreateNewObject = this.onCreateNewObject.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }

    componentWillMount(){
        this.props.getAll(this.props.authentication, this.props.datamodel);
    }

    onClick(object){
        // Shows edit formulary
        this.props.history.push(`${this.props.datamodel.path}/${object[this.props.datamodel.primaryKey]}`)
    }

    onCreateNewObject(object){
        this.props.history.push(`${this.props.datamodel.path}/create`)
    }

    onDelete(object){
        this.props.deleteObjectById(this.props.authentication, this.props.datamodel, object[this.props.datamodel.primaryKey])
    }

    render(){
        return (
            <div>
                <NavBar title="ExampleApp" logo="/logo.png"/>
                <ResponsiveTable objects={this.props.objects} datamodel={this.props.datamodel} className="is-striped is-narrow is-fullwidth" onClick={this.onClick} onCreateNewObject={this.onCreateNewObject} onDelete={this.onDelete}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        objects: state.datamodels.data
    };
}

export default authenticate(connect(mapStateToProps, {getAll, deleteObjectById})(EntityListView));