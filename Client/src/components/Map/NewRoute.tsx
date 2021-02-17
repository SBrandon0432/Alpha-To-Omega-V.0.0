import React from 'react';
const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
const MapboxDirections = require('@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions')
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css'

const NewRoute = () => {


  const renderMap = () => {
    mapboxgl.accessToken = 'pk.eyJ1Ijoic2FtYnJhbmRvbiIsImEiOiJja2w0Y3M1NGgwZW44MnZqdXhvdjJqanBoIn0.Dh4peFbd4OkT0ljteZ6frA';
    var map = new mapboxgl.Map({
    container: 'Login',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-79.4512, 43.6568],
    zoom: 5,
    });

  map.addControl(
      new MapboxDirections({
          accessToken: mapboxgl.accessToken
      }),
      'top-left'
  );

    map.on('load', function () {
      map.addSource('route', {
          'type': 'geojson',
          'data': {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                  'type': 'LineString',
                  'coordinates': [
                      [-111.84779,37.63942], // this will be a user addon for routes
                      [-111.84779,37.73942]
                  ]
              }
          }
      });

    map.addLayer({
        'id': 'route',
        'type': 'line',
        'source': 'route',
        'layout': {
            'line-join': 'round',
            'line-cap': 'round'
        },
        'paint': {
            'line-color': '#888',
            'line-width': 8
        }
    });
    });
  }
  renderMap();
  console.log('new route')
  return null;
}

export default NewRoute;