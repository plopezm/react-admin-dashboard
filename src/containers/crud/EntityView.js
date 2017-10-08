import React from 'react';
import {connect} from 'react-redux';
import authenticate from '../../components/authentication/AuthenticationWrapper';
import {getAll} from "../../actions/DataModelsActions";
import NavBar from '../../components/navbar/NavBar';
import ResponsiveTable from "../../components/rtable/ResponsiveTable";

class EntityView extends React.Component {

    constructor(props){
        super(props);
        console.log("Received props: ", props);
    }

    componentWillMount(){
        this.props.getAll(this.props.authentication, this.props.datamodel);
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
                <ResponsiveTable objects={this.props.objects} className="is-striped is-narrow content_centered" onEdit={this.onEdit} onDelete={this.onDelete}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log("MappedState: ",state);
    return {
        objects: state.datamodels.data
    };
}

export default authenticate(connect(mapStateToProps, {getAll})(EntityView));