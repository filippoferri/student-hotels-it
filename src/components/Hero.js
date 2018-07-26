import React from "react";

const Hero = ({image, heading}) => (

  <section className="hero is-medium is-primary background-image"
           style={{ backgroundImage: `url(${image})` }}>
    <div className="hero-body">
      <div className="container has-text-centered">
        <div className="columns">
          <div className="column is-8 is-offset-2">
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
