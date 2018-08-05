import axios from 'axios';
import Utils from '../Const/TravelPayoutConst';

const APPEND = '/photos/hotel_photos?';

export default {
  HotelImagesAPI: id =>
    axios.get( Utils.URL_BASE + APPEND + 'id=' + id )
};