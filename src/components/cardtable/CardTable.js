import React from 'react';
import CardRow from './CardRow';

import "./CardTable.css"

class CardTable extends React.Component {



    render(){
        return (
            <div className="row table_padding">
                {
                  this.props.objects.map((object, index) =>{
                      return  <CardRow titleKey="title" descriptionKey="description" object={object} onEdit={this.props.onEdit} onDelete={this.props.onDelete} key={index}/>
                  })
                }
            </div>
        );
    }


}

export default CardTable;