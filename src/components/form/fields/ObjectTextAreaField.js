import React from 'react';
import Parser from 'html-react-parser';

class ObjectTextAreaField extends React.Component {
    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e){
        if(this.props.onChange){
            this.props.onChange(this.props.label, e.target.value);
        }
    }

    render(){
        return(
            <div className="field">
                <label className="label">{this.props.label}</label>
                <div className="control">
                    <textarea className="textarea" placeholder={this.props.placeholder} onChange={this.onChange} value={Parser(this.props.value)}></textarea>
                </div>
            </div>
        );

    }
}

export default ObjectTextAreaField;