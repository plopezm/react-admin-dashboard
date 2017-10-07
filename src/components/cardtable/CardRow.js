import React from 'react';


class CardRow extends React.Component {

    constructor(props){
        super(props);
        this.renderShow = this.renderShow.bind(this);
        this.renderEdit = this.renderEdit.bind(this);
        this.renderDelete = this.renderDelete.bind(this);
    }

    renderShow(){
        if (this.props.onShow && this.props.onShow instanceof Function){
            return <a className="card-footer-item" onClick={() => this.props.onShow(this.props.object)}>Show</a>;
        }
    }

    renderEdit(){
        if (this.props.onEdit && this.props.onEdit instanceof Function){
            return <a className="card-footer-item" onClick={() => this.props.onEdit(this.props.object)}>Edit</a>;
        }
    }

    renderDelete(){
        if (this.props.onDelete && this.props.onDelete instanceof Function){
            return <a className="card-footer-item" onClick={() => this.props.onDelete(this.props.object)}>Delete</a>
        }
    }

    render(){
        return (
            <div className="card table_row_size table_row_margin table_inline_block">
                <header className="card-header">
                    <p className="card-header-title is-centered">
                        {this.props.object[this.props.titleKey]}
                    </p>
                </header>
                <div className="card-content">
                    <div className="content">
                        {this.props.object[this.props.descriptionKey]}
                    </div>
                </div>
                <footer className="card-footer">
                    {this.renderEdit()}
                    {this.renderShow()}
                    {this.renderDelete()}
                </footer>
            </div>
        );
    }
}

export default CardRow;