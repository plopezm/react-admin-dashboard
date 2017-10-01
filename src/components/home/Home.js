import React from 'react';
import {connect} from 'react-redux';
import {logout} from '../../actions/AuthenticationActions'
import isAuthenticated from "../authentication/AuthenticationWrapper";

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};

        this.performLogout = this.performLogout.bind(this);
    }

    performLogout(){
        this.props.logout();
    }

    render(){
        // console.log(this.context);
        return (
            <div>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="#">Logo</a>
                        </div>
                        <div className="collapse navbar-collapse" id="myNavbar">
                            <ul className="nav navbar-nav">
                                <li className="active"><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Projects</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="container-fluid text-center">
                    <div className="row content">
                        <div className="col-sm-2 sidenav">
                            <p><button className="btn btn-danger" onClick={this.performLogout}>Logout</button></p>
                        </div>
                        <div className="col-sm-8 text-left">
                            <h1>Welcome</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <hr/>
                                <h3>Test</h3>
                                <p>Lorem ipsum...</p>
                        </div>
                        <div className="col-sm-2 sidenav">
                            <div className="well">
                                <p>ADS</p>
                            </div>
                            <div className="well">
                                <p>ADS</p>
                            </div>
                        </div>
                    </div>
                </div>

                <footer className="container-fluid text-center">
                    <p>Footer Text</p>
                </footer>
            </div>
        );
    }
}

export default isAuthenticated(connect(null, { logout })(Home));