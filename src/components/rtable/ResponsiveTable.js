import React from 'react';
import ResponsiveRow from "./ResponsiveRow";

class ResponsiveTable extends React.Component {

    constructor(props){
        super(props);
    }

    renderHeaders() {
        if (this.props.objects && this.props.objects.length > 0) {
            let object = this.props.objects[0];
            return Object.keys(object).map((key) => {
                if(!(object[key] instanceof Function))
                    return <th key={key}>{key}</th>
            });
        }
    }

    renderValues(){
        if (this.props.objects && this.props.objects.length > 0) {
            return this.props.objects.map((object, index) => {
                return <ResponsiveRow key={index} object={object} onEdit={this.props.onEdit} onDelete={this.props.onDelete}/>
            });
        }
    }

    render(){
        return (
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
        );
    }

}

export default ResponsiveTable;