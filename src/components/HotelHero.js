import React from 'react';
import PropTypes from 'prop-types';

import HotelLocation from '../API/HotelLocation';

class HotelHero extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      location: false
    };
  }

  componentDidMount() {
    HotelLocation(this.props.locationId).then(
      response => this.setState({
        location: response
      })
    )
  }

  render() {

    const {location} = this.state;
    const hero = location ? "Https://photo.hotellook.com/static/cities/1200x720/" + location.iata[0] + ".jpg" : ""

    return (

      <section>
          <div className="hero is-medium is-primary">

            { location ?
              <div className="is-image-wrapper has-position-absolute"><img src={hero} /></div>
             : null }

            <div className="hero-body">
              <div className="container has-text-centered">
                <div className="columns">
                  <div className="column is-8-desktop is-offset-2-desktop">
                    <h1 className="title">{this.props.heading}</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>
    )
  }
}

HotelHero.propTypes = {
  location: PropTypes.array,
};

export default HotelHero;