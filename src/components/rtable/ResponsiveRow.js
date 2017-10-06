import React from 'react';

class ResponsiveRow extends React.Component {

    constructor(props){
        super(props);
    }

    renderRow(){
        if(this.props.object)
            return Object.keys(this.props.object).map((key) => {
                return <td key={key}>{this.props.object[key]}</td>
            });
    }

    render(){
        return (
            <tr>
                {this.renderRow()}
            </tr>
        );
    }
}

export default ResponsiveRow;