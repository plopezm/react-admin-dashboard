import React from 'react'
import {connect} from 'react-redux';
import {refresh, logout} from '../../actions/JwtAuthenticationActions';
import jwtParser from 'jwt-decode';


export default function (Component) {
    class JwtAuthenticationWrapper extends React.Component {
        constructor(props){
            super(props);
            this.redirectLogin = this.redirectLogin.bind(this);
            this.checkTokenValidity = this.checkTokenValidity.bind(this);
        }

        checkTokenValidity(token){
            if(new Date().getTime()/1000 >= token.exp){
                return false;
            }
            return true;
        }

        componentWillMount(){
            if(!this.props.authentication.isAuthenticated){
                this.redirectLogin();
                return;
            }
            if(this.props.authentication.token === ''){
                this.redirectLogin();
                return;
            }
            var token = jwtParser(this.props.authentication.token);
            if(!this.checkTokenValidity(token)){
                this.props.logout();
                return;
            }
            this.props.refresh(this.props.authentication.type, this.props.authentication.token);
        }

        componentWillUpdate(nextProps){
            if(!nextProps.authentication.isAuthenticated){
                this.redirectLogin();
                return;
            }
            if(nextProps.authentication.token === '') {
                this.redirectLogin();
                return;
            }
            var token = jwtParser(nextProps.authentication.token);
            if(!this.checkTokenValidity(token)){
                this.props.logout();
                return;
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

    return connect(mapStateToProps, {refresh, logout})(JwtAuthenticationWrapper)
}