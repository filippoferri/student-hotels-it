import React from "react";
import Link from "gatsby-link";

import bgHotel from "../img/firenze.jpg";

const FeaturedHotels = () => (
  <section id="featured-hotels" className="section">
    <div className="container">
      <div className="is-centered has-margin-bottom">
        <h3 className="title is-3 is-primary">In evidenza</h3>
      </div>

      <div className="tile is-ancestor">

        <div className="tile is-parent is-8">
          <article className="tile is-child notification has-background"
                   style={{ backgroundImage: `url(${bgHotel})` }}>
            <p className="tile-title title is-4 is-uppercase">Firenze</p>
            <p className="tile-price title is-4 is-uppercase has-text-weight-bold"><span>Da:</span> 300€</p>
            <Link className="tile-link" to="/hotels/hotel-test"></Link>
          </article>
        </div>

        <div className="tile is-parent">
          <article className="tile is-child notification is-primary is-animated">
            <p className="tile-solo-link title is-3 is-uppercase has-text-weight-bold"><span>PISA:<br/> prossima apertura</span></p>
          </article>
        </div>
      </div>

    </div>
  </section>
);

export default FeaturedHotels;