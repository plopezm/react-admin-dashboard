import React from 'react';
import CardRow from './CardRow';

import "./CardTable.css"

class CardTable extends React.Component {
    constructor(props){
        super(props);
        this.renderCards = this.renderCards.bind(this);
    }

    renderCards(){
        let listeners = {
            onShow: this.props.onShow,
            onEdit: this.props.onEdit,
            onDelete: this.props.onDelete
        };

        return this.props.objects.map((object, index) =>{
            return  <CardRow key={index} titleKey="title" descriptionKey="description" object={object}  {...listeners}/>
        });
    }

    render(){
        return (
            <div className="row table_padding">
                {this.renderCards()}
            </div>
        );
    }


}

export default CardTable;