import React from 'react';
import { useState } from 'react';
import NewRoute from './NewRoute';

// const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
// const MapboxDirections = require('@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions')
// import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css'


const Map = () => {

  const [path, setPath] = useState<Array<any>>([]);


  return (
    <div>

    <form id="form">
      <label>
          test:
        <input  type="text"  className="test"/>
      </label>
    </form>

    <div>
      < NewRoute />
    </div>

    </div>
  );

};

export default Map;


