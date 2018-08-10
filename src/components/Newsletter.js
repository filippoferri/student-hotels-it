import React from "react";
import Img from "gatsby-image";

import imageAlt from '../img/newsletter-studenthotels.jpg';

const Newsletter = ({image}) => (
  <section className="section newsletter is-small is-primary">

    <div className="is-image-wrapper has-position-absolute"><Img sizes={image ? image : imageAlt}/></div>

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
          <a className="sh-icon-social facebook" href="https://www.facebook.com/studenthotels" target="_blank"></a>
          <a className="sh-icon-social twitter" href="https://twitter.com/studenthotels" target="_blank"></a>
          <a className="sh-icon-social instagram" href="https://www.instagram.com/student_hotels/" target="_blank"></a>
        </div>
      </div>
    </div>
  </section>
);

export default Newsletter;
