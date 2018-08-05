import React from "react";

const Hero = ({image, heading}) => (

  <section className="hero is-medium is-primary background-image">
    <div className="is-image-wrapper has-position-absolute"><img src={image} /></div>
    <div className="hero-body">
      <div className="container has-text-centered">
        <div className="columns">
          <div className="column is-8-desktop is-offset-2-desktop">
            <h1 className="title">
              {heading}
            </h1>
          </div>
        </div>

      </div>
    </div>
  </section>

);

export default Hero;
