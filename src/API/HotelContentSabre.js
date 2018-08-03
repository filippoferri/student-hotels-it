import React from 'react';
import Sabre from '../lib/Sabre'

const HotelContent = () => {

  const body = {

    "GetHotelContentRQ": {

      "SearchCriteria": {

        "HotelRefs": {

          "HotelRef": [{

            "HotelCode": "1"

          }]

        },

        "DescriptiveInfoRef": {

          "PropertyInfo": true,

          "LocationInfo": true,

          "Amenities": true,

          "Descriptions": {

            "Description": [{

              "Type": "Dining"

            }, {

              "Type": "Alerts"

            }]

          },

          "Airports": true,

          "AcceptedCreditCards": true

        },

        "ImageRef": {

          "MaxImages": "10"

        }

      }

    }

  }

  return Sabre.HotelContentAPI(body).then(console.log);
};

export default HotelContent;

