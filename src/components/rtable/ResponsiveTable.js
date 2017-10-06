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
                return <th key={key}>{key}</th>
            });
        }
    }

    renderValues(){
        if (this.props.objects && this.props.objects.length > 0) {
            return this.props.objects.map((object, index) => {
                return Object.keys(object).map((key) => {
                    return <ResponsiveRow object={object}/>
                });
            });
        }
    }

    render(){
        return (
            <table className={`table ${this.props.className}`}>
                <thead>
                <tr>
                    {this.renderHeaders()}
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