import React, { useState } from "react";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";

import { BrowserRouter } from "react-router-dom";

import RouteService from "./router/index";

import { AuthContext } from "./context/auth";

import "./Global.scss";

export default function App() {
  const [uid, setUid] = useState(localStorage.getItem("uid"));
  const [firstname, setFirstname] = useState(localStorage.getItem("firstname"));
  const [lastname, setLastname] = useState(localStorage.getItem("lastname"));
  const [phoneNumber, setPhoneNumber] = useState(
    localStorage.getItem("phoneNumber")
  );
  const [email, setEmail] = useState(localStorage.getItem("email"));
  const handleLogout = () => {
    setUid(null);
    setFirstname("");
    setLastname("");
    setPhoneNumber("");
    setEmail("");
    localStorage.clear();
  };

  return (
    <AuthContext.Provider
      value={{
        uid: uid,
        setUid: setUid,
        firstname: firstname,
        setFirstname: setFirstname,
        lastname: lastname,
        setLastname: setLastname,
        phoneNumber: phoneNumber,
        setPhoneNumber: setPhoneNumber,
        email: email,
        setEmail: setEmail,
        logout: handleLogout,
      }}
    >
      <BrowserRouter>
        <Menu />
        <RouteService />
        <Footer />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}
