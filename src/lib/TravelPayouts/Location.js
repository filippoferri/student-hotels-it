import axios from 'axios';
import Utils from '../Const/TravelPayoutConst';

export default {
  HotelLocationAPI: locationId =>
    axios.get( Utils.URL_BASE + '/api/v2/lookup.json?query=' + locationId + '&lang=' + Utils.LANGUAGE +'&lookFor=city&limit=1&token=' + Utils.TOKEN)
};