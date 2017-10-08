import React from 'react';

class ObjectSelectField extends React.Component{

    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    renderOptions(){
        if(this.props.options){
            return this.props.options.map((value, index) =>{
                if(value instanceof Object){
                    return <option key={index} value={value}>{value[this.props.optionsTitleKey]}</option>
                }else{
                    return <option key={index} value={value}>{value.toString()}</option>
                }
            });
        }
    }

    parseSelectValue(value){
        if(value === "true"){
            return true;
        }else if(value === "false"){
            return false;
        }else{
            return value;
        }
    }

    onChange(e){
        if(this.props.onChange){
            this.props.onChange(this.props.label, this.parseSelectValue(e.target.value));
        }
    }

    render(){
        return (
            <div className="field">
                <label className="label">{this.props.label}</label>
                <div className="control">
                    <div className="select">
                        <select onChange={this.onChange}>
                            {this.renderOptions()}
                        </select>
                    </div>
                </div>
            </div>
        );

    }
}

export default ObjectSelectField;