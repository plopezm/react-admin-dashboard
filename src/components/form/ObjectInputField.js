import React from 'react';

class ObjectInputField extends React.Component {

    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e){
        if(this.props.onChange){
            this.props.onChange(e);
        }
    }

    showInputIconLeft(){
        if(this.props.inputIconLeft){
            return(
                <span className="icon is-small is-left">
                    <i className={this.props.inputIconLeft}></i>
                </span>
            );
        }
    }

    showInputIconRight(){
        if(this.props.inputIconRight){
            return(
                <span className="icon is-small is-right">
                    <i className={this.props.inputIconRight}></i>
                </span>
            );
        }
    }

    hasIconLeft(){
        if(this.props.inputIconLeft){
            return 'has-icons-left';
        }
        return '';
    }

    hasIconRight(){
        if(this.props.inputIconRight){
            return 'has-icons-right';
        }
        return '';
    }

    render(){
        return(
            <div className="field">
                <label className="label">{this.props.label}</label>
                <div className={`control ${this.hasIconLeft()} ${this.hasIconRight()}`}>
                    <input className={`input ${this.props.inputClass}`} type="text"  placeholder={this.props.placeholder} value={this.props.value}  onChange={this.onChange}/>
                    {this.showInputIconLeft()}
                    {this.showInputIconRight()}
                </div>
            </div>
        );

    }
}

export default ObjectInputField;