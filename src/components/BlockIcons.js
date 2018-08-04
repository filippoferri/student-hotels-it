import React from 'react';

import search from "../img/infograph-search.svg";

const BlockIcons = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-8-desktop is-offset-2-desktop">
            <div className="columns">
              <div className="column  has-text-centered">
                <div className="sh-block-icon"><img src={search} alt="" width="120px"/></div>
                <span>Cerca la tua destinazione</span>
              </div>
              <div className="column has-text-centered">
                <div className="sh-block-icon"></div>
                <span>Confronta le offerte</span>
              </div>
              <div className="column has-text-centered">
                <div className="sh-block-icon"></div>
                <span>Prenota al prezzo più basso</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default BlockIcons;