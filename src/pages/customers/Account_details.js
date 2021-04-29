import React from 'react';
import './Account_details.scss';

import Welcoming from './components/Welcoming';
import Sub_menu from './components/Sub_menu';
import OurLocations_Map from '../../components/OurLocations_Map';

import { Alert } from '@material-ui/lab';

import { AuthContext } from '../../context/auth';

import Account_details_Textfield from './components/Account_details_Textfield';

class Account_details extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            missingInformations: false
        }
    }

    componentDidMount(){
        if(
            localStorage.getItem('firstname') == '' 
            || localStorage.getItem('lastname') == '' 
            || localStorage.getItem('phone_number') == '' 
            || localStorage.getItem('email')   
        )
        {
            this.setState({
                missingInformations: true
            })
        }else{
            this.setState({
                missingInformations: false
            })
        }
    }

    updateFirstname = (context, value) => {
        context.setFirstname(value)
        localStorage.setItem('firstname', value)
    }

    updateLastname = (context, value) => {
        context.setLastname(value)
        localStorage.setItem('lastname', value)
    }

    updatePhoneNumber = (context, value) => {
        context.setPhoneNumber(value)
        localStorage.setItem('phoneNumber', value)
    }

    updateEmail = (context, value) => {
        context.setEmail(value)
        localStorage.setItem('email', value)
    }

    render(){

        let user = this.context;

        console.log("ACCOUNT DETAIL CTX");
        console.log(user);

        return (
            <div className="content">
                <Welcoming />
                <Sub_menu />
                <article id="Account_details">

                    <h1>Account details</h1>

                    <div className="bloc Form _content Form_account_details">
                        {
                            this.state.missingInformations &&
                            <Alert severity="error" id="Alert_infos_not_provided">Your account informations are not provided</Alert>
                        }
                        <Account_details_Textfield type="text" defaultValue={ user.firstname } toogle_label="Update Firstname" update_fn={ this.updateFirstname } />
                        <Account_details_Textfield type="text" defaultValue={ user.lastname } toogle_label="Update Lastname" update_fn={ this.updateLastname } />
                        <Account_details_Textfield type="text" defaultValue={ user.phoneNumber } toogle_label="Update Mobile Number" update_fn={ this.updatePhoneNumber } />
                        <Account_details_Textfield type="text" defaultValue={ user.email } toogle_label="Update E-mail Adress" update_fn={ this.updateEmail } />
                        <Account_details_Textfield type="password" defaultValue="•••••••" toogle_label="Update Password" update_fn={ this.updatePassword } />
                    </div>
                    
                </article>
                <OurLocations_Map />
            </div>
        )
    }
}

Account_details.contextType = AuthContext;

export default Account_details;