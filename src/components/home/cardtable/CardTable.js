import React from 'react';
import CardRow from './CardRow';

import "./CardTable.css"

class CardTable extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="row table_padding">
                <CardRow/>
                <CardRow/>
                <CardRow/>
                <CardRow/>
            </div>
        );
    }


}

export default CardTable;