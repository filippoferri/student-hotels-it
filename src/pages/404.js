import React from "react";
import Link from "gatsby-link"

import AnteFooter from "../components/AnteFooter";

import image from "../img/404.jpg";
import bgGrunge from "../img/grunge.png";

const NotFoundPage = () => (
  <main>

    <section className="hero is-primary is-fullheight">
      <div className="is-image-wrapper has-position-absolute"><img src={image} /></div>
      <div className="hero-body is-home-hero">
        <div className="container is-centered">

          <div className="columns">
            <div className="column is-6-desktop is-offset-3-desktop is-8-tablet is-offset-2-tablet">
            </div>
          </div>
        </div>
      </div>

      <div className="hero-partners has-text-centered is-hidden-touch" style={{'zIndex': '10'}}>
        <div className="has-text-white has-text-centered">Spiacenti, pagina non trovata</div>
        <Link to="/">Torna in home page</Link>
      </div>

      <div className="hero-bottom">
        <div className="hero-bottom-grunge"
             style={{ backgroundImage: `url(${bgGrunge})` }}></div>
      </div>
    </section>

    <AnteFooter/>

  </main>
);

export default NotFoundPage;
