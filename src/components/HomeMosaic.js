import React from "react";
import Link from "gatsby-link";
import JoinCommunity from "./JoinCommunity"

import bgLogo from "../img/bg-logo.svg"
import arrow from '../img/arrow-right.svg'

const HomeMosaic = ( {content, api} ) => (
  <section className="section is-home-mosaic">
    <div className="container">

      <div className="is-centered has-margin-bottom">
        <h3 className="title has-text-weight-bold is-3">{content.mosaic.title}</h3>
        <p className="">{content.mosaic.subtitle}</p>
      </div>

      <div className="tile is-ancestor has-column-tablet">

        <div className="tile is-vertical is-8-desktop">

          <div className="tile">
            <div className="tile is-parent is-half-tablet is-second-desktop">

              <article className="tile is-child notification is-gray-light has-min-height is-animated has-content">
                <Link className="is-overlay-link" to="/mission"></Link>
                <div className="is-over-tablet">
                  <h3 className="title is-4 is-uppercase has-text-weight-bold">Cerca. Confronta. Prenota. Risparmia.</h3>
                  <p>Sul nostro portale puoi trovare tutte le strutture per studenti provenienti dai migliori siti di prenotazioni online. Grazie alla comparazione dei prezzi, puoi risparmiare fino al 60%.</p>
                  <p className="sh-goto"><span className="is-hidden-desktop" >Leggi di più</span><img className="is-hidden-touch"  style={{width: `40px`}} src={arrow} alt="mission"/></p>
                </div>
                <div className="bg-logo is-hidden-mobile" style={{ backgroundImage: `url(${bgLogo})` }}></div>
              </article>

            </div>
            <div className="tile is-parent is-vertical is-first-desktop">

              <article className="tile is-child notification is-secondary has-min-height">
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

              <span>@student.hotels</span>
            </div>

            <span className="sh-icon-social instagram" href="/"></span>

            <a className="sh-overlay-link" href='https://www.instagram.com/student_hotels/' target='_blank'></a>

          </article>

        </div>
      </div>
    </div>
  </section>
);

export default HomeMosaic;