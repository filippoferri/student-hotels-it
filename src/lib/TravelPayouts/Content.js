import axios from 'axios';
import Utils from '../Const/TravelPayoutConst';

export default {
  HotelContentAPI: id =>
  axios.get( Utils.URL_BASE + '/api/v2/lookup.json?query=' + id + '&lang=' + Utils.LANGUAGE +'&lookFor=hotel&limit=1&token=' + Utils.TOKEN)
};