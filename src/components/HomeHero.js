import React from "react";
import Img from "gatsby-image";

import HomeSearch from "../components/HomeSearch";

import bgGrunge from "../img/grunge.png";
import agoda from "../img/agencies/agoda.png";
import bookingcom from "../img/agencies/2.png";
import expedia from "../img/agencies/expedia.png";
import hotelsdotcom from "../img/agencies/hotelsdotcom.png";

const HomeHero = ({ content }) => (
  <section className="hero is-primary is-fullheight">
    <div className="hero-slides">
      <Img sizes={content.heroImage.childImageSharp.sizes}/>
    </div>
    <div className="hero-body is-home-hero">
      <div className="container is-centered">

        <div className="columns">
          <div className="column is-6-desktop is-offset-3-desktop is-8-tablet is-offset-2-tablet">
            <h1 className="title has-negative-margin-top">
              {content.title}
            </h1>
            <h2 className="subtitle">{content.subtitle}</h2>

            <HomeSearch/>

          </div>
        </div>
      </div>
    </div>

    <div className="hero-partners has-text-centered is-hidden-touch">
      <span>Confronta i prezzi fra le principali agenzie di viaggio</span>
      <div className="level is-flex-center">
        <div className="level-item has-small-padding"><img src={agoda} alt=""/></div>
        <div className="level-item has-small-padding"><img src={bookingcom} alt=""/></div>
        <div className="level-item has-small-padding"><img src={expedia} alt=""/></div>
        <div className="level-item has-small-padding"><img src={hotelsdotcom} alt=""/></div>
      </div>
    </div>

    <div className="hero-bottom">
      <div className="hero-bottom-grunge"
           style={{ backgroundImage: `url(${bgGrunge})` }}></div>
    </div>
  </section>
);

export default HomeHero;
