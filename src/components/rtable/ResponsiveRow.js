import React from 'react';
import './ResponsiveRow.css';

class ResponsiveRow extends React.Component {

    constructor(props){
        super(props);
        this.renderColumns = this.renderColumns.bind(this);
    }

    renderColumns(){
        if(this.props.object){
            return Object.keys(this.props.object).map((key) => {
                if (this.props.object[key] instanceof Object && this.props.datamodel.relations && this.props.datamodel.relations[key]){
                    return <td key={key} className="icon_pointer" onClick={() => this.props.onClick(this.props.object)}>{this.props.object[key][this.props.datamodel.relations[key].nameKey]}</td>;
                }else if(!(this.props.object[key] instanceof Function) && !(this.props.object[key] instanceof Object)) {
                    return <td key={key} className="icon_pointer" onClick={() => this.props.onClick(this.props.object)}>{this.props.object[key]}</td>;
                }
            });
        }
    }

    render(){
        return (
            <tr>
                {this.renderColumns()}
                <td className="config_column_size">
                    <span className="icon icon_pointer" onClick={() => {if(this.props.onDelete instanceof Function){this.props.onDelete(this.props.object)}}}><i className="fa fa-times" aria-hidden="true"></i></span>
                </td>
            </tr>
        );
    }
}

export default ResponsiveRow;