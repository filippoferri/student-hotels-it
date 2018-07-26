import React from 'react'

import bgFirenze from "../img/firenze.jpg";
import bgGrunge from "../img/grunge.png";

const HomeHero = () => (
  <section className="hero is-primary is-fullheight">
    <div className="hero-slides">
      <div style={{ backgroundImage: `url(${bgFirenze})` }}></div>
    </div>
    <div className="hero-body">
      <div className="container is-centered">
        <h1 className="title">
          Hotel a misura di studente
        </h1>
        <p><span className="button is-link is-outlined is-inverted is-medium">Cerca a Firenze</span></p>
      </div>
    </div>
    
    <div className="hero-bottom">
      <div className="hero-bottom-grunge"
           style={{ backgroundImage: `url(${bgGrunge})` }}></div>
    </div>
  </section>
)

export default HomeHero
