import React from 'react';
import TravelPayouts from '../lib/TravelPayouts/Location'

const HotelLocation = (locationId) => {
  return TravelPayouts.HotelLocationAPI(locationId).then(json => json.data.results.locations[0]);
};

export default HotelLocation;
