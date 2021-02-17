import React, { useState } from 'react';
import Map from '../Map/Map'
import './LoginS.scss';
import $ from 'jquery';

const Login = () => {

  const message = {
    name: 'sam',
    pass: 'pass'
  }

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  function logged(){
    setIsLoggedIn(true);
  }

  function auth() {
    $.ajax({
      url: 'localhost:3000/login',
      type: 'POST',
      data: JSON.stringify(message),
      success: () => {
        console.log('passed auth')
      }
    })
  }

  if (!isLoggedIn) {
    return (
      <form onSubmit={logged} id="Login">
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
      <div className= "Map" >
          <Map />
      </div>
    )
  }

};


export default Login;

