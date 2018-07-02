import React from "react";

import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import FaCheckSquare from "@fortawesome/fontawesome-free-regular/faCheckSquare";

import bgTileFirst from "../img/tile-room.jpg";
import bgTileSecond from "../img/tile-coworking.jpg";
//import bgTileThird from "../img/tile-riunioni.jpg";
import bgTileFourth from "../img/tile-riunioni.jpg";
import bgTileFifth from "../img/tile-open-space.jpg";
import bgTileSixth from "../img/tile-ristorante.jpg";

const HomeMosaic = () => (
  <section className="section is-home-mosaic">
    <div className="container">
      <div className="tile is-ancestor">
        <div className="tile is-vertical is-8">
          <div className="tile">
            <div className="tile is-parent is-vertical">
              <article className="tile is-child notification is-primary has-min-height has-background"
                       style={{ backgroundImage: `url(${bgTileFirst})` }}>
                <div className="is-over is-from-bottom is-blue">
                  <h3 className="title is-6">Camere</h3>
                </div>
              </article>
              <article className="tile is-child notification is-primary has-min-height has-background"
                       style={{ backgroundImage: `url(${bgTileSecond})` }}>
                <div className="is-over is-from-top is-violet">
                  <h3 className="title is-6">Co-working</h3>
                </div>
              </article>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child notification is-primary">

                <h3 className="title is-4">Perché Student Hotel?</h3>
                <div className="">
                  <ul className="menu-list">
                    <li><FontAwesomeIcon className="li-icon" icon={FaCheckSquare} stack={'1x'}/> <strong className="is-uppercase">Alloggi</strong> - Design moderno con tutti i comfort</li>
                    <li><FontAwesomeIcon className="li-icon" icon={FaCheckSquare} stack={'1x'}/> <strong className="is-uppercase">Community</strong> - Sale dedicate e aree lounge per socializzare</li>
                    <li><FontAwesomeIcon className="li-icon" icon={FaCheckSquare} stack={'1x'}/> <strong className="is-uppercase">Servizi</strong> - Wi-Fi super veloce, Netflix, bagno privato</li>
                    <li><FontAwesomeIcon className="li-icon" icon={FaCheckSquare} stack={'1x'}/> <strong className="is-uppercase">Posizione</strong> - Sempre sicura e centrale</li>
                  </ul>
                </div>
              </article>
            </div>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child notification is-primary has-min-height has-background"
                     style={{ backgroundImage: `url(${bgTileFourth})` }}>

              <div className="is-over is-from-top is-violet">
                <h3 className="title is-6">Sale riunioni</h3>
              </div>

            </article>
          </div>
        </div>
        <div className="tile is-parent is-vertical">
          <article className="tile is-child notification is-primary has-min-height has-background"
                   style={{ backgroundImage: `url(${bgTileFifth})` }}>
            <div className="is-over is-from-bottom is-violet">
              <h3 className="title is-6">Open Space</h3>
            </div>
          </article>
          <article className="tile is-child notification is-primary has-min-height has-background"
                   style={{ backgroundImage: `url(${bgTileSixth})` }}>
            <div className="is-over is-from-top is-blue">
              <h3 className="title is-6">Ristorante e bar</h3>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
);

export default HomeMosaic;