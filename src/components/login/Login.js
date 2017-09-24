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
            <div className="loginBox card">
                <div className="mx-auto loginTitleMargin">
                    <h1 className="center-block">Gowa</h1>
                </div>
                <div>
                    <form className="container" onSubmit={this.onPushSubmit}>
                        <hr/>
                        <div className="form-group">
                            <input className="form-control" type="text" onChange={this.handleUser} placeholder="Username" />
                        </div>
                        <div className="form-group">
                            <input className="form-control" onChange={this.handlePassword} type="password" placeholder="Password"/>
                        </div>
                        <div className="form-group">
                                <input type="submit" className="btn btn-primary" value="Sign in" />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log("New props: ",state)
    return { authentication: state.authentication };
}

export default connect(mapStateToProps, { authenticate })(Login);