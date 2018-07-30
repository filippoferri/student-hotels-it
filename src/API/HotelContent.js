import React from 'react';
import Sabre from "../lib/Sabre";

const HotelContent = () => {

  const params = {

    "GetHotelContentRQ": {

      "SearchCriteria": {

        "HotelRefs": {

          "HotelRef": [{

            "HotelCode": "1"

          }, {

            "HotelCode": "1100"

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



  return Sabre.HotelContentAPI(params).then(console.log);
};

export default HotelContent;

