import React from 'react';


class CardRow extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="card table_row_size table_row_margin table_inline_block">
                <header className="card-header">
                    <p className="card-header-title is-centered">
                        {this.props.title}
                    </p>
                </header>
                <div className="card-content">
                    <div className="content">
                        {this.props.description}
                    </div>
                </div>
                <footer className="card-footer">
                    <a className="card-footer-item" onClick={() => {if(this.props.onEdit instanceof Function){this.props.onEdit(this.props)}}}>Edit</a>
                    <a className="card-footer-item" onClick={() => {if(this.props.onDelete instanceof Function){this.props.onDelete(this.props)}}}>Delete</a>
                </footer>
            </div>
        );
    }
}

export default CardRow;