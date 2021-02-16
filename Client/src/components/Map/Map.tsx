import React from 'react';
import { useState } from 'react';
const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
// import MapboxDirections from '@mapbox/mapbox-gl-directions/src/index'
// import fs from 'fs';
// var MapboxDirections = require('@mapbox/mapbox-gl-directions');
const MapboxDirections = require('@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions')
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css'


const Map = () => {


    mapboxgl.accessToken = 'pk.eyJ1Ijoic2FtYnJhbmRvbiIsImEiOiJja2w0Y3M1NGgwZW44MnZqdXhvdjJqanBoIn0.Dh4peFbd4OkT0ljteZ6frA';
    var map = new mapboxgl.Map({
    container: 'root',
    style: 'mapbox://styles/mapbox/streets-v11'
    });

    map.addControl(
      new MapboxDirections({
          accessToken: mapboxgl.accessToken
      }),
      'top-left'
  );



  return (
    <h1 className="testing">testing</h1>
  );

};


export default Map;

