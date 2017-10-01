import React from 'react';
import CardRow from './CardRow';

import "./CardTable.css"

class CardTable extends React.Component {
    render(){
        return (
            <div className="row table_padding">
                <CardRow title="Table Name" description="Some quick example text to build on the card title and make up the bulk of the card's content."/>
                <CardRow title="Table Name" description="Some quick example text to build on the card title and make up the bulk of the card's content."/>
                <CardRow title="Table Name" description="Some quick example text to build on the card title and make up the bulk of the card's content."/>
                <CardRow title="Table Name" description="Some quick example text to build on the card title and make up the bulk of the card's content."/>
            </div>
        );
    }


}

export default CardTable;