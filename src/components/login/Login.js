import React from 'react';
import { connect } from 'react-redux';
import { authenticate } from "../../actions/AuthenticationActions";

import './Login.css'

class Login extends React.Component {

    constructor(props){
        super(props);
        this.state = {};

        this.handleUser = this.handleUser.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.onPushSubmit = this.onPushSubmit.bind(this)
    }

    componentWillMount() {
        // Called the first time the component is loaded right before the component is added to the page
        if(this.props.authentication.isAuthenticated){
            this.props.history.push('/home');
        }
    }

    componentWillReceiveProps(nextProps) {
        // Called when the props provided to the component are changed
        if(nextProps.authentication.isAuthenticated){
            this.props.history.push('/home');
        }
    }

    handleUser(e){
        this.setState({user: e.target.value});
    }

    handlePassword(e){
        this.setState({password: e.target.value});
    }

    onPushSubmit(e){
        e.preventDefault();
        this.props.authenticate(this.state.user, this.state.password);
    }

    render() {
        // console.log(this.context);
        return (
            <div className="col88 fullHeight card_4 padding16 loginBoxMargin size">
                <header>
                    <h1 className="aligncenter text_wide noMargin">Gowa</h1>
                </header>
                <section>
                    <form className="container wrap input_group" onSubmit={this.onPushSubmit}>

                        <hr/>
                        <input className="col100" type="text" onChange={this.handleUser} placeholder="Username" />
                        <input className="col100 input_control" onChange={this.handlePassword} type="password" placeholder="Password"/>
                        <div className="fullWidth">
                            <input type="submit" className="fullWidth button_green" value="Sign in" />
                        </div>
                    </form>
                </section>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log("New props: ",state)
    return { authentication: state.authentication };
}

export default connect(mapStateToProps, { authenticate })(Login);