import React from 'react';
import {connect} from 'react-redux';
import {logout} from '../../actions/JwtAuthenticationActions'

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
                <h1  href="#">{this.props.title}</h1>
            );
        }else{
            return(
               <img src={this.props.logo} alt={this.props.title} width="45" height="28"/>
            );
        }
    }

    render(){
        return (
            <header>
                <nav className="navbar is-light" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="#">
                            {this.renderBrand()}
                        </a>
                        <button className="button navbar-burger burger" data-target="navMenu">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                    <div className="navbar-menu" id="navMenu">
                        <div className="navbar-start">
                            <a className="navbar-item is-active" href="#">
                                Home
                            </a>
                            <a className="navbar-item" href="#">
                                Contact
                            </a>
                            <a className="navbar-item is-hidden-desktop"  onClick={this.performLogout}>
                                Logout
                            </a>
                        </div>
                    </div>
                    <div className="navbar-menu">
                        <div className="navbar-end">
                            <span className="navbar-item">
                                <label>User Online: {this.props.username}</label>
                            </span>
                            <span className="navbar-item">
                                <a className="button is-primary" onClick={this.performLogout}>Logout</a>
                            </span>
                        </div>
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