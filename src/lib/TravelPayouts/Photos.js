import axios from 'axios';

const URL_BASE = 'https://yasen.hotellook.com/photos/hotel_photos?';

export default {
  HotelImagesAPI: id =>
    axios.get( URL_BASE + 'id=' + id )
};