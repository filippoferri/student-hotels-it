import React from "react";
import Link from "gatsby-link";
import JoinCommunity from "./JoinCommunity"

import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import FaInstagram from "@fortawesome/fontawesome-free-brands/faInstagram";

import bgTileThird from "../img/tile-hotels.jpg";
import bgLogo from "../img/bg-logo.svg"
import arrow from '../img/arrow-right.svg'

const HomeMosaic = ( {api} ) => (
  <section className="section is-home-mosaic">
    <div className="container">

      <div className="is-centered has-margin-bottom">
        <h3 className="title has-text-weight-bold is-3">Il motore di ricerca degli Student Hotels</h3>
        <p className="">Trovare student Hotels in Italia non è mai stato così facile.</p>
      </div>

      <div className="tile is-ancestor has-column-tablet">

        <div className="tile is-vertical is-8-desktop">

          <div className="tile">
            <div className="tile is-parent is-half-tablet is-second-desktop">

              <article className="tile is-child notification is-gray-light has-min-height is-animated has-content">
                <Link className="is-overlay-link" to="/mission"></Link>
                <div className="is-over-tablet">
                  <h3 className="title is-4 is-uppercase has-text-weight-bold">Perché scegliere uno student Hotel?</h3>
                  <p>Per tantissime ragioni! Soprattutto perché proponiamo solo strutture che offrono non solo alloggi per dormire, ma anche spazi per studiare, divertirsi e conoscere nuovi amici.</p>
                  <p className="sh-goto"><span className="is-hidden-desktop" >Leggi di più</span><img className="is-hidden-touch"  style={{width: `40px`}} src={arrow} alt="mission"/></p>
                </div>
                <div className="bg-logo is-hidden-mobile" style={{ backgroundImage: `url(${bgLogo})` }}></div>
              </article>

            </div>
            <div className="tile is-parent is-vertical is-first-desktop">

              <article className="tile is-child notification is-black has-min-height">
                <div className="is-over is-block-centered">
                  <h1 className="title is-5 is-uppercase has-text-weight-bold">"Una nuova concezione di Hotel:
                    assolutamente fantastico!"</h1>
                  <span>_Paola</span>
                </div>
              </article>

              <article className="tile is-child notification is-primary has-min-height">
                <div className="is-over is-block-centered">
                  <div className="title is-3 is-uppercase has-text-weight-bold is-centered">Troviamo il prezzo più basso</div>
                </div>
              </article>

            </div>
          </div>

        </div>

        <div className="tile is-parent is-vertical is-4-desktop">

          <article className="tile is-child notification is-black has-min-height">

            <JoinCommunity api={api} />

            <div className="is-over is-block-top">
              <h3 className="title is-5 is-uppercase has-text-weight-bold">Unisciti alla community</h3>

              <span>@studenthotels</span>
            </div>

            <Link className="icon-social" to="/">
              <FontAwesomeIcon className="icon-social" icon={FaInstagram} />
            </Link>

            <a className="sh-overlay-link" href='https://www.instagram.com/student_hotels/' target='_blank'></a>

          </article>

        </div>
      </div>
    </div>
  </section>
);

export default HomeMosaic;