import React from "react";

import { Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

import BookingsLog from "../screens/AuthenticatedCustomers/BookingLogs/BookingsLog";
import AccountDetails from "../screens/AuthenticatedCustomers/AccountDetails/AccountDetails";
import Login from "../screens/UnauthauticatedCustomers/Login/Login";
import Home from "../screens/UnauthauticatedCustomers/Home/Home";
import Oldstreet from "../screens/UnauthauticatedCustomers/Oldstreet";
import Cart from "../screens/AuthenticatedCustomers/Cart/index";

class RouteService extends React.Component {
  render() {
    return (
      <div>
        <ProtectedRoute
          exact
          path="/customers/bookings-log"
          component={BookingsLog}
        ></ProtectedRoute>
        <ProtectedRoute
          exact
          path="/customers/account"
          component={AccountDetails}
        ></ProtectedRoute>
        <Route exact path="/login">
          <Login redirect={BookingsLog} />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/oldstreet">
          <Oldstreet />
        </Route>
        <ProtectedRoute exact path="/cart" component={Cart}></ProtectedRoute>
      </div>
    );
  }
}

export default RouteService;
