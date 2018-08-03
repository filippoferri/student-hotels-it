import React from 'react';
import TravelPayouts from '../lib/TravelPayouts/Content'

const HotelContent = (hotelId) => {
  return TravelPayouts.HotelContentAPI(hotelId).then(json => json.data.results.hotels[0]);
};

export default HotelContent;

