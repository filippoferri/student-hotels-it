import React from "react";
import GoogleMapReact from 'google-map-react';

const Marker = () => <div className="sh-map-marker"></div>;

const Map = ({location}) => {

  const dataMap = {
    center: {
      lat: location.lat,
      lon: location.lon
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <div id="map" style={{ height: '30rem', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDwVIUQ-JW0kewgD7NFmpupE-CqOiBV77k' }}
        defaultCenter={dataMap.center}
        defaultZoom= {dataMap.zoom}
      >
        <Marker
          lat={dataMap.center.lat}
          lng={dataMap.center.lon}
        />
      </GoogleMapReact>
    </div>
  );
};

export default Map;