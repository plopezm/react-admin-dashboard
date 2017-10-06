import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { authenticate } from "../../actions/AuthenticationActions";

import './Login.css'

class Login extends React.Component {
    static contextTypes = {
        router: PropTypes.object.isRequired
    };

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
        return (
            <div className="loginBox card">
                <div className="card-header">
                    <div className="centerized top-bottom-separation">
                        <h1 className="title">MyApp</h1>
                    </div>
                </div>
                <div className="card-content">
                    <form onSubmit={this.onPushSubmit}>
                        <div className="field">
                            <label className="label">Username</label>
                            <input className="input" type="text" onChange={this.handleUser} placeholder="example@domain.com" />
                        </div>
                        <div className="field">
                            <label className="label">Password</label>
                            <input className="input" onChange={this.handlePassword} type="password" placeholder="******"/>
                        </div>
                        <div className="field">
                                <input type="submit" className="button" value="Sign in" />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { authentication: state.authentication };
}

export default connect(mapStateToProps, { authenticate })(Login);