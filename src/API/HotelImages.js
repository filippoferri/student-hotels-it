import React from 'react';
import TravelPayouts from '../lib/TravelPayouts/Photos'

const HotelImages = (id) => {

  return TravelPayouts.HotelImagesAPI(id).then(json => json.data);
};

export default HotelImages;