import React from 'react';
import { Route } from 'react-router-dom'; 

import Login from '../pages/login/Login';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    if(localStorage.getItem('uid') !== null){
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

export default ProtectedRoute;