import React from 'react';
import './ResponsiveRow.css';

class ResponsiveRow extends React.Component {
    renderColumns(){
        if(this.props.object){
            return Object.keys(this.props.object).map((key) => {
                if (this.props.object[key] instanceof Object){
                    return <td key={key} className="icon_pointer" onClick={() => this.props.onClick(this.props.object)}>{this.props.object[key][this.props.datamodel.nameKey]}</td>;
                }else if(!(this.props.object[key] instanceof Function)) {
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
                    <span className="icon icon_pointer" onClick={() => {if(this.props.onEdit instanceof Function){this.props.onEdit(this.props.object)}}}><i className="fa fa-pencil-square-o" aria-hidden="true"></i></span>
                    <span className="icon icon_pointer" onClick={() => {if(this.props.onDelete instanceof Function){this.props.onDelete(this.props.object)}}}><i className="fa fa-times" aria-hidden="true"></i></span>
                </td>
            </tr>
        );
    }
}

export default ResponsiveRow;