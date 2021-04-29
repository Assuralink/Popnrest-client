import React from 'react';
import './Welcoming.scss';

import { AuthContext } from '../../../context/auth';

class Welcoming extends React.Component{
    render(){

        let user = this.context;

        console.log("Welcoming ctx");
        console.log(user);

        return (
            <article className="intro">
                <h3>Welcome back { user.firstname } !</h3>
                <p>
                    This is your profile page. You will be able to check your<br />
                    upcoming bookings and past booking. Happy Nap !
                </p>
            </article>
        )
    }
}

Welcoming.contextType = AuthContext;

export default Welcoming;