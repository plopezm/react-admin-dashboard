import React from 'react';
import ResponsiveRow from "./ResponsiveRow";
import "./ResponsiveTable.css";

class ResponsiveTable extends React.Component {
    constructor(props){
        super(props);
        this.createNewObject = this.createNewObject.bind(this);
    }

    renderHeaders() {
        if (this.props.objects && this.props.objects.length > 0) {
            let object = this.props.objects[0];
            return Object.keys(object).map((key) => {
                if(!(object[key] instanceof Function)) {
                    return <th key={key}>{key}</th>
                }
            });
        }
    }

    renderValues(){
        if (this.props.objects && this.props.objects.length > 0) {
            return this.props.objects.map((object, index) => {
                return <ResponsiveRow key={index} object={object} datamodel={this.props.datamodel} onClick={this.props.onClick} onDelete={this.props.onDelete}/>
            });
        }
    }

    createNewObject(){
        if(this.props.onCreateNewObject){
            this.props.onCreateNewObject(this.props.datamodel);
        }
    }

    render(){
        return (
            <div className="container margin-top-enabled">
                <div className="card columns">
                    <div className="column is-marginless">
                        <button className="button" onClick={this.createNewObject}><i className="fa fa-plus"/></button>
                    </div>
                </div>
                <div className="columns">
                    <div className="column">
                        <table className={`table ${this.props.className}`}>
                            <thead>
                            <tr>
                                {this.renderHeaders()}
                                <td>
                                    <span className="icon">
                                        <i className="fa fa-cog" aria-hidden="true"></i>
                                    </span>
                                </td>
                            </tr>
                            </thead>
                            <tbody>
                            {this.renderValues()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }

}

export default ResponsiveTable;