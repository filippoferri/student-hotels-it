import React from "react";
import Link from "gatsby-link";

import Tile from "../components/Tile";

const LatestNews = ({ posts }) => {

  return (
    <section id="latest-news" className="section has-margin-bottom">
      <div className="container">
        <div className="is-centered has-margin-bottom">
          <h3 className="title has-text-weight-bold is-3">Novità dal mondo</h3>
          <p className="">Il mondo degli Student Hotels guarda al futuro.<br/>Rimani aggiornato sulle ultime
            novità.</p>
        </div>

        <div className="tile is-ancestor">

          <div className="tile is-vertical is-9">
            <div className="tile">

              <Tile post={posts[0]} hasbg />

              <div className="tile is-8 is-vertical">
                <div className="tile">

                  <Tile post={posts[1]}/>

                  <div className="tile is-parent">
                    <article className="tile is-child notification is-primary is-animated">
                      <Link className="tile-solo-link title is-3 is-uppercase has-text-weight-bold" to="blog"><span>Tutte le notizie</span></Link>
                    </article>
                  </div>

                </div>

                <Tile post={posts[2]} hasbg />

              </div>
            </div>
          </div>

          <Tile post={posts[3]} style={"is-black"}/>

        </div>

      </div>
    </section>
  );
};

export default LatestNews;


