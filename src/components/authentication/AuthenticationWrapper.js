import React from 'react'
import {connect} from 'react-redux';


export default function (Component) {
    class AuthenticationWrapper extends React.Component {
        constructor(props){
            super(props);
            this.redirectLogin = this.redirectLogin.bind(this);
        }

        componentWillMount(){
            if(!this.props.authentication.isAuthenticated){
                this.redirectLogin();
            }
        }

        componentWillUpdate(nextProps){
            if(!nextProps.authentication.isAuthenticated){
                this.redirectLogin();
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