import React from 'react';


class CardRow extends React.Component {

    render(){
        return (
            <div className="card table_row_size table_row_margin table_row_shadow">
                <img className="card-img-top" src="..." alt="Card image cap" />
                <div className="card-block">
                    <h4 className="card-title">Card title</h4>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/home" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        );
    }


}

export default CardRow;