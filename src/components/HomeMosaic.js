import React from "react";
import LatestNews from "./LatestNews";

const HomeMosaic = ({ posts }) => (
  <section className="section is-home-mosaic">
    <div className="container">
      <div className="tile is-ancestor">
        <div className="tile is-vertical is-8">
          <div className="tile">
            <div className="tile is-parent is-vertical">
              <article className="tile is-child notification is-primary has-min-height">
                <h3 className="title is-4">Student Hotels</h3>
                <p className="subtitle">Qualcosa qua</p>
              </article>
              <article className="tile is-child notification is-warning has-min-height">
                <h3 className="title is-4">Coworking</h3>
                <p className="subtitle">Qualcosa qui</p>
              </article>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child notification is-info">
                <h3 className="title is-4">Short Stay</h3>
                <p className="subtitle">qualcosa anche qua</p>
              </article>
            </div>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child notification is-danger has-min-height">
              <h3 className="title is-4">Perché Student Hotels?</h3>
              <div className="content">
                <ul className="menu-list">
                  <li>Community: stare insieme in sale dedicate e aree lounge</li>
                  <li>Servizi: Wi-Fi super veloce, Netflix, bagno privato</li>
                  <li>Posizione: sempre sicura e centrale</li>
                </ul>
              </div>
            </article>
          </div>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child notification is-success">
            <div className="content">
              <h3 className="title is-4">Eventi</h3>
              <p className="subtitle">With even more content</p>
              <div className="content">
                qualcos'altro
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
)

export default HomeMosaic;