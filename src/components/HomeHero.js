import React from "react";

import HomeSearch from "../components/HomeSearch";

import bgFirenze from "../img/firenze.jpg";
import bgGrunge from "../img/grunge.png";

const HomeHero = () => (
  <section className="hero is-primary is-fullheight">
    <div className="hero-slides">
      <div style={{ backgroundImage: `url(${bgFirenze})` }}></div>
    </div>
    <div className="hero-body is-home-hero">
      <div className="container is-centered">

        <div className="columns">
          <div className="column is-6-desktop is-offset-3-desktop is-8-tablet is-offset-2-tablet">
            <h1 className="title">
              Hotel a misura di studente
            </h1>
            <h2 className="subtitle">Inizia ora a cercare gli Student Hotel in Italia!</h2>

            <HomeSearch/>

          </div>
        </div>
      </div>
    </div>

    <div className="hero-bottom">
      <div className="hero-bottom-grunge"
           style={{ backgroundImage: `url(${bgGrunge})` }}></div>
    </div>
  </section>
);

export default HomeHero;
