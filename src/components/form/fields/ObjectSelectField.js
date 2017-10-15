import React from 'react';

class ObjectSelectField extends React.Component{

    constructor(props){
        super(props);
        this.state = {options: []};
        this.onChange = this.onChange.bind(this);
    }

    componentWillMount(){
        if(this.props.options){
            if(this.props.options instanceof Promise){
                this.props.options.then((response) => {
                    this.setState({options: response.data});
                });
            }else{
                this.setState({options: this.props.options});
            }
        }
    }

    getOptionValues(objects){
        return objects.map((value, index) =>{
            if(value instanceof Object){
                if(!this.props.selectedOption)
                    return <option key={index} value={JSON.stringify(value)}>{value[this.props.datamodel.nameKey]}</option>;
                if(value[this.props.datamodel.primaryKey] !== this.props.selectedOption[this.props.datamodel.primaryKey])
                    return <option key={index} value={JSON.stringify(value)}>{value[this.props.datamodel.nameKey]}</option>;

            }else{
                return <option key={index} value={value}>{value.toString()}</option>;
            }
        });
    }

    renderOptions(){
        return this.getOptionValues(this.state.options);
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
            this.props.onChange(this.props.label, JSON.parse(e.target.value));
        }
    }

    getSelected(){
        if(this.props.datamodel && this.props.selectedOption)
            return <option value={this.props.selectedOption}>{this.props.selectedOption[this.props.datamodel.nameKey]}</option>
        return <option value=""></option>
    }

    render(){
        return (
            <div className="field">
                <label className="label">{this.props.label}</label>
                <div className="control">
                    <div className="select">
                        <select onChange={this.onChange}>
                            {this.getSelected()}
                            {this.renderOptions()}
                        </select>
                    </div>
                </div>
            </div>
        );

    }
}

export default ObjectSelectField;