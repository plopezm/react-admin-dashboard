import React from 'react';
import ObjectInputField from "./ObjectInputField";
import ObjectSelectField from "./ObjectSelectField";


class ObjectFormulary extends React.Component {
    onPushSubmit(e){
        e.preventDefault();
    }

    render() {
        return (
            <div className={this.props.className}>
                <form onSubmit={this.onPushSubmit}>
                    <ObjectInputField label="Name" placeholder="Text input"/>
                    <ObjectInputField label="Username" placeholder="UserExample" inputIconLeft="fa fa-user"/>
                    <ObjectInputField label="Email" placeholder="Email input" inputClass="is-danger" inputIconLeft="fa fa-envelope" inputIconRight="fa fa-warning"/>
                    <ObjectSelectField label="Subject" options={[{"title":"Select Subject..."}, {"title": "Subject1"}, {"title":"Subject2"}]} optionsTitleKey="title" onChange={(e) => console.log("Value changed: ",e.target.value)}/>

                    <div className="field">
                        <label className="label">Message</label>
                        <div className="control">
                            <textarea className="textarea" placeholder="Textarea"></textarea>
                        </div>
                    </div>

                    <div className="field">
                        <div className="control">
                            <label className="checkbox">
                                <input type="checkbox"/>
                                I agree to the <a href="#">terms and conditions</a>
                            </label>
                        </div>
                    </div>

                    <div className="field">
                        <div className="control">
                            <label className="radio">
                                <input type="radio" name="question"/>
                                Yes
                            </label>
                            <label className="radio">
                                <input type="radio" name="question"/>
                                No
                            </label>
                        </div>
                    </div>

                    <div className="field is-grouped">
                        <div className="control">
                            <input type="submit" className="button is-primary" value="Submit"/>
                        </div>
                        <div className="control">
                            <button className="button is-link">Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }

}

export default ObjectFormulary;