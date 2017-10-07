import React from 'react';

class ObjectSelectField extends React.Component{

    renderOptions(){
        if(this.props.options){
            return this.props.options.map((value, index) =>{
                return <option key={index} value={value}>{value[this.props.optionsTitleKey]}</option>
            });
        }
    }

    onChange(e){
        if(this.props.onChange){
            this.props.onChange(e);
        }
    }

    render(){
        return (
            <div className="field">
                <label className="label">{this.props.label}</label>
                <div className="control">
                    <div className="select">
                        <select onChange={this.props.onChange}>
                            {this.renderOptions()}
                        </select>
                    </div>
                </div>
            </div>
        );

    }
}

export default ObjectSelectField;