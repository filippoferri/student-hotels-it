import React from 'react';

const BlockIcons = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-8-desktop is-offset-2-desktop">
            <div className="columns">
              <div className="column  has-text-centered">
                <div className="sh-block-icon"></div>
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