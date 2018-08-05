import axios from 'axios';
import Utils from '../Const/TravelPayoutConst';

const APPEND = '/api/v2/lookup.json?';

export default {
  HotelLocationAPI: locationId =>
    axios.get( Utils.URL_BASE + APPEND + 'query=' + locationId + '&lang=' + Utils.LANGUAGE +'&lookFor=city&limit=1&token=' + Utils.TOKEN)
};