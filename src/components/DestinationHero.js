import React from 'react';

class HotelHero extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const location = this.props.destination;
    const hero = "//bit.ly/shxyz-" + location + "-studenthotels";

    return (
      <section>
          <div className="hero is-medium has-background-primary">

            <div className="is-image-wrapper has-position-absolute"><img src={hero} /></div>

            <div className="hero-body">
              <div className="container has-text-centered">
                <div className="columns">
                  <div className="column is-8-desktop is-offset-2-desktop">
                    <h1 className="title">Soggiorni a <span className="is-capitalized">{this.props.heading}</span></h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>
    )
  }
}

export default HotelHero;