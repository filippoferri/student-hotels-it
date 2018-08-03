import axios from 'axios';
import Utils from '../Const/TravelPayoutConst';

export default {
  HotelPricesAPI: (locationId, hotelId, checkIn, checkOut) =>
    axios.get( Utils.URL_BASE + '/api/v2/cache.json?location=' + locationId + '&hotelId=' + hotelId + '&checkIn=' + checkIn + '&checkOut=' + checkOut + '&currency=eur&limit=1&adults=1&token=' + Utils.TOKEN)
};