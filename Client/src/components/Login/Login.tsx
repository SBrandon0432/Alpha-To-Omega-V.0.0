import React, { useState } from 'react';
import Map from '../Map/Map'
import './LoginS.scss';

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);


  function logged(){
    setIsLoggedIn(true);
  }

  if (!isLoggedIn) {
    return (
      <form onSubmit={logged} className="Login">
        <h1>Alpha To Omega Adventure App </h1>
        <label>
          User Name:
          <input  type="text"  className="user login"/>
        </label>

        <label>
          Password:
          <input  type="text"  className="pass"/>
        </label>

        <input type='submit' className="Submit" />
      </form>
    )
  } else {
    return (
      <Map />
    )
  }

};


export default Login;

