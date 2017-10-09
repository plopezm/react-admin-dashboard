import React from 'react';
import ObjectInputField from "./fields/ObjectInputField";
import ObjectSelectField from "./fields/ObjectSelectField";
import ObjectTextAreaField from "./fields/ObjectTextAreaField";
import ObjectCheckboxField from "./fields/ObjectCheckboxField";


class ObjectFormulary extends React.Component {
    constructor(props){
        super(props);
        this.state={object: this.props.object};
        this.onSubmit = this.onSubmit.bind(this);
        this.onCancel = this.onCancel.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    componentWillMount(){

    }

    onSubmit(e){
        e.preventDefault();
        if(this.props.onSubmit){
            this.props.onSubmit(this.state.object);
        }
    }

    onCancel(){
        if(this.props.onCancel)
            this.props.onCancel();
    }

    onChange(key, value){
        let newObject = Object.assign({} , this.state.object);
        newObject[key] = value;
        this.setState({object:newObject});
    }

    renderFieldsFromObject(object){
        if(!object)
            return <div>No object found</div>

        return Object.keys(object).map((key) => {
            if(typeof object[key] === 'string'){
                if(object[key].length > 40){
                    return <ObjectTextAreaField key={key} label={key} value={object[key]} onChange={this.onChange}/>
                }else{
                    return <ObjectInputField key={key} label={key} value={object[key]} onChange={this.onChange}/>
                }
            }else if(typeof object[key] === 'number'){
                return <ObjectInputField key={key} label={key} type="number" value={object[key]} onChange={this.onChange}/>
            }else if(typeof object[key] === 'boolean'){
                return <ObjectSelectField key={key} label={key} value={object[key]} options={[true, false]} optionsTitleKey="" onChange={this.onChange}/>
            }else if(object[key] instanceof Object){
                if(this.props.datamodel) {
                    return <ObjectSelectField key={key} label={key} type="number"
                                              options={[object[key][this.props.datamodel.nameKey]]}
                                              onChange={this.onChange} datamodel={this.props.datamodel.relations[key]}/>
                }else {
                    return <ObjectTextAreaField key={key} label={key} value={JSON.stringify(object[key])} onChange={this.onChange}/>
                }
            }
        });

    }

    render() {
        return (
            <div className={this.props.className}>
                <h1 className="title">{this.props.name}</h1>
                <form onSubmit={this.onSubmit}>
                    {this.renderFieldsFromObject(this.state.object)}
                    <div className="field is-grouped">
                        <div className="control">
                            <input type="submit" className="button is-primary" value="Submit"/>
                        </div>
                        <div className="control">
                            <button className="button is-link" onClick={this.onCancel}>Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }

}

export default ObjectFormulary;