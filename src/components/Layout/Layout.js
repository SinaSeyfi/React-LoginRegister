import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Register from '../Register/Register';

export default function Layout() {
  //register email
  const [registerEmail, setRegisterEmail] = useState("");
  const handleRegisterEmail = (e) => {
    setRegisterEmail(e.target.value);
  }
  //register password
  const [registerPassword, setRegisterPassword] = useState("");
  const handleRegisterPassword = (e) => {
    setRegisterPassword(e.target.value)
  }
  //register username
  const [registerUsername, setRegisterUsername] = useState("");
  const handleRegisterUsername = (e) => {
    setRegisterUsername(e.target.value)
  }
  //handle register form data
  const [registerData, setRegisterData] = useState([]);
  const [registered, setRegisterd] = useState(false);
  const [formEmpty , setFormEmpty] = useState();
  const handleRegisterData = (e) => {
    e.preventDefault();
    const nswRegisterData = {
      email: registerEmail,
      password: registerPassword,
      username: registerUsername
    }
    if (nswRegisterData.email == "" || nswRegisterData.password == "" || nswRegisterData.username == "") {
      setFormEmpty(true)
    } else {
      setRegisterData([...registerData, nswRegisterData])
      setRegisterEmail("");
      setRegisterPassword("");
      setRegisterUsername("");
      setRegisterd(true);
      setPleaseRegister(false);
      setFormEmpty(false);
    }

  }
  //please register
  const [pleaseRegister, setPleaseRegister] = useState(false)
  const handlePleaseRegister = (e) => {
    e.preventDefault();
    setPleaseRegister(true)
  }
  //log in email
  const [loginEmail, setLoginEmail] = useState("");
  const handleLoginEmail = (e) => {
    setLoginEmail(e.target.value)
  }
  //log in passsword
  const [loginPassword, setLoginPassword] = useState("");
  const handleLoginPassword = (e) => {
    setLoginPassword(e.target.value)
  }
  //login data
  const loginData = {
    email: loginEmail,
    password: loginPassword
  }
  //handle login
  const [loginSuccess , setLoginSuccess] = useState(false);
  const [loginNotSuccess , setLoginNotSuccess] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();
    //cheack log in
    const checkRegister = registerData.find(x => loginData)
    if (checkRegister.email === loginData.email && checkRegister.password === loginData.password) {
      setLoginSuccess(true)
      setLoginNotSuccess(false)
    } else {
      setLoginNotSuccess(true)
    }
    setLoginEmail("");
    setLoginPassword("")
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login
          loginEmail={loginEmail}
          handleLoginEmail={handleLoginEmail}
          loginPassword={loginPassword}
          handleLoginPassword={handleLoginPassword}
          handleLogin={handleLogin}
          registered={registered}
          pleaseRegister={pleaseRegister}
          handlePleaseRegister={handlePleaseRegister}
          loginSuccess={loginSuccess}
          loginNotSuccess={loginNotSuccess}
        />} />
        <Route path='/Register' element={<Register
          registerEmail={registerEmail}
          handleRegisterEmail={handleRegisterEmail}
          registerPassword={registerPassword}
          handleRegisterPassword={handleRegisterPassword}
          registerUsername={registerUsername}
          handleRegisterUsername={handleRegisterUsername}
          handleRegisterData={handleRegisterData}
          registered={registered}
          formEmpty={formEmpty}

        />} />
        <Route path='/Home' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
