import React from 'react';
import {connect} from 'react-redux';
import {logout} from '../../actions/AuthenticationActions'
import isAuthenticated from "../authentication/AuthenticationWrapper";

import "./Home.css"

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
                <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand" href="#">LoginTemplate</a>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item nav-link active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item nav-link">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                        </ul>

                        <span className="navbar-text">
                            <a className="nav-link">User Online: Test</a>
                        </span>
                        <span className="navbar-text">
                            <a className="nav-link cursor_pointer" onClick={this.performLogout}><span className="glyphicons glyphicons-log-out">Logout</span></a>
                        </span>
                    </div>
                </nav>

            </div>
        );
    }
}

export default isAuthenticated(connect(null, { logout })(Home));