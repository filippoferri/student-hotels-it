import React from 'react';
import axios from 'axios';

const URL_BASE = 'https://api-crt.cert.havail.sabre.com/v1.0.0/shop/hotels/content?mode=content';
const SIMPLE_HOTEL_SEARCH_ENDPOINT = `/v1.0.0/shop/hotels/content?mode=content`;

const axiosConfig = {
  headers: {
    'Authorization': 'Bearer T1RLAQJMbwo/axNe92X8t3PzJBNNOC113BB/J9tN2h1vkzyh8c9V7tPEAADA22MOi/SjpZI8lPX6p61znjB/WT2WKzzFSn9Yiw05F2eLM0UjzJgENUJe70pvIkjFV33azXgJNgHcnIZtzyJWKJbJ/w3F7CYYzNqQQOu2Ckr+qq9xlvLHJhQrJ5zp8EIS4u+wsKqLia4RKNHWVZu6ozhiTktISQwvfG0goZeI94Ah6WAOyaPcMlgeLxwPGE1kSkffXbg+8JU5awm18sRIk9BhAXr5wumuJz/3uP86b40a8yMa7kCAUHWFAYh7hcx2',
    'Content-Type': 'application/json',
    'Accept' : 'application/json'
  }
};

export default {
  HotelContentAPI: body =>
    axios.post(URL_BASE, body, axiosConfig ),
};


