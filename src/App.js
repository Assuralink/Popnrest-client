import React, { useState } from "react";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";
import { BrowserRouter } from "react-router-dom";
import RouteService from "./router/index";
import "./Global.scss";

export default function App() {
  const [uid, setUid] = useState(localStorage.getItem("uid"));
  const [firstname, setFirstname] = useState(localStorage.getItem("firstname"));
  const [lastname, setLastname] = useState(localStorage.getItem("lastname"));
  const [phoneNumber, setPhoneNumber] = useState(
    localStorage.getItem("phoneNumber")
  );
  const [email, setEmail] = useState(localStorage.getItem("email"));
  const [cart, setCart] = useState(localStorage.getItem("cart"));
  const handleLogout = () => {
    setUid(null);
    setFirstname("");
    setLastname("");
    setPhoneNumber("");
    setEmail("");
    localStorage.clear();
  };

  return (
    <BrowserRouter>
      <Menu />
      <RouteService />
      <Footer />
    </BrowserRouter>
  );
}
