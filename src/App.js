import React, { useState } from 'react';
import Menu from './components/Menu';
import Footer from './components/Footer';

import { BrowserRouter } from 'react-router-dom';

import RouteService from './components/RouteService';

import { AuthContext } from './context/auth';

import './Global.scss';

export default function App() {

  const [uid, setUid] = useState(null);
  const [firstname, setFirstname] = useState(localStorage.getItem('firstname'));
  const [lastname, setLastname] = useState(localStorage.getItem('lastname'));
  const [phoneNumber, setPhoneNumber] = useState(localStorage.getItem('phoneNumber'));
  const [email, setEmail] = useState(localStorage.getItem('email'));

  return (
    <AuthContext.Provider value={{
      uid: uid,
      setUid: setUid,
      firstname: firstname,
      setFirstname: setFirstname,
      lastname: lastname,
      setLastname: setLastname,
      phoneNumber: phoneNumber,
      setPhoneNumber: setPhoneNumber,
      email: email,
      setEmail: setEmail
    }}>
      <BrowserRouter>
        <Menu />
        <RouteService />
        <Footer />
      </BrowserRouter>
    </AuthContext.Provider>
  )
}