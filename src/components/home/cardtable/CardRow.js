import React from 'react';


class CardRow extends React.Component {
    render(){
        return (
            <div className="card table_row_size table_row_margin table_row_shadow card-delay-margin">
                <img className="card-img-top table_row_image_image" src="/logo.png" alt="Card image cap"/>
                <hr/>
                <div className="card-block">
                    <h4 className="card-title">{this.props.title}</h4>
                    <p className="card-text">{this.props.description}</p>
                    <a href="/home" className="btn btn-primary">Go</a>
                </div>
            </div>
        );
    }
}

export default CardRow;