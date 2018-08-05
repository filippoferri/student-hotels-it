import axios from 'axios';
import Utils from '../Const/TravelPayoutConst';

const APPEND = '/api/v2/lookup.json?';

export default {
  HotelContentAPI: id =>
  axios.get( Utils.URL_BASE + APPEND + 'query=' + id + '&lang=' + Utils.LANGUAGE +'&lookFor=hotel&token=' + Utils.TOKEN)
};