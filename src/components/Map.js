import React from "react";
import GoogleMapReact from 'google-map-react';

const Marker = () => <div className="sh-map-marker"></div>;

const Map = ({location}) => {

  const MY_API_KEY = "AIzaSyCeCjYsjoCTTbjsssaMJ8nNTBAOLatkS5M"

  const dataMap = {
    center: {
      lat: location.lat,
      lng: location.lon
    },
    zoom: 18
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '30rem', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: MY_API_KEY }}
        defaultCenter={dataMap.center}
        defaultZoom= {dataMap.zoom}
      >
        <Marker
          lat={dataMap.center.lat}
          lng={dataMap.center.lng}
        />
      </GoogleMapReact>
    </div>
  );
};

export default Map;