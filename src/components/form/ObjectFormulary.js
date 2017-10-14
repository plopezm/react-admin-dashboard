import React from 'react';
import axios from 'axios';
import ObjectInputField from "./fields/ObjectInputField";
import ObjectSelectField from "./fields/ObjectSelectField";
import ObjectTextAreaField from "./fields/ObjectTextAreaField";
import ObjectCheckboxField from "./fields/ObjectCheckboxField";
import {APP_API_URL} from "../../configurations/Config";


class ObjectFormulary extends React.Component {
    constructor(props){
        super(props);
        this.state={object: this.props.object === undefined ? {} : this.props.object, fetchedModels:{}};
        this.onSubmit = this.onSubmit.bind(this);
        this.onCancel = this.onCancel.bind(this);
        this.onChange = this.onChange.bind(this);
        this.fetchModel = this.fetchModel.bind(this);
        this.renderFieldsFromStateObject = this.renderFieldsFromStateObject.bind(this);
    }

    componentWillReceiveProps(nextProps){
        this.setState({object: nextProps.object});
    }

    onSubmit(e){
        e.preventDefault();
        if(this.props.onSubmit){
            this.props.onSubmit(this.state.object);
        }
    }

    onCancel(){
        if(this.props.onCancel) {
            this.props.onCancel();
        }
    }

    onChange(key, value){
        console.log("Entro");
        let newObject = Object.assign({} , this.state.object);
        newObject[key] = value;
        this.setState({object:newObject});
    }

    fetchModel(datamodel){
        if(this.props.onFetchModel && datamodel !== undefined)
            return this.props.onFetchModel(datamodel);
    }

    renderFieldsFromStateObject(){
        let object = this.state.object;
        // if(object){
        //     return Object.keys(object).map((key) => {
        //         if(typeof object[key] === 'string'){
        //             if(object[key].length > 40){
        //                 return <ObjectTextAreaField key={key} label={key} value={object[key]} onChange={this.onChange}/>
        //             }else{
        //                 return <ObjectInputField key={key} label={key} value={object[key]} onChange={this.onChange}/>
        //             }
        //         }else if(typeof object[key] === 'number'){
        //             return <ObjectInputField key={key} label={key} type="number" value={object[key]} onChange={this.onChange}/>
        //         }else if(typeof object[key] === 'boolean'){
        //             return <ObjectSelectField key={key} label={key} value={object[key]} opwations={[true, false]} optionsTitleKey="" onChange={this.onChange}/>
        //         }else if(object[key] instanceof Object){
        //             if(this.props.datamodel) {
        //                 return <ObjectSelectField key={key} label={key} onFetchModel={this.props.onFetchModel} selectedOption={object[key]}
        //                                               options={this.fetchModel(this.props.datamodel.relations === undefined ? undefined : this.props.datamodel.relations[key])}
        //                                               onChange={this.onChange} datamodel={this.props.datamodel.relations === undefined ? undefined : this.props.datamodel.relations[key]}/>
        //             }else {
        //                 return <ObjectTextAreaField key={key} label={key} value={JSON.stringify(object[key])} onChange={this.onChange}/>
        //             }
        //         }
        //     });
        // }

        return Object.keys(this.props.datamodel.composition).map((key) => {
            if(this.props.datamodel.composition[key] instanceof Object){
                if(this.state.fetchedModels[key] === undefined){
                    this.state.fetchedModels[key] = this.fetchModel(this.props.datamodel.relations === undefined ? undefined : this.props.datamodel.relations[key]);
                }
                return <ObjectSelectField key={key} label={key} onFetchModel={this.props.onFetchModel} selectedOption={object[key]}
                                          options={this.state.fetchedModels[key]}
                                          onChange={this.onChange} datamodel={this.props.datamodel.relations === undefined ? undefined : this.props.datamodel.relations[key]}/>
            }else if(this.props.datamodel.composition[key] === "string"){
                return <ObjectInputField key={key} label={key} value={object[key]} onChange={this.onChange}/>
            }else if(this.props.datamodel.composition[key] === "password"){
                return <ObjectInputField key={key} type="password" label={key} value={object[key]} onChange={this.onChange}/>
            }
        });

    }

    render() {
        return (
            <div className={`${this.props.className}`}>
                <h1 className="title">{`${this.props.title} ${this.props.datamodel.title}`}</h1>
                <form onSubmit={this.onSubmit}>
                    {this.renderFieldsFromStateObject()}
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