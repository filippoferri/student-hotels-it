import React from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import FaFacebookSquare from "@fortawesome/fontawesome-free-brands/faFacebookSquare";
import FaTwitterSquare from "@fortawesome/fontawesome-free-brands/faTwitterSquare";
import FaInstagram from "@fortawesome/fontawesome-free-brands/faInstagram";
import Link from "gatsby-link";

import bgNewsletter from "../img/newsletter-bg.jpg";

const Newsletter = () => (
  <section className="section newsletter is-small is-primary">
    <div
      className="has-background"
      style={{ backgroundImage: `url(${bgNewsletter})` }}></div>
    <div className="container">
      <div className="column is-three-fifths is-offset-one-fifth is-centered">
        <h3 className="title is-3 is-spaced has-text-centered">Rimani in contatto</h3>
        <div className="field">
          <div className="control has-icons-left has-button-right">
            <input className="input is-large" type="text" placeholder="Indirizzo email"/>
            <span className="icon is-left">@</span>
            <button type="button" className="button is-primary is-medium">Iscriviti</button>
          </div>
        </div>
        <div className="is-centered is-spaced">
          <Link className="" to="/">
            <FontAwesomeIcon className="icon-social" icon={FaFacebookSquare}/>
          </Link>
          <Link className="" to="/">
            <FontAwesomeIcon className="icon-social" icon={FaTwitterSquare}/>
          </Link>
          <Link className="" to="/">
            <FontAwesomeIcon className="icon-social" icon={FaInstagram}/>
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default Newsletter;
