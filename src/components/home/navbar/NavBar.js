import React from 'react';
import {connect} from 'react-redux';
import {logout} from '../../../actions/AuthenticationActions'

class NavBar extends React.Component {

    constructor(props){
        super(props);
        this.performLogout = this.performLogout.bind(this);
    }

    performLogout(){
        this.props.logout();
    }

    renderBrand(){
        if(this.props.logo === undefined){
            return (
                <span className="navbar-brand" href="#">{this.props.title}</span>
            );
        }else{
            return(
               <img src={this.props.logo} alt={this.props.title} width="70" height="50"/>
            );
        }
    }

    render(){
        return (
            <header>
                <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {this.renderBrand()}
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item nav-link active">
                                <a className="nav-link" href="/home">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item nav-link">
                                <a className="nav-link" href="/contact">Contact</a>
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

            </header>
        );
    }


}

function mapStateToProps(state) {
    return {authentication: state.authentication};
}

export default connect(mapStateToProps, { logout })(NavBar);