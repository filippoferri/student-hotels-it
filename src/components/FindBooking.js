import React from 'react';
import PropTypes from 'prop-types';
import HotelPricesAPI from '../API/HotelPrices';

class FindBooking extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      prices: null
    };
    this.variation = this.variation.bind(this);
  }

  componentDidMount() {
    HotelPricesAPI(this.props.locationId, this.props.hotelId, this.props.checkIn, this.props.checkOut).then(
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
    const priceFrom = prices ? prices.priceFrom : this.props.pricefrom;
    const goTo = "http://booking.studenthotels.it/hotels/?hotelId=" + this.props.hotelId + "&language=it";

    return (

      <div className="has-margin-bottom">

        <div className="sh-price-from has-text-left is-flex is-flex-end is-hidden-mobile">
          <div>
              <p className="heading">Hotel da</p>
              <p className="title">{priceFrom} €</p>
          </div>
          <div className="has-text-small has-text-grey">
            <div>A notte per persona</div>
          </div>
        </div>

        <a className="sh-booking" href={`${goTo}`} target="_blank">
          <button type="button" className="button is-medium is-primary is-fullwidth">Verifica disponibilità</button>
        </a>

        <div className="sh-compare-price has-text-left is-hidden-mobile">
          <div className="sh-adv-item is-flex">
            <div>Booking.com</div>
            <div>€ {this.variation(priceFrom, (priceFrom + 30))}</div>
          </div>
          <div className="sh-adv-item is-flex">
            <div>Agodà</div>
            <div>€ {this.variation(priceFrom, (priceFrom + 30))}</div>
          </div>
          <div className="sh-adv-item is-flex">
            <div>Expedia</div>
            <div>€ {this.variation(priceFrom, (priceFrom + 30))}</div>
          </div>
          <div className="sh-adv-item is-flex">
            <div>Hotels.com</div>
            <div>€ {this.variation(priceFrom, (priceFrom + 30))}</div>
          </div>
          <div className="sh-adv-item">
            <div className="has-text-centered has-text-small">
              <a className="sh-booking" href={`${goTo}`} target="_blank">+ 2 offerte</a>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default FindBooking;

FindBooking.propTypes = {
  prices: PropTypes.object
};