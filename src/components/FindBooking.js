import React from "react";
import PropTypes from "prop-types";
import HotelPricesAPI from "../API/HotelPrices";

class FindBooking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prices: false,
      expanded: false
    };
    this.getRandomArbitrary = this.getRandomArbitrary.bind(this);
  }

  componentDidMount() {
    HotelPricesAPI(this.props.locationId, this.props.hotelId, "2018-09-13", "2018-09-14").then(
      result => this.setState({
        prices: result
      })
    );
  }

  variation(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  render() {

    const { prices } = this.state;

    return (

      <div>
        {prices ?
          <div className="sh-price-from has-text-left is-flex is-flex-end">
            <div className="">
              <div>
                <p className="heading">Hotel da</p>
                <p className="title">€ {prices.priceFrom}</p>
              </div>
            </div>
            <div className="has-text-small has-text-grey">
              <div>A notte per persona</div>
            </div>
          </div> : null}

        <button type="button" className="button is-medium is-primary is-fullwidth">Compara prezzi</button>

        <div className="sh-compare-price has-text-left">
          <div className="sh-adv-item is-flex">
            <div>Booking.com</div>
            <div>€ {this.variation(prices.priceFrom, (prices.priceFrom + 30))}</div>
          </div>
          <div className="sh-adv-item is-flex">
            <div>Agodà</div>
            <div>€ {this.variation(prices.priceFrom, (prices.priceFrom + 30))}</div>
          </div>
          <div className="sh-adv-item is-flex">
            <div>Expedia</div>
            <div>€ {this.variation(prices.priceFrom, (prices.priceFrom + 30))}</div>
          </div>
          <div className="sh-adv-item is-flex">
            <div>Hotels.com</div>
            <div>€ {this.variation(prices.priceFrom, (prices.priceFrom + 30))}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default FindBooking;

FindBooking.propTypes = {
  expanded: PropTypes.bool
};