import React from 'react';

import { Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

import Bookings_log from '../pages/customers/Bookings_log';
import Account_details from '../pages/customers/Account_details';

import Login from '../pages/login/Login';

class RouteService extends React.Component{
    render(){
        return (
            <div>
                <ProtectedRoute exact path="/" 
                    component={Bookings_log}>
                </ProtectedRoute>
                <ProtectedRoute exact path="/customers/bookings-log" 
                    component={Bookings_log}>
                </ProtectedRoute>
                <ProtectedRoute exact path="/customers/account" 
                    component={Account_details}>
                </ProtectedRoute>
                <Route exact path="/login">
                    <Login />
                </Route>
            </div>
        )
    }
}

export default RouteService;