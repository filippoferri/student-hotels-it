import React from 'react'

import Newsletter from '../components/Newsletter';
import AnteFooter from '../components/AnteFooter';

const NotFoundPage = () => (
  <main>

    <section className="section">
      <div className="container has-text-centered">

        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>

      </div>
    </section>

    <Newsletter />

    <AnteFooter />

  </main>
)

export default NotFoundPage
