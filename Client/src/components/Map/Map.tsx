import React from 'react';
import { useState } from 'react';

const Map = (props: { test: () => void, val: number }) => {
  console.log('in map tsx');
  let helloWorld: String;

  const {test, val} = props
  if (val < 10) {
    test();
  }

  return (
    <h1> test</h1>
  );
};


export default Map;