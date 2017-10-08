import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import authenticate from '../../components/authentication/AuthenticationWrapper';
import {getAll} from "../../actions/DataModelsActions";
import NavBar from '../../components/navbar/NavBar';
import ResponsiveTable from "../../components/rtable/ResponsiveTable";

class EntityView extends React.Component {
    static contextTypes = {
        router: PropTypes.object.isRequired
    };

    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    componentWillMount(){
        this.props.getAll(this.props.authentication, this.props.datamodel);
    }

    onClick(object){
        this.props.history.push(`${this.props.datamodel.path}/${object[this.props.datamodel.primaryKey]}`)
    }

    onEdit(object){
        console.log("EDITING: ", object);
    }

    onDelete(object){
        console.log("DELETING: ", object);
    }

    render(){
        return (
            <div>
                <NavBar title="ExampleApp" logo="/logo.png"/>
                <ResponsiveTable objects={this.props.objects} className="is-striped is-narrow content_centered" onClick={this.onClick} onEdit={this.onEdit} onDelete={this.onDelete}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        objects: state.datamodels.data
    };
}

export default authenticate(connect(mapStateToProps, {getAll})(EntityView));