import React from 'react';

import IconSearch from '../img/cerca-student-hotels.svg';
import IconCompare from '../img/compara-student-hotels.svg';
import IconSave from '../img/risparmia-student-hotels.svg';

const BlockIcons = () => {
  return (
    <section className="section has-margin-bottom">
      <div className="container">

        <div className="is-centered has-margin-bottom">
          <h3 className="title is-3">Risparmia sui migliori Student Hotel</h3>
          <p className="">La forza del nostro team e delle nostre sofisticate tecnologie</p>
        </div>

        <div className="columns">
          <div className="column is-10-desktop is-offset-1-desktop">
            <div className="columns">
              <div className="column  has-text-centered">
                <div className="sh-block-icon"><img src={IconSearch} alt="trova location"/></div>
                <h5 className="title is-5">Trova la location desiderata</h5>
                <p>Con il nostro portale puoi scoprire la struttura perfetta per le tue esigenze cercando tra una vasta selezione di hotel per studenti in Italia e all'estero.</p>
              </div>
              <div className="column has-text-centered">
                <div className="sh-block-icon"><img src={IconCompare} alt="compara i prezzi"/></div>
                <h5 className="title is-5">Compara le migliori offerte</h5>
                <p>Esamina le strutture a cui sei interessato, controlla le recensioni degli utenti, segui le migliori raccomandazioni, consulta le mappe per evitare sorprese.</p>
              </div>
              <div className="column has-text-centered">
                <div className="sh-block-icon"><img src={IconSave} alt="prenota student hotel"/></div>
                <h5 className="title is-5">Prenota al prezzo più basso</h5>
                <p>Consultando i prezzi tra i vari offerenti nel web (tra cui: Booking.com, Expedia, Agodà, Hotels.com) puoi risparmiare fino al 60% su ogni prenotazione.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default BlockIcons;