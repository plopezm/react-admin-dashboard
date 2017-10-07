import React from 'react';
import Parser from 'html-react-parser';

class ObjectCheckboxField extends React.Component {

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
                <div className="control">
                    <label className="checkbox">
                        <input type="checkbox" onClick={this.onChange} />
                        {Parser(this.props.label)}
                    </label>
                </div>
            </div>
        );

    }
}

export default ObjectCheckboxField;