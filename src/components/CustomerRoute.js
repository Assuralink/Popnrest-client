import React from 'react';
import { Route } from 'react-router-dom'; 

import Login from '../pages/login/Login';

const CustomerRoute = ({ component: Component, User, ...rest }) => {

    console.log(">> CustomerRoute");
    console.log(User);

    if(User.isAuth == "true"){
        return (
            <Route {...rest} render={
              props => <Component {...rest} {...props} />
            } />
        )
    }else{
        return (
            <Route {...rest} render={
                props => <Login {...rest} {...props} />
              } />
        )
    }
}

export default CustomerRoute;