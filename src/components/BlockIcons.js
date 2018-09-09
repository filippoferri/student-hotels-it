import React from 'react';

const BlockIcons = () => {
  return (
    <section className="section">
      <div className="container">

        <div className="is-centered has-margin-bottom">
          <h3 className="title is-3">Come funziona</h3>
          <p className="">lorem ipsum quare id faciam</p>
        </div>

        <div className="columns">
          <div className="column is-8-desktop is-offset-2-desktop">
            <div className="columns">
              <div className="column  has-text-centered">
                <div className="sh-block-icon"></div>
                <h5 className="title is-5">Cerca</h5>
                <span>Cerca la tua destinazione</span>
                <p>Download our free maps & guides. Use our recommended itineraries or create your own and make the best of your trip.</p>
              </div>
              <div className="column has-text-centered">
                <div className="sh-block-icon"></div>
                <h5 className="title is-5">Confronta</h5>
                <span>Confronta le offerte</span>
                <p>Choose the Pass that's right for you. Unlimited or Flex. Print your Pass or use your mobile phone as a ticket.</p>
              </div>
              <div className="column has-text-centered">
                <div className="sh-block-icon"></div>
                <h5 className="title is-5">Risparmia</h5>
                <span>Prenota al prezzo più basso</span>
                <p>Choose attractions as you go. The more you visit the more you save - you will even get to skip some queues!</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default BlockIcons;