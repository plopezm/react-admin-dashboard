import React from 'react';

class ObjectTextAreaField extends React.Component {

    onChange(e){
        if(!this.props.onChange){
            this.props.onChange(e);
        }
    }

    render(){
        return(
            <div className="field">
                <label className="label">{this.props.label}</label>
                <div className="control">
                    <textarea className="textarea" placeholder={this.props.placeholder} onChange={this.onChange}>{this.props.value}</textarea>
                </div>
            </div>
        );

    }
}

export default ObjectTextAreaField;