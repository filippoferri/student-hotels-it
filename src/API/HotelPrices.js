import React from 'react';
import TravelPayouts from '../lib/TravelPayouts/Prices'

const HotelPrices = (locationId, hotelId, checkIn, checkOut) => {

  return TravelPayouts.HotelPricesAPI(locationId, hotelId, checkIn, checkOut).then(json => json.data);
};

export default HotelPrices;