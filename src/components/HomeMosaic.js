import React from "react";
import Link from "gatsby-link";

import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import FaInstagram from "@fortawesome/fontawesome-free-brands/faInstagram";

import bgTileThird from "../img/tile-hotels.jpg";
import bgLogo from "../img/bg-logo.svg"

const HomeMosaic = () => (
  <section className="section is-home-mosaic">
    <div className="container">
      <div className="tile is-ancestor">
        <div className="tile is-vertical is-8">
          <div className="tile">
            <div className="tile is-parent is-vertical">
              <article className="tile is-child notification is-black has-min-height">
                <div className="is-over is-block-centered">
                  <h1 className="title is-5 is-uppercase has-text-weight-bold">"Una nuova concezione di Hotel:
                    assolutamente fantastico!"</h1>
                  <span>_Paola</span>
                </div>
              </article>
              <article className="tile is-child notification is-primary has-min-height is-animated">
                <div className="is-over is-block-centered">
                  <h2 className="title is-3 is-uppercase has-text-weight-bold is-centered">Spazi innovativi di
                    coworking</h2>
                </div>
              </article>
            </div>
            <div className="tile is-parent">

              <article className="tile is-child notification is-gray-light has-min-height is-animated has-content">
                <div className="is-over">
                  <h3 className="title is-4 is-uppercase has-text-weight-bold">Perché scegliere Student Hotels?</h3>
                  <p>Per tantissime ragioni! Soprattutto perché proponiamo solo strutture che offrono non solo alloggi per dormire, ma anche spazi per studiare, divertirsi e conoscere nuovi amici.</p>
                </div>
                <div className="bg-logo" style={{ backgroundImage: `url(${bgLogo})` }}></div>
              </article>

            </div>
          </div>
        </div>
        <div className="tile is-parent is-vertical">

          <article className="tile is-child notification is-black has-background"
                   style={{ backgroundImage: `url(${bgTileThird})` }}>

            <div className="is-over is-block-top">
              <h3 className="title is-5 is-uppercase has-text-weight-bold">#studentspirit</h3>
            </div>

            <Link className="icon-social" to="/">
              <FontAwesomeIcon className="icon-social" icon={FaInstagram} />
            </Link>

          </article>

        </div>
      </div>
    </div>
  </section>
);

export default HomeMosaic;