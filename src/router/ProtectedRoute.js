import React from "react";
import { Route } from "react-router-dom";
import Login from "../screens/UnauthauticatedCustomers/Login/Login";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const storedUid = localStorage.getItem("uid");
  console.log(">> ProtectedRoute UID : " + storedUid);
  if (storedUid !== null) {
    return (
      <Route {...rest} render={(props) => <Component {...rest} {...props} />} />
    );
  } else {
    return (
      <Route {...rest} render={(props) => <Login {...rest} {...props} />} />
    );
  }
};

export default ProtectedRoute;
