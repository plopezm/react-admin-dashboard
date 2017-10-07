import React from 'react';

class ObjectInputField extends React.Component {

    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
        if(this.props.type){
            this.state = {type:this.props.type};
        }else{
            this.state = {type:"text"};
        }
    }

    onChange(e){
        if(this.props.onChange){
            this.props.onChange(this.props.label, e.target.value);
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

    renderInput(){
        if(this.props.type === 'number')
            return <input className={`input ${this.props.inputClass}`} type={this.state.type}  placeholder={this.props.placeholder} value={this.props.value}  onChange={this.onChange} onKeyUp={this.onChange} onKeyDown={this.onChange} onMouseUp={this.onChange} onMouseDown={this.onChange}/>
        else
            return <input className={`input ${this.props.inputClass}`} type={this.state.type}  placeholder={this.props.placeholder} value={this.props.value}  onChange={this.onChange}/>
    }

    render(){
        return(
            <div className="field">
                <label className="label">{this.props.label}</label>
                <div className={`control ${this.hasIconLeft()} ${this.hasIconRight()}`}>
                    {this.renderInput()}
                    {this.showInputIconLeft()}
                    {this.showInputIconRight()}
                </div>
            </div>
        );

    }
}

export default ObjectInputField;