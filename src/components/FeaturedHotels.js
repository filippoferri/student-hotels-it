import React from "react";
import Link from "gatsby-link";

import bgFlorence from "../img/firenze.jpg";
import bgAmsterdam from "../img/amsterdam.jpg";
import bgParis from "../img/parigi.jpg";

const FeaturedHotels = () => (
  <section id="featured-hotels" className="section">
    <div className="container">
      <div className="is-centered has-margin-bottom">
        <h3 className="title is-3 is-primary">Destinazioni in Italia</h3>
      </div>

      <div className="tile is-ancestor">

        <div className="tile is-parent is-8">
          <article className="tile is-child notification is-paddingless">
            <div className="is-image-wrapper"><img src={bgFlorence} alt="Student Hotels a Firenze"/></div>
            <p className="tile-title title is-4 is-uppercase has-background-secondary">Firenze</p>
            <Link className="tile-link" to="/camere/firenze/tsh-florence-lavagnini"></Link>
          </article>
        </div>

        <div className="tile is-parent">
          <article className="tile is-child notification is-primary is-animated">
            <p className="tile-solo-link title is-3 is-uppercase has-text-weight-bold"><span>Bologna:<br/> prossima<br/> apertura</span>
            </p>
          </article>
        </div>
      </div>

    </div>

    <div className="container">
      <div className="is-centered has-margin-bottom">
        <h3 className="title is-3 is-primary has-margin-top">Scopri l'Europa</h3>
      </div>

      <div className="tile is-ancestor">

        <div className="tile is-parent is-6">
          <article className="tile is-child notification is-paddingless">
            <div className="is-image-wrapper"><img src={bgAmsterdam} alt="Student Hotels ad Amsterdam"/></div>
            <p className="tile-title title is-4 is-uppercase has-background-secondary">Amsterdam</p>
            <Link className="tile-link" to="/camere/amsterdam"></Link>
          </article>
        </div>

        <div className="tile is-parent">
          <article className="tile is-child notification is-paddingless">
            <div className="is-image-wrapper"><img src={bgParis} alt="Student Hotels ad Parigi"/></div>
            <p className="tile-title title is-4 is-uppercase has-background-secondary">Parigi</p>
            <Link className="tile-link" to="/camere/parigi/the-student-hotel-paris-la-defense"></Link>
          </article>
        </div>
      </div>

    </div>
  </section>
);

export default FeaturedHotels;