import React from 'react';
import './Login.scss';

import { AuthContext } from '../../context/auth';

import { Redirect } from 'react-router-dom';

import LoginService from '../../services/customer/login'

class Login extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }    

    handleChange_email = ({target: {value}}) => {
        this.setState({
            email: value
        })
    }
    handleChange_password = ({target: {value}}) => {
        this.setState({
            password: value
        })
    }

    handleConnect = (user) => {
        LoginService.login(this.state.email, this.state.password)
        .then(
            (res) => {
                if(res.data.statut === true){

                    localStorage.setItem('token', res.data.token);

                    user.setUid(res.data.user.uid);
                    localStorage.setItem('uid', res.data.user.uid);

                    user.setFirstname(res.data.user.firstname);
                    localStorage.setItem('firstname', res.data.user.firstname);

                    user.setLastname(res.data.user.lastname);
                    localStorage.setItem('lastname', res.data.user.lastname);

                    user.setEmail(res.data.user.email);
                    localStorage.setItem('email', res.data.user.email);

                    user.setPhoneNumber(res.data.user.phone_number);
                    localStorage.setItem('phone_number', res.data.user.phone_number);

                }
            }
        )
    }

    render(){

        let user = this.context;

        if(user.uid > 0){
            return (
                <Redirect to="/customers/bookings-log" />
            )
        }else{
            return (
                <div class="main content">
                    <div className="Form Form_login">
                        <h3>Please login to access Customer Dashbord</h3>
                        <div className="_form form_email error">
                            <input type="text" placeholder="Email *" onChange={this.handleChange_email} />
                        </div>
                        <div className="_form form_password">
                            <input type="password" placeholder="Password *" onChange={this.handleChange_password} />
                        </div>
                        <div className="bloc">
                            <button className="action" onClick={() => this.handleConnect(user)}>Connexion</button>
                        </div>
                    </div>
                </div>
            )
        }   
        
    }
}

Login.contextType = AuthContext;

export default Login;