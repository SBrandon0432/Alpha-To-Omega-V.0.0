import React from 'react';
import { useState } from 'react';


var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

const Map = () => {


  mapboxgl.accessToken = 'pk.eyJ1Ijoic2FtYnJhbmRvbiIsImEiOiJja2w0Y3M1NGgwZW44MnZqdXhvdjJqanBoIn0.Dh4peFbd4OkT0ljteZ6frA';
  var map = new mapboxgl.Map({
    container: 'root', // container id
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-74.5, 40], // starting position
    zoom: 9 // starting zoom
  });

// Add zoom and rotation controls to the map.
  map.addControl(new mapboxgl.NavigationControl());


  return (
    <h1>test</h1>
  )


};


export default Map;

