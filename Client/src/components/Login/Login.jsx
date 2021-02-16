import React, { useState } from 'react';
import Map from '../Map/Map';

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(0);


  function change () {
    let value = isLoggedIn;
    value++;
    setIsLoggedIn(value);
  }

  console.log(isLoggedIn);

  if (isLoggedIn === 0) {
    change();
  }

  console.log(isLoggedIn);

  return (
    <Map  test={change} val={isLoggedIn}/>
  );

};


export default Login;

