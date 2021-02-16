import React, { useState } from 'react';

const Map = (props) => {

  const {test, val} = props
  if (val < 10) {
    test();
  }

  return (
    <h1> test</h1>
  );

};


export default Map;