import React from 'react';
import './Sub_menu.scss';

import { NavLink } from 'react-router-dom';

import { AuthContext } from '../../../context/auth';

class Sub_menu extends React.Component{
    constructor(props){
        super(props);
    }

    render(){

        let context = this.context;

        return (
            <nav className="sub_menu">    
                <NavLink activeClassName="active" to="/customers/bookings-log">
                    Booking Log
                </NavLink>
                <NavLink activeClassName="active" to="/customers/account">
                    Account settings 
                    {
                        context.infos_provided == false &&
                        <span class='alert-icon'></span>
                    }
                </NavLink>
            </nav>
        )
    }
}

Sub_menu.contextType = AuthContext;

export default Sub_menu;