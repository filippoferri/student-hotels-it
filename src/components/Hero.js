import React from "react";
import Img from "gatsby-image";
import Link from "gatsby-link";

const Hero = ({image, heading, addClass}) => (

  <section className={"hero is-medium has-background-primary background-image" + (addClass ? " " + addClass : "")}>
    <div className="is-image-wrapper has-position-absolute"><Img sizes={image} /></div>
    <div className="hero-body">
      <div className="container has-text-centered">
        <div className="columns">
          <div className="column is-8-desktop is-offset-2-desktop">
            {addClass ?
              <Link to="/blog">BLOG</Link>
             : null}
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
