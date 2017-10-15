import React from 'react'
import {connect} from 'react-redux';
import jwtParser from 'jwt-decode';


export default function (Component) {
    class AuthenticationWrapper extends React.Component {
        constructor(props){
            super(props);
            this.redirectLogin = this.redirectLogin.bind(this);
        }

        componentWillMount(){
            if(!this.props.authentication.isAuthenticated){
                this.redirectLogin();
                return;
            }
            if(this.props.authentication.token !== ''){
                var decoded = jwtParser(this.props.authentication.token);
                console.log(decoded);
            }
        }

        componentWillUpdate(nextProps){
            if(!nextProps.authentication.isAuthenticated){
                this.redirectLogin();
                return;
            }
            if(nextProps.authentication.token !== '') {
                var decoded = jwtParser(nextProps.authentication.token);
                console.log(decoded);
            }
        }

        redirectLogin(){
            this.props.history.push("/");
        }

        render(){
            return <Component {...this.props} />
        }
    }
    
    function mapStateToProps(state) {
        return {authentication: state.authentication};
    }

    return connect(mapStateToProps)(AuthenticationWrapper)
}